import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useValidation } from "@/hooks/use-validation";
import { formatCep } from "@/lib/validation-utils";
import type { CepValidationResponse } from "@shared/schema";

interface CepValidatorProps {
  onBack: () => void;
}

export default function CepValidator({ onBack }: CepValidatorProps) {
  const [cep, setCep] = useState("");
  const [result, setResult] = useState<CepValidationResponse | null>(null);
  
  const { validateCep, isLoading } = useValidation({
    onSuccess: (data: CepValidationResponse) => {
      setResult(data);
    },
  });

  const handleValidate = () => {
    if (cep.trim()) {
      validateCep({ cep: cep.trim() });
    }
  };

  const handleInputChange = (value: string) => {
    const formatted = formatCep(value);
    setCep(formatted);
  };

  return (
    <section className="tool-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-map-marker-alt text-purple-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Consulta de CEP</h3>
            <p className="text-slate-600">Encontre endereço completo via API dos Correios</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <Label htmlFor="cep-input" className="block text-sm font-medium text-slate-700 mb-2">
                CEP
              </Label>
              <Input
                id="cep-input"
                type="text"
                placeholder="00000-000"
                value={cep}
                onChange={(e) => handleInputChange(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                data-testid="input-cep"
              />
            </div>
            
            <Button
              onClick={handleValidate}
              disabled={isLoading || !cep.trim()}
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="button-validate-cep"
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Consultando...
                </>
              ) : (
                "Consultar CEP"
              )}
            </Button>
          </div>

          {/* Result Area */}
          {result && (
            <div className="mt-8" data-testid="result-cep">
              <CardContent className={`result-card p-6 rounded-lg ${result.valid ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`result-icon w-8 h-8 rounded-full flex items-center justify-center ${result.valid ? 'bg-green-500' : 'bg-red-500'}`}>
                      <i className={`fas ${result.valid ? 'fa-check' : 'fa-times'} text-white text-sm`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900" data-testid="text-cep-result-title">
                        {result.valid ? 'CEP Encontrado' : 'CEP Não Encontrado'}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {result.valid ? 'Endereço localizado' : 'Verifique o número'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="result-details space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600">CEP:</span>
                    <span className="font-medium text-slate-900" data-testid="text-cep-result-number">{result.formattedCep}</span>
                  </div>
                  {result.address && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Logradouro:</span>
                        <span className="font-medium text-slate-900" data-testid="text-cep-result-street">{result.address.street}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Bairro:</span>
                        <span className="font-medium text-slate-900" data-testid="text-cep-result-neighborhood">{result.address.neighborhood}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Cidade:</span>
                        <span className="font-medium text-slate-900" data-testid="text-cep-result-city">{result.address.city}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">UF:</span>
                        <span className="font-medium text-slate-900" data-testid="text-cep-result-state">{result.address.state}</span>
                      </div>
                    </>
                  )}
                  <div className="mt-3">
                    <p className="text-sm text-slate-600" data-testid="text-cep-result-message">{result.message}</p>
                  </div>
                </div>
              </CardContent>
            </div>
          )}

          <div className="mt-6 text-center">
            <a 
              href="/"
              className="text-slate-600 hover:text-slate-900 transition-colors"
              data-testid="button-back-to-tools"
            >
              <i className="fas fa-arrow-left mr-2"></i>Voltar às Ferramentas
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}
