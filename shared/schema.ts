import { z } from "zod";

// CPF/CNPJ Validation
export const cpfCnpjValidationRequestSchema = z.object({
  document: z.string().min(1, "Documento é obrigatório"),
});

export const cpfCnpjValidationResponseSchema = z.object({
  success: z.boolean(),
  valid: z.boolean(),
  document: z.string(),
  formattedDocument: z.string(),
  type: z.enum(["CPF", "CNPJ"]),
  message: z.string(),
});

// Phone Validation
export const phoneValidationRequestSchema = z.object({
  phone: z.string().min(1, "Telefone é obrigatório"),
  type: z.enum(["br", "international"]).default("br"),
});

export const phoneValidationResponseSchema = z.object({
  success: z.boolean(),
  valid: z.boolean(),
  phone: z.string(),
  formattedPhone: z.string(),
  type: z.enum(["Fixo", "Celular", "0800", "4004", "Internacional"]),
  areaCode: z.string().optional(),
  areaName: z.string().optional(),
  carrier: z.string().optional(),
  message: z.string(),
});

// CEP Validation
export const cepValidationRequestSchema = z.object({
  cep: z.string().min(1, "CEP é obrigatório"),
});

export const cepValidationResponseSchema = z.object({
  success: z.boolean(),
  valid: z.boolean(),
  cep: z.string(),
  formattedCep: z.string(),
  address: z.object({
    street: z.string(),
    neighborhood: z.string(),
    city: z.string(),
    state: z.string(),
    ibge: z.string().optional(),
  }).optional(),
  message: z.string(),
});

// Email Validation
export const emailValidationRequestSchema = z.object({
  email: z.string().min(1, "Email é obrigatório"),
});

export const emailValidationResponseSchema = z.object({
  success: z.boolean(),
  valid: z.boolean(),
  email: z.string(),
  result: z.enum(["valid", "invalid", "unknown"]),
  reason: z.string(),
  message: z.string(),
  checks: z.object({
    syntax: z.boolean(),
    domain: z.boolean(),
    mx: z.boolean(),
    smtp: z.boolean(),
    disposable: z.boolean(),
    roleBase: z.boolean(),
    catchAll: z.boolean(),
  }),
  didYouMean: z.string().optional(),
});

// File Conversion
export const fileConversionRequestSchema = z.object({
  type: z.enum([
    'word-to-pdf',
    'pdf-to-word', 
    'image-converter'
  ]),
});

export const fileConversionResponseSchema = z.object({
  success: z.boolean(),
  downloadUrl: z.string().optional(),
  filename: z.string().optional(),
  originalName: z.string().optional(),
  size: z.number().optional(),
  format: z.string().optional(),
  error: z.string().optional(),
});

export type CpfCnpjValidationRequest = z.infer<typeof cpfCnpjValidationRequestSchema>;
export type CpfCnpjValidationResponse = z.infer<typeof cpfCnpjValidationResponseSchema>;
export type PhoneValidationRequest = z.infer<typeof phoneValidationRequestSchema>;
export type PhoneValidationResponse = z.infer<typeof phoneValidationResponseSchema>;
export type CepValidationRequest = z.infer<typeof cepValidationRequestSchema>;
export type CepValidationResponse = z.infer<typeof cepValidationResponseSchema>;
export type EmailValidationRequest = z.infer<typeof emailValidationRequestSchema>;
export type EmailValidationResponse = z.infer<typeof emailValidationResponseSchema>;
export type FileConversionRequest = z.infer<typeof fileConversionRequestSchema>;
export type FileConversionResponse = z.infer<typeof fileConversionResponseSchema>;
