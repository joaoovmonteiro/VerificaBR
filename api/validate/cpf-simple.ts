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

    // Simple CPF validation
    const cleanDoc = document.replace(/\D/g, '');
    const isValid = cleanDoc.length === 11;
    
    res.json({
      success: true,
      valid: isValid,
      document: cleanDoc,
      formattedDocument: cleanDoc.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'),
      type: "CPF",
      message: isValid ? "CPF válido" : "CPF inválido"
    });
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
