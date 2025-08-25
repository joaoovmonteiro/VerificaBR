import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useValidation } from "@/hooks/use-validation";
import { formatCpfCnpj } from "@/lib/validation-utils";
import type { CpfCnpjValidationResponse } from "@shared/schema";

interface CpfCnpjValidatorProps {
  onBack: () => void;
}

export default function CpfCnpjValidator({ onBack }: CpfCnpjValidatorProps) {
  const [document, setDocument] = useState("");
  const [result, setResult] = useState<CpfCnpjValidationResponse | null>(null);
  
  const { validateCpfCnpj, isLoading } = useValidation({
    onSuccess: (data: CpfCnpjValidationResponse) => {
      setResult(data);
    },
  });

  const handleValidate = () => {
    if (document.trim()) {
      validateCpfCnpj({ document: document.trim() });
    }
  };

  const handleInputChange = (value: string) => {
    const formatted = formatCpfCnpj(value);
    setDocument(formatted);
  };

  return (
    <section className="tool-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-id-card text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Validador de CPF/CNPJ</h3>
            <p className="text-slate-600">Digite o número para validação com algoritmo oficial</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <Label htmlFor="cpf-cnpj-input" className="block text-sm font-medium text-slate-700 mb-2">
                Número do Documento
              </Label>
              <Input
                id="cpf-cnpj-input"
                type="text"
                placeholder="000.000.000-00 ou 00.000.000/0000-00"
                value={document}
                onChange={(e) => handleInputChange(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                data-testid="input-cpf-cnpj"
              />
            </div>
            
            <Button
              onClick={handleValidate}
              disabled={isLoading || !document.trim()}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="button-validate-cpf-cnpj"
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Validando...
                </>
              ) : (
                "Validar Documento"
              )}
            </Button>
          </div>

          {/* Result Area */}
          {result && (
            <div className="mt-8" data-testid="result-cpf-cnpj">
              <CardContent className={`result-card p-6 rounded-lg ${result.valid ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`result-icon w-8 h-8 rounded-full flex items-center justify-center ${result.valid ? 'bg-green-500' : 'bg-red-500'}`}>
                      <i className={`fas ${result.valid ? 'fa-check' : 'fa-times'} text-white text-sm`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900" data-testid="text-result-title">
                        {result.valid ? 'Documento Válido' : 'Documento Inválido'}
                      </h4>
                      <p className="text-sm text-slate-600" data-testid="text-result-type">{result.type}</p>
                    </div>
                  </div>
                </div>
                <div className="result-details space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Número:</span>
                    <span className="font-medium text-slate-900" data-testid="text-result-number">{result.formattedDocument}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Tipo:</span>
                    <span className="font-medium text-slate-900" data-testid="text-result-doc-type">{result.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Status:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${result.valid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`} data-testid="badge-result-status">
                      {result.valid ? 'Válido' : 'Inválido'}
                    </span>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-slate-600" data-testid="text-result-message">{result.message}</p>
                  </div>
                </div>
              </CardContent>
            </div>
          )}

          <div className="mt-6 text-center">
            <button 
              onClick={onBack}
              className="text-slate-600 hover:text-slate-900 transition-colors"
              data-testid="button-back-to-tools"
            >
              <i className="fas fa-arrow-left mr-2"></i>Voltar às Ferramentas
            </button>
          </div>
        </Card>
      </div>
    </section>
  );
}
