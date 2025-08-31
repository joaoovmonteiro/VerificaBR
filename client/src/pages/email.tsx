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
      
      {/* Advanced Email Validation Guide */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            <i className="fas fa-book-open text-orange-600 mr-2"></i>
            Guia Completo de Validação de Email
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900 mb-4">
                <i className="fas fa-code text-blue-600 mr-2"></i>
                Validação Sintática
              </h4>
              <p className="text-slate-600 text-sm mb-4">
                Verificação do formato básico segundo RFC 5322
              </p>
              <ul className="text-slate-600 text-sm space-y-2">
                <li>• Presença do símbolo @</li>
                <li>• Formato da parte local</li>
                <li>• Formato do domínio</li>
                <li>• Caracteres especiais permitidos</li>
                <li>• Comprimento máximo (320 chars)</li>
                <li>• Estrutura de subdominios</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900 mb-4">
                <i className="fas fa-server text-green-600 mr-2"></i>
                Validação de Domínio
              </h4>
              <p className="text-slate-600 text-sm mb-4">
                Verificação da existência e configuração do domínio
              </p>
              <ul className="text-slate-600 text-sm space-y-2">
                <li>• Resolução DNS do domínio</li>
                <li>• Verificação de registros MX</li>
                <li>• Teste de conectividade SMTP</li>
                <li>• Detecção de catch-all</li>
                <li>• Verificação de blacklists</li>
                <li>• Análise de reputação</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900 mb-4">
                <i className="fas fa-shield-alt text-red-600 mr-2"></i>
                Detecção de Problemas
              </h4>
              <p className="text-slate-600 text-sm mb-4">
                Identificação de emails problemáticos
              </p>
              <ul className="text-slate-600 text-sm space-y-2">
                <li>• Emails temporários/descartáveis</li>
                <li>• Emails de função (role-based)</li>
                <li>• Typos em domínios populares</li>
                <li>• Domínios suspeitos</li>
                <li>• Padrões de spam</li>
                <li>• Emails honeypot</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12">
            <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">
              Níveis de Validação
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-green-100 border border-green-300 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-check text-white"></i>
                </div>
                <h5 className="font-semibold text-slate-900 mb-2">Básica</h5>
                <p className="text-xs text-slate-600">Sintaxe RFC5322</p>
              </div>
              
              <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-search text-white"></i>
                </div>
                <h5 className="font-semibold text-slate-900 mb-2">DNS</h5>
                <p className="text-xs text-slate-600">Verificação de domínio</p>
              </div>
              
              <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <h5 className="font-semibold text-slate-900 mb-2">MX</h5>
                <p className="text-xs text-slate-600">Registros de email</p>
              </div>
              
              <div className="bg-purple-100 border border-purple-300 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-network-wired text-white"></i>
                </div>
                <h5 className="font-semibold text-slate-900 mb-2">SMTP</h5>
                <p className="text-xs text-slate-600">Conectividade real</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Email Best Practices */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            <i className="fas fa-award text-orange-600 mr-2"></i>
            Melhores Práticas para Email Marketing
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-semibold text-slate-900 mb-2">Lista Limpa</h4>
                <p className="text-slate-600 text-sm">
                  Mantenha sua lista de emails sempre limpa removendo endereços inválidos, 
                  bounces e emails que não engajam há muito tempo.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="font-semibold text-slate-900 mb-2">Double Opt-in</h4>
                <p className="text-slate-600 text-sm">
                  Sempre use confirmação dupla para garantir que o email é válido e 
                  o usuário realmente quer receber suas mensagens.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="font-semibold text-slate-900 mb-2">Monitoramento</h4>
                <p className="text-slate-600 text-sm">
                  Monitore métricas como bounce rate, open rate e unsubscribe rate 
                  para manter a saúde da sua lista.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="font-semibold text-slate-900 mb-2">Segmentação</h4>
                <p className="text-slate-600 text-sm">
                  Segmente sua lista por comportamento, localização e preferências 
                  para enviar conteúdo mais relevante.
                </p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-6">
                <h4 className="font-semibold text-slate-900 mb-2">Reputação</h4>
                <p className="text-slate-600 text-sm">
                  Mantenha boa reputação de IP e domínio evitando práticas que 
                  podem te marcar como spam.
                </p>
              </div>
              
              <div className="border-l-4 border-indigo-500 pl-6">
                <h4 className="font-semibold text-slate-900 mb-2">Compliance</h4>
                <p className="text-slate-600 text-sm">
                  Siga as leis de proteção de dados (LGPD, GDPR) e sempre 
                  ofereça opção de descadastro fácil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AdSense Banner - Footer */}
      <AdSenseBanner 
        type="horizontal" 
        slot="email-footer-banner"
      />
      
      <Footer />
    </div>
  );
}