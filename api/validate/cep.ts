import type { VercelRequest, VercelResponse } from '@vercel/node';
import { cepValidationRequestSchema } from '../../shared/schema';
import { CepValidator } from '../../server/services/validators';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const validatedData = cepValidationRequestSchema.parse(req.body);
    const result = await CepValidator.validateCep(validatedData.cep);
    res.json(result);
  } catch (error) {
    res.status(400).json({
      success: false,
      valid: false,
      cep: req.body?.cep || '',
      formattedCep: req.body?.cep || '',
      message: "Dados de entrada inválidos"
    });
  }
}
