import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import EmailValidator from "@/components/validation/email-validator";
import AdSenseBanner from "@/components/ui/adsense-banner";
import { Link } from "wouter";

export default function EmailPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      
      <EmailValidator onBack={() => {}} />
      
      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Validador de Email Profissional - Verificação Completa
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Validação completa de endereços de email com verificação de DNS, MX Records, SMTP, 
              detecção de emails descartáveis e verificação de domínios suspeitos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                <i className="fas fa-shield-check text-orange-600 mr-2"></i>
                Verificações Realizadas
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Validação de sintaxe RFC5322</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Verificação de existência do domínio</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Consulta de registros MX</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Teste de conectividade SMTP</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Detecção de emails descartáveis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Identificação de emails de função</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                <i className="fas fa-exclamation-triangle text-orange-600 mr-2"></i>
                Problemas Detectados
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start space-x-2">
                  <i className="fas fa-times text-red-500 mt-1"></i>
                  <span>Emails temporários e descartáveis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-times text-red-500 mt-1"></i>
                  <span>Domínios com erros de digitação</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-times text-red-500 mt-1"></i>
                  <span>Emails de função (admin, support)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-times text-red-500 mt-1"></i>
                  <span>Domínios inexistentes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-times text-red-500 mt-1"></i>
                  <span>Servidores de email inativos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-times text-red-500 mt-1"></i>
                  <span>Sintaxe inválida ou malformada</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">
                <i className="fas fa-robot text-orange-600 mr-2"></i>
                Anti-Spam
              </h4>
              <p className="text-sm text-slate-600">
                Detecta emails temporários de serviços como 10minutemail, tempmail e guerrillamail.
              </p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">
                <i className="fas fa-server text-blue-600 mr-2"></i>
                Verificação Real
              </h4>
              <p className="text-sm text-slate-600">
                Conecta diretamente aos servidores de email para verificar se realmente existem.
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">
                <i className="fas fa-spell-check text-green-600 mr-2"></i>
                Correção Automática
              </h4>
              <p className="text-sm text-slate-600">
                Sugere correções para domínios populares quando detecta possíveis erros de digitação.
              </p>
            </div>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-slate-900 mb-2">
              <i className="fas fa-lightbulb text-orange-600 mr-2"></i>
              Por que validar emails?
            </h4>
            <p className="text-slate-600 mb-3">
              A validação de emails é crucial para manter a qualidade da sua base de dados e melhorar 
              a deliverability das suas campanhas. Emails inválidos aumentam sua taxa de bounce e 
              podem prejudicar sua reputação como remetente.
            </p>
            <ul className="text-sm text-slate-600 space-y-1">
              <li><strong>• Reduz bounce rate:</strong> Evita emails que retornam</li>
              <li><strong>• Melhora deliverability:</strong> Aumenta a taxa de entrega</li>
              <li><strong>• Protege reputação:</strong> Evita ser marcado como spam</li>
              <li><strong>• Economiza recursos:</strong> Não envia para emails inválidos</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-slate-900 mb-2">
              <i className="fas fa-cogs text-blue-600 mr-2"></i>
              Como funciona nossa validação
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
              <div>
                <p className="font-medium text-slate-900 mb-1">1. Verificação de Sintaxe</p>
                <p>Confere se o email segue o padrão RFC5322 oficial</p>
              </div>
              <div>
                <p className="font-medium text-slate-900 mb-1">2. Verificação DNS</p>
                <p>Confirma se o domínio realmente existe na internet</p>
              </div>
              <div>
                <p className="font-medium text-slate-900 mb-1">3. Consulta MX Records</p>
                <p>Verifica se há servidores de email configurados</p>
              </div>
              <div>
                <p className="font-medium text-slate-900 mb-1">4. Teste SMTP</p>
                <p>Conecta ao servidor para verificar se está ativo</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibold text-slate-900 mb-2">
              <i className="fas fa-info-circle text-yellow-600 mr-2"></i>
              Limitações da validação
            </h4>
            <p className="text-slate-600">
              Nossa validação verifica se o email é tecnicamente válido e se o servidor existe, mas não 
              pode garantir que a caixa postal específica existe ou está ativa. Para isso seria necessário 
              enviar um email de confirmação real. Alguns servidores também podem bloquear verificações 
              automáticas por segurança.
            </p>
          </div>
        </div>
      </section>
      
      {/* AdSense Banner - Middle */}
      <AdSenseBanner 
        type="square" 
        slot="email-middle-square"
      />
      
      {/* AdSense Banner - Footer */}
      <AdSenseBanner 
        type="horizontal" 
        slot="email-footer-banner"
      />
      
      <Footer />
    </div>
  );
}