export function formatCpfCnpj(value: string): string {
  const cleanValue = value.replace(/\D/g, '');
  
  if (cleanValue.length <= 11) {
    // CPF format
    return cleanValue
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  } else {
    // CNPJ format
    return cleanValue
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d{1,2})$/, '$1-$2');
  }
}

export function formatPhone(value: string): string {
  const cleanValue = value.replace(/\D/g, '');
  
  if (cleanValue.length <= 11) {
    return cleanValue
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4,5})(\d{4})$/, '$1-$2');
  }
  return cleanValue;
}

export function formatCep(value: string): string {
  const cleanValue = value.replace(/\D/g, '');
  
  if (cleanValue.length <= 8) {
    return cleanValue.replace(/(\d{5})(\d)/, '$1-$2');
  }
  return cleanValue;
}
