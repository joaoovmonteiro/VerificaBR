import type { VercelRequest, VercelResponse } from '@vercel/node';
import { emailValidationRequestSchema } from '../../shared/schema';
import { EmailValidator } from '../../server/services/validators';

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
    const validatedData = emailValidationRequestSchema.parse(req.body);
    const result = await EmailValidator.validateEmail(validatedData.email);
    res.json(result);
  } catch (error) {
    res.status(400).json({
      success: false,
      valid: false,
      email: req.body?.email || '',
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
}
