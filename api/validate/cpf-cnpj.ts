import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { document } = req.body || {};
    
    if (!document) {
      return res.status(400).json({
        success: false,
        valid: false,
        document: '',
        formattedDocument: '',
        type: "CPF",
        message: "Documento é obrigatório"
      });
    }

    const result = validateCpfCnpj(document);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      valid: false,
      document: '',
      formattedDocument: '',
      type: "CPF",
      message: "Erro interno do servidor"
    });
  }
}

function validateCpfCnpj(document: string) {
  try {
    const cleanDoc = document.replace(/\D/g, '');
    
    if (cleanDoc.length === 11) {
      return validateCpf(cleanDoc);
    } else if (cleanDoc.length === 14) {
      return validateCnpj(cleanDoc);
    } else {
      return {
        success: true,
        valid: false,
        document,
        formattedDocument: document,
        type: cleanDoc.length < 12 ? "CPF" : "CNPJ",
        message: "Documento deve ter 11 dígitos (CPF) ou 14 dígitos (CNPJ)"
      };
    }
  } catch (error) {
    return {
      success: false,
      valid: false,
      document,
      formattedDocument: document,
      type: "CPF",
      message: "Erro ao validar documento"
    };
  }
}

function validateCpf(cpf: string) {
  // Check for invalid sequences
  const invalidSequences = ['00000000000', '11111111111', '22222222222', '33333333333', '44444444444', '55555555555', '66666666666', '77777777777', '88888888888', '99999999999'];
  if (invalidSequences.includes(cpf)) {
    return {
      success: true,
      valid: false,
      document: cpf,
      formattedDocument: formatCpf(cpf),
      type: "CPF",
      message: "CPF com sequência inválida"
    };
  }

  // Validate first digit
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let remainder = (sum * 10) % 11;
  if (remainder === 10) remainder = 0;
  if (remainder !== parseInt(cpf.charAt(9))) {
    return {
      success: true,
      valid: false,
      document: cpf,
      formattedDocument: formatCpf(cpf),
      type: "CPF",
      message: "CPF inválido - primeiro dígito verificador incorreto"
    };
  }

  // Validate second digit
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10) remainder = 0;
  if (remainder !== parseInt(cpf.charAt(10))) {
    return {
      success: true,
      valid: false,
      document: cpf,
      formattedDocument: formatCpf(cpf),
      type: "CPF",
      message: "CPF inválido - segundo dígito verificador incorreto"
    };
  }

  return {
    success: true,
    valid: true,
    document: cpf,
    formattedDocument: formatCpf(cpf),
    type: "CPF",
    message: "CPF válido"
  };
}

function validateCnpj(cnpj: string) {
  // Check for invalid sequences
  const invalidSequences = ['00000000000000', '11111111111111', '22222222222222', '33333333333333', '44444444444444', '55555555555555', '66666666666666', '77777777777777', '88888888888888', '99999999999999'];
  if (invalidSequences.includes(cnpj)) {
    return {
      success: true,
      valid: false,
      document: cnpj,
      formattedDocument: formatCnpj(cnpj),
      type: "CNPJ",
      message: "CNPJ com sequência inválida"
    };
  }

  // Validate first digit
  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cnpj.charAt(i)) * weights1[i];
  }
  let remainder = sum % 11;
  const digit1 = remainder < 2 ? 0 : 11 - remainder;
  if (digit1 !== parseInt(cnpj.charAt(12))) {
    return {
      success: true,
      valid: false,
      document: cnpj,
      formattedDocument: formatCnpj(cnpj),
      type: "CNPJ",
      message: "CNPJ inválido - primeiro dígito verificador incorreto"
    };
  }

  // Validate second digit
  const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  sum = 0;
  for (let i = 0; i < 13; i++) {
    sum += parseInt(cnpj.charAt(i)) * weights2[i];
  }
  remainder = sum % 11;
  const digit2 = remainder < 2 ? 0 : 11 - remainder;
  if (digit2 !== parseInt(cnpj.charAt(13))) {
    return {
      success: true,
      valid: false,
      document: cnpj,
      formattedDocument: formatCnpj(cnpj),
      type: "CNPJ",
      message: "CNPJ inválido - segundo dígito verificador incorreto"
    };
  }

  return {
    success: true,
    valid: true,
    document: cnpj,
    formattedDocument: formatCnpj(cnpj),
    type: "CNPJ",
    message: "CNPJ válido"
  };
}

function formatCpf(cpf: string): string {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

function formatCnpj(cnpj: string): string {
  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
}
