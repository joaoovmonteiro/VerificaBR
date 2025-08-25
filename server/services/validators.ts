import { createHash } from 'crypto';
import dns from 'dns';
import net from 'net';
import {
  CpfCnpjValidationResponse,
  PhoneValidationResponse,
  CepValidationResponse,
  EmailValidationResponse
} from '@shared/schema';

// CPF/CNPJ Validation
export class DocumentValidator {
  static validateCpfCnpj(document: string): CpfCnpjValidationResponse {
    try {
      const cleanDoc = document.replace(/\D/g, '');
      
      if (cleanDoc.length === 11) {
        return this.validateCpf(cleanDoc);
      } else if (cleanDoc.length === 14) {
        return this.validateCnpj(cleanDoc);
      } else {
        return {
          success: false,
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

  private static validateCpf(cpf: string): CpfCnpjValidationResponse {
    // Check for invalid sequences
    const invalidSequences = ['00000000000', '11111111111', '22222222222', '33333333333', '44444444444', '55555555555', '66666666666', '77777777777', '88888888888', '99999999999'];
    if (invalidSequences.includes(cpf)) {
      return {
        success: true,
        valid: false,
        document: cpf,
        formattedDocument: this.formatCpf(cpf),
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
        formattedDocument: this.formatCpf(cpf),
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
        formattedDocument: this.formatCpf(cpf),
        type: "CPF",
        message: "CPF inválido - segundo dígito verificador incorreto"
      };
    }

    return {
      success: true,
      valid: true,
      document: cpf,
      formattedDocument: this.formatCpf(cpf),
      type: "CPF",
      message: "CPF válido"
    };
  }

  private static validateCnpj(cnpj: string): CpfCnpjValidationResponse {
    // Check for invalid sequences
    const invalidSequences = ['00000000000000', '11111111111111', '22222222222222', '33333333333333', '44444444444444', '55555555555555', '66666666666666', '77777777777777', '88888888888888', '99999999999999'];
    if (invalidSequences.includes(cnpj)) {
      return {
        success: true,
        valid: false,
        document: cnpj,
        formattedDocument: this.formatCnpj(cnpj),
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
        formattedDocument: this.formatCnpj(cnpj),
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
        formattedDocument: this.formatCnpj(cnpj),
        type: "CNPJ",
        message: "CNPJ inválido - segundo dígito verificador incorreto"
      };
    }

    return {
      success: true,
      valid: true,
      document: cnpj,
      formattedDocument: this.formatCnpj(cnpj),
      type: "CNPJ",
      message: "CNPJ válido"
    };
  }

  private static formatCpf(cpf: string): string {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  private static formatCnpj(cnpj: string): string {
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }
}

// Phone Validation
export class PhoneValidator {
  private static readonly AREA_CODES: { [key: string]: string } = {
    '11': 'São Paulo',
    '12': 'São Paulo',
    '13': 'São Paulo',
    '14': 'São Paulo',
    '15': 'São Paulo',
    '16': 'São Paulo',
    '17': 'São Paulo',
    '18': 'São Paulo',
    '19': 'São Paulo',
    '21': 'Rio de Janeiro',
    '22': 'Rio de Janeiro',
    '24': 'Rio de Janeiro',
    '27': 'Espírito Santo',
    '28': 'Espírito Santo',
    '31': 'Minas Gerais',
    '32': 'Minas Gerais',
    '33': 'Minas Gerais',
    '34': 'Minas Gerais',
    '35': 'Minas Gerais',
    '37': 'Minas Gerais',
    '38': 'Minas Gerais',
    '41': 'Paraná',
    '42': 'Paraná',
    '43': 'Paraná',
    '44': 'Paraná',
    '45': 'Paraná',
    '46': 'Paraná',
    '47': 'Santa Catarina',
    '48': 'Santa Catarina',
    '49': 'Santa Catarina',
    '51': 'Rio Grande do Sul',
    '53': 'Rio Grande do Sul',
    '54': 'Rio Grande do Sul',
    '55': 'Rio Grande do Sul',
    '61': 'Distrito Federal',
    '62': 'Goiás',
    '63': 'Tocantins',
    '64': 'Goiás',
    '65': 'Mato Grosso',
    '66': 'Mato Grosso',
    '67': 'Mato Grosso do Sul',
    '68': 'Acre',
    '69': 'Rondônia',
    '71': 'Bahia',
    '73': 'Bahia',
    '74': 'Bahia',
    '75': 'Bahia',
    '77': 'Bahia',
    '79': 'Sergipe',
    '81': 'Pernambuco',
    '82': 'Alagoas',
    '83': 'Paraíba',
    '84': 'Rio Grande do Norte',
    '85': 'Ceará',
    '86': 'Piauí',
    '87': 'Pernambuco',
    '88': 'Ceará',
    '89': 'Piauí',
    '91': 'Pará',
    '92': 'Amazonas',
    '93': 'Pará',
    '94': 'Pará',
    '95': 'Roraima',
    '96': 'Amapá',
    '97': 'Amazonas',
    '98': 'Maranhão',
    '99': 'Maranhão'
  };

  private static readonly CARRIERS: { [key: string]: string[] } = {
    'Vivo': ['15', '16', '17'],
    'TIM': ['14', '15', '16'],
    'Claro': ['11', '12', '13', '14', '15'],
    'Oi': ['14', '15', '16', '17']
  };

  static validatePhone(phone: string, type: 'br' | 'international'): PhoneValidationResponse {
    try {
      const cleanPhone = phone.replace(/\D/g, '');
      
      if (type === 'br') {
        return this.validateBrazilianPhone(cleanPhone);
      } else {
        return this.validateInternationalPhone(cleanPhone);
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

  private static validateBrazilianPhone(phone: string): PhoneValidationResponse {
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
      const areaName = this.AREA_CODES[areaCode];
      
      if (!areaName) {
        return {
          success: true,
          valid: false,
          phone,
          formattedPhone: this.formatBrazilianPhone(phone),
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
            formattedPhone: this.formatBrazilianPhone(phone),
            type: 'Celular',
            areaCode,
            areaName,
            message: 'Número de celular deve começar com 9'
          };
        }

        const carrier = this.detectCarrier(phone.substring(2, 4));
        return {
          success: true,
          valid: true,
          phone,
          formattedPhone: this.formatBrazilianPhone(phone),
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
        formattedPhone: this.formatBrazilianPhone(phone),
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

  private static validateInternationalPhone(phone: string): PhoneValidationResponse {
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

  private static formatBrazilianPhone(phone: string): string {
    if (phone.length === 11) {
      return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (phone.length === 10) {
      return phone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    return phone;
  }

  private static detectCarrier(prefix: string): string {
    for (const [carrier, prefixes] of Object.entries(this.CARRIERS)) {
      if (prefixes.includes(prefix)) {
        return carrier;
      }
    }
    return 'Não identificada';
  }
}

// CEP Validation
export class CepValidator {
  static async validateCep(cep: string): Promise<CepValidationResponse> {
    try {
      const cleanCep = cep.replace(/\D/g, '');
      
      if (cleanCep.length !== 8) {
        return {
          success: true,
          valid: false,
          cep: cleanCep,
          formattedCep: this.formatCep(cleanCep),
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
          formattedCep: this.formatCep(cleanCep),
          message: 'CEP não encontrado'
        };
      }

      return {
        success: true,
        valid: true,
        cep: cleanCep,
        formattedCep: this.formatCep(cleanCep),
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
        formattedCep: this.formatCep(cep),
        message: 'Erro ao consultar CEP'
      };
    }
  }

  private static formatCep(cep: string): string {
    const cleanCep = cep.replace(/\D/g, '');
    return cleanCep.replace(/(\d{5})(\d{3})/, '$1-$2');
  }
}

// Email Validation (converted from Python)
export class EmailValidator {
  private static readonly DISPOSABLE_DOMAINS = new Set([
    'mailinator.com', 'tempmail.com', '10minutemail.com', 'guerrillamail.com',
    'sharklasers.com', 'throwawaymail.com', 'yopmail.com', 'dispostable.com'
  ]);

  private static readonly ROLE_PREFIXES = new Set([
    'admin', 'support', 'info', 'contact', 'sales', 'billing', 'help',
    'webmaster', 'marketing', 'team', 'office', 'noreply'
  ]);

  private static readonly POPULAR_DOMAINS = [
    'hotmail.com', 'gmail.com', 'icloud.com', 'outlook.com', 'yahoo.com', 'ymail.com',
    'hotmail.com.br', 'gmail.com.br', 'yahoo.com.br', 'outlook.com.br'
  ];

  static async validateEmail(email: string): Promise<EmailValidationResponse> {
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
      if (!this.POPULAR_DOMAINS.includes(domainLower)) {
        didYouMean = this.findSimilarDomain(domainLower);
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
      const isDisposable = this.DISPOSABLE_DOMAINS.has(domainLower);
      
      // Check if role-based
      const isRoleBased = this.ROLE_PREFIXES.has(user.toLowerCase());

      // DNS and MX validation
      let domainExists = false;
      let mxExists = false;
      let smtpConnectable = false;

      try {
        await this.resolveDomain(domain);
        domainExists = true;
        
        const mxRecords = await this.resolveMX(domain);
        mxExists = mxRecords.length > 0;
        
        if (mxExists) {
          smtpConnectable = await this.testSMTPConnection(mxRecords[0].exchange);
        }
      } catch (error) {
        // DNS resolution failed
      }

      if (!domainExists) {
        return {
          success: true,
          valid: false,
          email,
          result: 'invalid',
          reason: 'invalid_domain',
          message: 'Domínio não existe',
          checks: {
            syntax: true,
            domain: false,
            mx: false,
            smtp: false,
            disposable: isDisposable,
            roleBase: isRoleBased,
            catchAll: false,
          }
        };
      }

      if (!mxExists) {
        return {
          success: true,
          valid: false,
          email,
          result: 'invalid',
          reason: 'no_mx_records',
          message: 'Nenhum registro MX encontrado',
          checks: {
            syntax: true,
            domain: true,
            mx: false,
            smtp: false,
            disposable: isDisposable,
            roleBase: isRoleBased,
            catchAll: false,
          }
        };
      }

      return {
        success: true,
        valid: smtpConnectable,
        email,
        result: smtpConnectable ? 'valid' : 'invalid',
        reason: smtpConnectable ? 'smtp_connect_success' : 'smtp_connect_failed',
        message: smtpConnectable ? 'Email válido' : 'Falha ao conectar ao servidor SMTP',
        checks: {
          syntax: true,
          domain: domainExists,
          mx: mxExists,
          smtp: smtpConnectable,
          disposable: isDisposable,
          roleBase: isRoleBased,
          catchAll: false, // Simplified for now
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

  private static findSimilarDomain(domain: string): string | undefined {
    for (const popularDomain of this.POPULAR_DOMAINS) {
      if (this.calculateSimilarity(domain, popularDomain) > 0.85) {
        return popularDomain;
      }
    }
    return undefined;
  }

  private static calculateSimilarity(str1: string, str2: string): number {
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

  private static resolveDomain(domain: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
      dns.resolve4(domain, (err, addresses) => {
        if (err) reject(err);
        else resolve(addresses);
      });
    });
  }

  private static resolveMX(domain: string): Promise<dns.MxRecord[]> {
    return new Promise((resolve, reject) => {
      dns.resolveMx(domain, (err, records) => {
        if (err) reject(err);
        else resolve(records);
      });
    });
  }

  private static testSMTPConnection(mxRecord: string): Promise<boolean> {
    return new Promise((resolve) => {
      const socket = new net.Socket();
      const timeout = setTimeout(() => {
        socket.destroy();
        resolve(false);
      }, 5000);

      socket.connect(25, mxRecord, () => {
        clearTimeout(timeout);
        socket.destroy();
        resolve(true);
      });

      socket.on('error', () => {
        clearTimeout(timeout);
        resolve(false);
      });
    });
  }
}
