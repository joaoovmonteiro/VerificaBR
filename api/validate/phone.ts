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
    const { phone, type = 'br' } = req.body;
    
    if (!phone) {
      return res.status(400).json({
        success: false,
        valid: false,
        phone: '',
        formattedPhone: '',
        type: 'Celular',
        message: "Telefone é obrigatório"
      });
    }

    const result = validatePhone(phone, type);
    res.json(result);
  } catch (error) {
    res.status(400).json({
      success: false,
      valid: false,
      phone: req.body?.phone || '',
      formattedPhone: req.body?.phone || '',
      type: 'Celular',
      message: "Dados de entrada inválidos"
    });
  }
}

function validatePhone(phone: string, type: 'br' | 'international') {
  try {
    const cleanPhone = phone.replace(/\D/g, '');
    
    if (type === 'br') {
      return validateBrazilianPhone(cleanPhone);
    } else {
      return validateInternationalPhone(cleanPhone);
    }
  } catch (error) {
    return {
      success: false,
      valid: false,
      phone,
      formattedPhone: phone,
      type: 'Celular',
      message: 'Erro ao validar telefone'
    };
  }
}

const AREA_CODES: { [key: string]: string } = {
  '11': 'São Paulo', '12': 'São Paulo', '13': 'São Paulo', '14': 'São Paulo', '15': 'São Paulo',
  '16': 'São Paulo', '17': 'São Paulo', '18': 'São Paulo', '19': 'São Paulo',
  '21': 'Rio de Janeiro', '22': 'Rio de Janeiro', '24': 'Rio de Janeiro',
  '27': 'Espírito Santo', '28': 'Espírito Santo',
  '31': 'Minas Gerais', '32': 'Minas Gerais', '33': 'Minas Gerais', '34': 'Minas Gerais',
  '35': 'Minas Gerais', '37': 'Minas Gerais', '38': 'Minas Gerais',
  '41': 'Paraná', '42': 'Paraná', '43': 'Paraná', '44': 'Paraná', '45': 'Paraná', '46': 'Paraná',
  '47': 'Santa Catarina', '48': 'Santa Catarina', '49': 'Santa Catarina',
  '51': 'Rio Grande do Sul', '53': 'Rio Grande do Sul', '54': 'Rio Grande do Sul', '55': 'Rio Grande do Sul',
  '61': 'Distrito Federal',
  '62': 'Goiás', '64': 'Goiás',
  '63': 'Tocantins',
  '65': 'Mato Grosso', '66': 'Mato Grosso',
  '67': 'Mato Grosso do Sul',
  '68': 'Acre',
  '69': 'Rondônia',
  '71': 'Bahia', '73': 'Bahia', '74': 'Bahia', '75': 'Bahia', '77': 'Bahia',
  '79': 'Sergipe',
  '81': 'Pernambuco', '87': 'Pernambuco',
  '82': 'Alagoas',
  '83': 'Paraíba',
  '84': 'Rio Grande do Norte',
  '85': 'Ceará', '88': 'Ceará',
  '86': 'Piauí', '89': 'Piauí',
  '91': 'Pará', '93': 'Pará', '94': 'Pará',
  '92': 'Amazonas', '97': 'Amazonas',
  '95': 'Roraima',
  '96': 'Amapá',
  '98': 'Maranhão', '99': 'Maranhão'
};

const CARRIERS: { [key: string]: string[] } = {
  'Vivo': ['15', '16', '17'],
  'TIM': ['14', '15', '16'],
  'Claro': ['11', '12', '13', '14', '15'],
  'Oi': ['14', '15', '16', '17']
};

function validateBrazilianPhone(phone: string) {
  // Check 0800
  if (phone.startsWith('0800') && phone.length === 10) {
    return {
      success: true,
      valid: true,
      phone,
      formattedPhone: phone.replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3'),
      type: '0800',
      message: 'Número 0800 válido'
    };
  }

  // Check 4004
  if (phone.startsWith('4004') && phone.length === 8) {
    return {
      success: true,
      valid: true,
      phone,
      formattedPhone: phone.replace(/(\d{4})(\d{4})/, '$1-$2'),
      type: '4004',
      message: 'Número 4004 válido'
    };
  }

  // Check mobile (11 digits) or landline (10 digits)
  if (phone.length === 11 || phone.length === 10) {
    const areaCode = phone.substring(0, 2);
    const areaName = AREA_CODES[areaCode];
    
    if (!areaName) {
      return {
        success: true,
        valid: false,
        phone,
        formattedPhone: formatBrazilianPhone(phone),
        type: phone.length === 11 ? 'Celular' : 'Fixo',
        message: 'DDD inválido'
      };
    }

    // Mobile validation (11 digits, 9 as first digit)
    if (phone.length === 11) {
      const firstDigit = phone.charAt(2);
      if (firstDigit !== '9') {
        return {
          success: true,
          valid: false,
          phone,
          formattedPhone: formatBrazilianPhone(phone),
          type: 'Celular',
          areaCode,
          areaName,
          message: 'Número de celular deve começar com 9'
        };
      }

      const carrier = detectCarrier(phone.substring(2, 4));
      return {
        success: true,
        valid: true,
        phone,
        formattedPhone: formatBrazilianPhone(phone),
        type: 'Celular',
        areaCode,
        areaName: `${areaCode} - ${areaName}`,
        carrier,
        message: 'Número de celular válido'
      };
    }

    // Landline validation (10 digits)
    return {
      success: true,
      valid: true,
      phone,
      formattedPhone: formatBrazilianPhone(phone),
      type: 'Fixo',
      areaCode,
      areaName: `${areaCode} - ${areaName}`,
      message: 'Número fixo válido'
    };
  }

  return {
    success: true,
    valid: false,
    phone,
    formattedPhone: phone,
    type: 'Celular',
    message: 'Formato de telefone inválido'
  };
}

function validateInternationalPhone(phone: string) {
  // Basic international phone validation
  if (phone.length >= 8 && phone.length <= 15) {
    return {
      success: true,
      valid: true,
      phone,
      formattedPhone: phone,
      type: 'Internacional',
      message: 'Número internacional válido'
    };
  }

  return {
    success: true,
    valid: false,
    phone,
    formattedPhone: phone,
    type: 'Internacional',
    message: 'Número internacional deve ter entre 8 e 15 dígitos'
  };
}

function formatBrazilianPhone(phone: string): string {
  if (phone.length === 11) {
    return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (phone.length === 10) {
    return phone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  return phone;
}

function detectCarrier(prefix: string): string {
  for (const [carrier, prefixes] of Object.entries(CARRIERS)) {
    if (prefixes.includes(prefix)) {
      return carrier;
    }
  }
  return 'Não identificada';
}
