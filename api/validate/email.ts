import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
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
    const { email } = req.body || {};
    
    if (!email) {
      return res.status(400).json({
        success: false,
        valid: false,
        email: '',
        result: 'invalid',
        reason: 'invalid_format',
        message: "Email é obrigatório",
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

    const result = await validateEmail(email);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      valid: false,
      email: '',
      result: 'unknown',
      reason: 'exception',
      message: "Erro interno do servidor",
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

const DISPOSABLE_DOMAINS = new Set([
  'mailinator.com', 'tempmail.com', '10minutemail.com', 'guerrillamail.com',
  'sharklasers.com', 'throwawaymail.com', 'yopmail.com', 'dispostable.com'
]);

const ROLE_PREFIXES = new Set([
  'admin', 'support', 'info', 'contact', 'sales', 'billing', 'help',
  'webmaster', 'marketing', 'team', 'office', 'noreply'
]);

const POPULAR_DOMAINS = [
  'hotmail.com', 'gmail.com', 'icloud.com', 'outlook.com', 'yahoo.com', 'ymail.com',
  'hotmail.com.br', 'gmail.com.br', 'yahoo.com.br', 'outlook.com.br'
];

async function validateEmail(email: string) {
  try {
    // Basic syntax validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return {
        success: true,
        valid: false,
        email,
        result: 'invalid',
        reason: 'invalid_format',
        message: 'Formato de email inválido',
        checks: {
          syntax: false,
          domain: false,
          mx: false,
          smtp: false,
          disposable: false,
          roleBase: false,
          catchAll: false,
        }
      };
    }

    const [user, domain] = email.split('@');
    const domainLower = domain.toLowerCase();
    
    // Check for typos in popular domains
    let didYouMean: string | undefined;
    if (!POPULAR_DOMAINS.includes(domainLower)) {
      didYouMean = findSimilarDomain(domainLower);
      if (didYouMean) {
        return {
          success: true,
          valid: false,
          email,
          result: 'invalid',
          reason: 'suspected_typo',
          message: `Domínio suspeito, você quis dizer ${didYouMean}?`,
          checks: {
            syntax: true,
            domain: false,
            mx: false,
            smtp: false,
            disposable: false,
            roleBase: false,
            catchAll: false,
          },
          didYouMean
        };
      }
    }

    // Check if disposable
    const isDisposable = DISPOSABLE_DOMAINS.has(domainLower);
    
    // Check if role-based
    const isRoleBased = ROLE_PREFIXES.has(user.toLowerCase());

    // Basic domain validation (simplified for Vercel)
    const domainExists = await checkDomainExists(domain);
    
    // For Vercel, we'll do basic validation only
    // MX and SMTP checks are disabled due to serverless limitations
    const isValid = domainExists && !isDisposable;

    return {
      success: true,
      valid: isValid,
      email,
      result: isValid ? 'valid' : 'invalid',
      reason: isValid ? 'domain_exists' : isDisposable ? 'disposable_email' : 'invalid_domain',
      message: isValid ? 'Email válido (verificação básica)' : isDisposable ? 'Email descartável detectado' : 'Domínio não encontrado',
      checks: {
        syntax: true,
        domain: domainExists,
        mx: false, // Disabled for Vercel serverless
        smtp: false, // Disabled for Vercel serverless
        disposable: !isDisposable, // Inverted logic for display
        roleBase: !isRoleBased, // Inverted logic for display
        catchAll: false,
      }
    };
  } catch (error) {
    return {
      success: false,
      valid: false,
      email,
      result: 'unknown',
      reason: 'exception',
      message: 'Erro inesperado durante a verificação',
      checks: {
        syntax: false,
        domain: false,
        mx: false,
        smtp: false,
        disposable: false,
        roleBase: false,
        catchAll: false,
      }
    };
  }
}

function findSimilarDomain(domain: string): string | undefined {
  for (const popularDomain of POPULAR_DOMAINS) {
    if (calculateSimilarity(domain, popularDomain) > 0.85) {
      return popularDomain;
    }
  }
  return undefined;
}

function calculateSimilarity(str1: string, str2: string): number {
  const matrix = [];
  const len1 = str1.length;
  const len2 = str2.length;

  for (let i = 0; i <= len2; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= len1; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= len2; i++) {
    for (let j = 1; j <= len1; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  const distance = matrix[len2][len1];
  const maxLen = Math.max(len1, len2);
  return (maxLen - distance) / maxLen;
}

async function checkDomainExists(domain: string): Promise<boolean> {
  try {
    // Try multiple DNS providers for better reliability
    const providers = [
      `https://dns.google/resolve?name=${domain}&type=A`,
      `https://cloudflare-dns.com/dns-query?name=${domain}&type=A`,
    ];
    
    for (const url of providers) {
      try {
        const response = await fetch(url, {
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          if (data.Answer && data.Answer.length > 0) {
            return true;
          }
        }
      } catch (e) {
        // Continue to next provider
        continue;
      }
    }
    
    return false;
  } catch (error) {
    return false;
  }
}
