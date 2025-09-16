import type { VercelRequest, VercelResponse } from '@vercel/node';

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
    const { cep } = req.body;
    
    if (!cep) {
      return res.status(400).json({
        success: false,
        valid: false,
        cep: '',
        formattedCep: '',
        message: "CEP é obrigatório"
      });
    }

    const result = await validateCep(cep);
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

async function validateCep(cep: string) {
  try {
    const cleanCep = cep.replace(/\D/g, '');
    
    if (cleanCep.length !== 8) {
      return {
        success: true,
        valid: false,
        cep: cleanCep,
        formattedCep: formatCep(cleanCep),
        message: 'CEP deve ter 8 dígitos'
      };
    }

    const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
    const data = await response.json();

    if (data.erro) {
      return {
        success: true,
        valid: false,
        cep: cleanCep,
        formattedCep: formatCep(cleanCep),
        message: 'CEP não encontrado'
      };
    }

    return {
      success: true,
      valid: true,
      cep: cleanCep,
      formattedCep: formatCep(cleanCep),
      address: {
        street: data.logradouro || 'N/A',
        neighborhood: data.bairro || 'N/A',
        city: data.localidade || 'N/A',
        state: data.uf || 'N/A',
        ibge: data.ibge || undefined,
      },
      message: 'CEP encontrado'
    };
  } catch (error) {
    return {
      success: false,
      valid: false,
      cep,
      formattedCep: formatCep(cep),
      message: 'Erro ao consultar CEP'
    };
  }
}

function formatCep(cep: string): string {
  const cleanCep = cep.replace(/\D/g, '');
  return cleanCep.replace(/(\d{5})(\d{3})/, '$1-$2');
}
