import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useValidation } from "@/hooks/use-validation";
import type { EmailValidationResponse } from "@shared/schema";

interface EmailValidatorProps {
  onBack: () => void;
}

export default function EmailValidator({ onBack }: EmailValidatorProps) {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<EmailValidationResponse | null>(null);
  
  const { validateEmail, isLoading } = useValidation({
    onSuccess: (data: EmailValidationResponse) => {
      setResult(data);
    },
  });

  const handleValidate = () => {
    if (email.trim()) {
      validateEmail({ email: email.trim() });
    }
  };

  const renderCheckBadge = (check: boolean, label: string) => {
    return (
      <Badge 
        variant={check ? "default" : "destructive"}
        className={`text-xs ${check ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
      >
        {check ? "✓" : "✗"} {label}
      </Badge>
    );
  };

  return (
    <section className="tool-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-envelope text-orange-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Validador de Email</h3>
            <p className="text-slate-600">Validação completa com DNS, MX e detecção de spam</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <Label htmlFor="email-input" className="block text-sm font-medium text-slate-700 mb-2">
                Endereço de Email
              </Label>
              <Input
                id="email-input"
                type="email"
                placeholder="exemplo@dominio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                data-testid="input-email"
              />
            </div>
            
            <Button
              onClick={handleValidate}
              disabled={isLoading || !email.trim()}
              className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="button-validate-email"
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Validando...
                </>
              ) : (
                "Validar Email"
              )}
            </Button>
          </div>

          {/* Result Area */}
          {result && (
            <div className="mt-8" data-testid="result-email">
              <CardContent className={`result-card p-6 rounded-lg ${result.valid ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`result-icon w-8 h-8 rounded-full flex items-center justify-center ${result.valid ? 'bg-green-500' : 'bg-red-500'}`}>
                      <i className={`fas ${result.valid ? 'fa-check' : 'fa-times'} text-white text-sm`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900" data-testid="text-email-result-title">
                        {result.valid ? 'Email Válido' : 'Email Inválido'}
                      </h4>
                      <p className="text-sm text-slate-600">Verificação completa realizada</p>
                    </div>
                  </div>
                </div>
                <div className="result-details space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Email:</span>
                    <span className="font-medium text-slate-900" data-testid="text-email-result-address">{result.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Domínio:</span>
                    <span className="font-medium text-slate-900" data-testid="text-email-result-domain">{result.email.split('@')[1]}</span>
                  </div>
                  
                  {/* Validation Checks */}
                  <div className="mt-4">
                    <h5 className="text-sm font-medium text-slate-700 mb-2">Verificações:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {renderCheckBadge(result.checks.syntax, "Sintaxe")}
                      {renderCheckBadge(result.checks.domain, "Domínio")}
                      {renderCheckBadge(result.checks.mx, "MX Records")}
                      {renderCheckBadge(result.checks.smtp, "SMTP")}
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <Badge 
                        variant={result.checks.disposable ? "destructive" : "default"}
                        className={`text-xs ${result.checks.disposable ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}
                      >
                        {result.checks.disposable ? "✗" : "✓"} Descartável
                      </Badge>
                      <Badge 
                        variant={result.checks.roleBase ? "destructive" : "default"}
                        className={`text-xs ${result.checks.roleBase ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}
                      >
                        {result.checks.roleBase ? "!" : "✓"} Função
                      </Badge>
                    </div>
                  </div>

                  {result.didYouMean && (
                    <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded">
                      <p className="text-sm text-yellow-800">
                        <i className="fas fa-exclamation-triangle mr-1"></i>
                        Você quis dizer: <strong>{result.didYouMean}</strong>?
                      </p>
                    </div>
                  )}
                  
                  <div className="mt-3">
                    <p className="text-sm text-slate-600" data-testid="text-email-result-message">{result.message}</p>
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
