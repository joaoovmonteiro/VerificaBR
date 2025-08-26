import type { Express } from "express";
import { createServer, type Server } from "http";
import { 
  cpfCnpjValidationRequestSchema,
  phoneValidationRequestSchema,
  cepValidationRequestSchema,
  emailValidationRequestSchema
} from "@shared/schema";
import { DocumentValidator, PhoneValidator, CepValidator, EmailValidator } from "./services/validators";

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

  // All file conversion routes have been removed - focusing only on validation tools

  const httpServer = createServer(app);
  return httpServer;
}
