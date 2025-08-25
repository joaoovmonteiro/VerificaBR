import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import { 
  cpfCnpjValidationRequestSchema,
  phoneValidationRequestSchema,
  cepValidationRequestSchema,
  emailValidationRequestSchema,
  fileConversionRequestSchema
} from "@shared/schema";
import { DocumentValidator, PhoneValidator, CepValidator, EmailValidator } from "./services/validators";
import { fileConverter } from "./services/file-converter";

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB
  },
  fileFilter: (req, file, cb) => {
    // Allow common file types
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/bmp',
      'image/tiff',
      'image/webp'
    ];
    
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Tipo de arquivo não suportado'));
    }
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // CPF/CNPJ Validation endpoint
  app.post("/api/validate/cpf-cnpj", async (req, res) => {
    try {
      const validatedData = cpfCnpjValidationRequestSchema.parse(req.body);
      const result = DocumentValidator.validateCpfCnpj(validatedData.document);
      res.json(result);
    } catch (error) {
      res.status(400).json({
        success: false,
        valid: false,
        document: req.body.document || '',
        formattedDocument: req.body.document || '',
        type: "CPF",
        message: "Dados de entrada inválidos"
      });
    }
  });

  // Phone Validation endpoint
  app.post("/api/validate/phone", async (req, res) => {
    try {
      const validatedData = phoneValidationRequestSchema.parse(req.body);
      const result = PhoneValidator.validatePhone(validatedData.phone, validatedData.type);
      res.json(result);
    } catch (error) {
      res.status(400).json({
        success: false,
        valid: false,
        phone: req.body.phone || '',
        formattedPhone: req.body.phone || '',
        type: 'Celular',
        message: "Dados de entrada inválidos"
      });
    }
  });

  // CEP Validation endpoint
  app.post("/api/validate/cep", async (req, res) => {
    try {
      const validatedData = cepValidationRequestSchema.parse(req.body);
      const result = await CepValidator.validateCep(validatedData.cep);
      res.json(result);
    } catch (error) {
      res.status(400).json({
        success: false,
        valid: false,
        cep: req.body.cep || '',
        formattedCep: req.body.cep || '',
        message: "Dados de entrada inválidos"
      });
    }
  });

  // Email Validation endpoint
  app.post("/api/validate/email", async (req, res) => {
    try {
      const validatedData = emailValidationRequestSchema.parse(req.body);
      const result = await EmailValidator.validateEmail(validatedData.email);
      res.json(result);
    } catch (error) {
      res.status(400).json({
        success: false,
        valid: false,
        email: req.body.email || '',
        result: 'unknown',
        reason: 'exception',
        message: "Dados de entrada inválidos",
        checks: {
          syntax: false,
          domain: false,
          mx: false,
          smtp: false,
          disposable: false,
          roleBase: false,
          catchAll: false,
        }
      });
    }
  });

  // File Conversion endpoint
  app.post("/api/convert", upload.single('file'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          error: "Nenhum arquivo foi enviado"
        });
      }

      const { type } = req.body;
      const validatedType = fileConversionRequestSchema.parse({ type });
      
      let result;
      
      switch (validatedType.type) {
        case 'word-to-pdf':
          result = await fileConverter.convertWordToPdf(req.file.buffer, req.file.originalname);
          break;
        case 'pdf-to-word':
          result = await fileConverter.convertPdfToWord(req.file.buffer, req.file.originalname);
          break;
        case 'image-converter':
          // For image conversion, you could add target format from form data
          const targetFormat = req.body.targetFormat || 'jpg';
          result = await fileConverter.convertImage(req.file.buffer, req.file.originalname, targetFormat);
          break;
        default:
          return res.status(400).json({
            success: false,
            error: "Tipo de conversão não suportado"
          });
      }
      
      res.json(result);
    } catch (error) {
      console.error('Conversion error:', error);
      res.status(500).json({
        success: false,
        error: "Erro interno do servidor"
      });
    }
  });

  // File Download endpoint
  app.get("/api/download/:filename", async (req, res) => {
    try {
      const { filename } = req.params;
      
      // Validate filename to prevent path traversal
      if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
        return res.status(400).json({
          success: false,
          error: "Nome de arquivo inválido"
        });
      }
      
      const fileBuffer = await fileConverter.getFile(filename);
      
      if (!fileBuffer) {
        return res.status(404).json({
          success: false,
          error: "Arquivo não encontrado"
        });
      }
      
      // Set appropriate headers for file download
      const extension = filename.split('.').pop()?.toLowerCase();
      let contentType = 'application/octet-stream';
      
      switch (extension) {
        case 'pdf':
          contentType = 'application/pdf';
          break;
        case 'docx':
          contentType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
          break;
        case 'doc':
          contentType = 'application/msword';
          break;
        case 'jpg':
        case 'jpeg':
          contentType = 'image/jpeg';
          break;
        case 'png':
          contentType = 'image/png';
          break;
        case 'gif':
          contentType = 'image/gif';
          break;
        case 'webp':
          contentType = 'image/webp';
          break;
      }
      
      res.setHeader('Content-Type', contentType);
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      res.send(fileBuffer);
    } catch (error) {
      console.error('Download error:', error);
      res.status(500).json({
        success: false,
        error: "Erro ao baixar arquivo"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
