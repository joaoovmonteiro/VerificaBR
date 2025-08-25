import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useValidation } from "@/hooks/use-validation";
import { formatPhone } from "@/lib/validation-utils";
import type { PhoneValidationResponse } from "@shared/schema";

interface PhoneValidatorProps {
  onBack: () => void;
}

export default function PhoneValidator({ onBack }: PhoneValidatorProps) {
  const [phone, setPhone] = useState("");
  const [phoneType, setPhoneType] = useState<"br" | "international">("br");
  const [result, setResult] = useState<PhoneValidationResponse | null>(null);
  
  const { validatePhone, isLoading } = useValidation({
    onSuccess: (data: PhoneValidationResponse) => {
      setResult(data);
    },
  });

  const handleValidate = () => {
    if (phone.trim()) {
      validatePhone({ phone: phone.trim(), type: phoneType });
    }
  };

  const handleInputChange = (value: string) => {
    if (phoneType === "br") {
      const formatted = formatPhone(value);
      setPhone(formatted);
    } else {
      setPhone(value);
    }
  };

  return (
    <section className="tool-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-phone text-green-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Validador de Telefone</h3>
            <p className="text-slate-600">Valide números brasileiros e internacionais</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="mb-4">
              <Label htmlFor="phone-type" className="block text-sm font-medium text-slate-700 mb-2">
                Tipo de Número
              </Label>
              <Select value={phoneType} onValueChange={(value: "br" | "international") => setPhoneType(value)}>
                <SelectTrigger className="w-full" data-testid="select-phone-type">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="br">Brasileiro</SelectItem>
                  <SelectItem value="international">Internacional</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="mb-6">
              <Label htmlFor="phone-input" className="block text-sm font-medium text-slate-700 mb-2">
                Número do Telefone
              </Label>
              <Input
                id="phone-input"
                type="text"
                placeholder={phoneType === "br" ? "(11) 99999-9999" : "+1 555-123-4567"}
                value={phone}
                onChange={(e) => handleInputChange(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                data-testid="input-phone"
              />
            </div>
            
            <Button
              onClick={handleValidate}
              disabled={isLoading || !phone.trim()}
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="button-validate-phone"
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Validando...
                </>
              ) : (
                "Validar Telefone"
              )}
            </Button>
          </div>

          {/* Result Area */}
          {result && (
            <div className="mt-8" data-testid="result-phone">
              <CardContent className={`result-card p-6 rounded-lg ${result.valid ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`result-icon w-8 h-8 rounded-full flex items-center justify-center ${result.valid ? 'bg-green-500' : 'bg-red-500'}`}>
                      <i className={`fas ${result.valid ? 'fa-check' : 'fa-times'} text-white text-sm`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900" data-testid="text-phone-result-title">
                        {result.valid ? 'Número Válido' : 'Número Inválido'}
                      </h4>
                      <p className="text-sm text-slate-600" data-testid="text-phone-result-carrier">
                        {result.carrier || 'Operadora não identificada'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="result-details space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Número:</span>
                    <span className="font-medium text-slate-900" data-testid="text-phone-result-formatted">{result.formattedPhone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Tipo:</span>
                    <span className="font-medium text-slate-900" data-testid="text-phone-result-type">{result.type}</span>
                  </div>
                  {result.areaName && (
                    <div className="flex justify-between">
                      <span className="text-slate-600">DDD:</span>
                      <span className="font-medium text-slate-900" data-testid="text-phone-result-area">{result.areaName}</span>
                    </div>
                  )}
                  {result.carrier && (
                    <div className="flex justify-between">
                      <span className="text-slate-600">Operadora:</span>
                      <span className="font-medium text-slate-900" data-testid="text-phone-result-operator">{result.carrier}</span>
                    </div>
                  )}
                  <div className="mt-3">
                    <p className="text-sm text-slate-600" data-testid="text-phone-result-message">{result.message}</p>
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
