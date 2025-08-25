import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { 
  CpfCnpjValidationRequest, CpfCnpjValidationResponse,
  PhoneValidationRequest, PhoneValidationResponse,
  CepValidationRequest, CepValidationResponse,
  EmailValidationRequest, EmailValidationResponse
} from "@shared/schema";

interface UseValidationOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

export function useValidation(options: UseValidationOptions = {}) {
  const cpfCnpjMutation = useMutation({
    mutationFn: async (data: CpfCnpjValidationRequest): Promise<CpfCnpjValidationResponse> => {
      const response = await apiRequest("POST", "/api/validate/cpf-cnpj", data);
      return response.json();
    },
    onSuccess: options.onSuccess,
    onError: options.onError,
  });

  const phoneMutation = useMutation({
    mutationFn: async (data: PhoneValidationRequest): Promise<PhoneValidationResponse> => {
      const response = await apiRequest("POST", "/api/validate/phone", data);
      return response.json();
    },
    onSuccess: options.onSuccess,
    onError: options.onError,
  });

  const cepMutation = useMutation({
    mutationFn: async (data: CepValidationRequest): Promise<CepValidationResponse> => {
      const response = await apiRequest("POST", "/api/validate/cep", data);
      return response.json();
    },
    onSuccess: options.onSuccess,
    onError: options.onError,
  });

  const emailMutation = useMutation({
    mutationFn: async (data: EmailValidationRequest): Promise<EmailValidationResponse> => {
      const response = await apiRequest("POST", "/api/validate/email", data);
      return response.json();
    },
    onSuccess: options.onSuccess,
    onError: options.onError,
  });

  return {
    validateCpfCnpj: cpfCnpjMutation.mutate,
    validatePhone: phoneMutation.mutate,
    validateCep: cepMutation.mutate,
    validateEmail: emailMutation.mutate,
    isLoading: cpfCnpjMutation.isPending || phoneMutation.isPending || cepMutation.isPending || emailMutation.isPending,
  };
}
