import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PhoneValidator from "@/components/validation/phone-validator";
import AdSenseBanner from "@/components/ui/adsense-banner";
import { Link } from "wouter";

export default function TelefonePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      
      <PhoneValidator onBack={() => {}} />
      
      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Validador de Telefone Brasileiro e Internacional
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Valide números de telefone brasileiros e internacionais. Identifique operadora, DDD, 
              tipo de linha e formatação correta.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                <i className="fas fa-mobile-alt text-green-600 mr-2"></i>
                Validação de Celular
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Formato (11) 99999-9999</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Verificação do 9º dígito obrigatório</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Identificação da operadora</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Validação de DDD brasileiro</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                <i className="fas fa-phone text-green-600 mr-2"></i>
                Validação de Fixo e Especiais
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Telefones fixos (11) 9999-9999</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Números 0800 gratuitos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Números 4004 de atendimento</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Validação internacional básica</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">
                <i className="fas fa-signal text-green-600 mr-2"></i>
                Operadoras Suportadas
              </h4>
              <p className="text-sm text-slate-600">
                Vivo, TIM, Claro, Oi e outras operadoras brasileiras são automaticamente identificadas.
              </p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">
                <i className="fas fa-map-marker-alt text-blue-600 mr-2"></i>
                Todos os DDDs
              </h4>
              <p className="text-sm text-slate-600">
                Validação completa de todos os DDDs brasileiros com identificação do estado.
              </p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">
                <i className="fas fa-globe text-purple-600 mr-2"></i>
                Internacional
              </h4>
              <p className="text-sm text-slate-600">
                Suporte básico para validação de números telefônicos internacionais.
              </p>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-12">
            <h4 className="font-semibold text-slate-900 mb-2">
              <i className="fas fa-info-circle text-green-600 mr-2"></i>
              Formatação Automática
            </h4>
            <p className="text-slate-600">
              Nossa ferramenta formata automaticamente o número enquanto você digita, facilitando a visualização 
              e garantindo o padrão brasileiro correto. Perfeito para validação em formulários e sistemas.
            </p>
          </div>
          
          {/* Detailed Phone Validation Guide */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              <i className="fas fa-book text-green-600 mr-2"></i>
              Guia Completo de Telefones Brasileiros
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">
                  <i className="fas fa-mobile-alt text-green-600 mr-2"></i>
                  Telefones Celulares
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Formato Atual (Pós 2016):</h5>
                    <p className="text-slate-600 text-sm mb-2">(XX) 9XXXX-XXXX</p>
                    <p className="text-slate-600 text-sm">11 dígitos com 9º dígito obrigatório</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Regras de Validação:</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• DDD válido (11-99)</li>
                      <li>• Terceiro dígito sempre 9</li>
                      <li>• 8 dígitos subsequentes</li>
                      <li>• Não pode ser sequência repetida</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Operadoras Principais:</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Vivo: 94xxx, 95xxx, 96xxx</li>
                      <li>• TIM: 92xxx, 93xxx, 94xxx</li>
                      <li>• Claro: 91xxx, 96xxx, 97xxx</li>
                      <li>• Oi: 98xxx, 99xxx</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">
                  <i className="fas fa-phone text-blue-600 mr-2"></i>
                  Telefones Fixos
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Formato Padrão:</h5>
                    <p className="text-slate-600 text-sm mb-2">(XX) XXXX-XXXX</p>
                    <p className="text-slate-600 text-sm">10 dígitos sem 9º dígito</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Características:</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• DDD válido brasileiro</li>
                      <li>• Terceiro dígito 2, 3, 4 ou 5</li>
                      <li>• 7 dígitos subsequentes</li>
                      <li>• Vinculado à localização física</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Prefixos Comuns:</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• 2xxx: Telefones residenciais</li>
                      <li>• 3xxx: Telefones comerciais</li>
                      <li>• 4xxx: Telefones empresariais</li>
                      <li>• 5xxx: Telefones especiais</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">
                  <i className="fas fa-headset text-purple-600 mr-2"></i>
                  Números Especiais
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">0800 (Gratuito):</h5>
                    <p className="text-slate-600 text-sm mb-2">0800-XXX-XXXX</p>
                    <p className="text-slate-600 text-sm">10 dígitos, ligação gratuita</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">4004 (Não Gratuito):</h5>
                    <p className="text-slate-600 text-sm mb-2">4004-XXXX</p>
                    <p className="text-slate-600 text-sm">8 dígitos, tarifa local</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Outros Serviços:</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• 190: Polícia Militar</li>
                      <li>• 192: SAMU</li>
                      <li>• 193: Bombeiros</li>
                      <li>• 100: Direitos Humanos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* DDD Coverage Map */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              <i className="fas fa-map-marked-alt text-blue-600 mr-2"></i>
              Mapa de DDDs por Região
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-4 text-center">
                  <i className="fas fa-map-marker-alt text-blue-600 mr-2"></i>
                  Sudeste
                </h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">São Paulo</h5>
                    <p className="text-xs text-slate-600">11, 12, 13, 14, 15, 16, 17, 18, 19</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Rio de Janeiro</h5>
                    <p className="text-xs text-slate-600">21, 22, 24</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Minas Gerais</h5>
                    <p className="text-xs text-slate-600">31, 32, 33, 34, 35, 37, 38</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Espírito Santo</h5>
                    <p className="text-xs text-slate-600">27, 28</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-4 text-center">
                  <i className="fas fa-map-marker-alt text-green-600 mr-2"></i>
                  Sul
                </h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Rio Grande do Sul</h5>
                    <p className="text-xs text-slate-600">51, 53, 54, 55</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Santa Catarina</h5>
                    <p className="text-xs text-slate-600">47, 48, 49</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Paraná</h5>
                    <p className="text-xs text-slate-600">41, 42, 43, 44, 45, 46</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-4 text-center">
                  <i className="fas fa-map-marker-alt text-orange-600 mr-2"></i>
                  Nordeste
                </h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Bahia</h5>
                    <p className="text-xs text-slate-600">71, 73, 74, 75, 77</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Pernambuco</h5>
                    <p className="text-xs text-slate-600">81, 87</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Ceará</h5>
                    <p className="text-xs text-slate-600">85, 88</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Outros Estados</h5>
                    <p className="text-xs text-slate-600">79, 82, 83, 84, 86, 89, 98, 99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AdSense Banner - Middle */}
      <AdSenseBanner 
        type="square" 
        slot="telefone-middle-square"
      />
      
      {/* Best Practices Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            <i className="fas fa-star text-yellow-500 mr-2"></i>
            Boas Práticas para Validação de Telefones
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-slate-900 mb-3">
                  <i className="fas fa-shield-check text-green-600 mr-2"></i>
                  Validação em Formulários
                </h4>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• Formate automaticamente durante a digitação</li>
                  <li>• Valide em tempo real sem bloquear o usuário</li>
                  <li>• Aceite diferentes formatos de entrada</li>
                  <li>• Forneça feedback claro sobre erros</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-slate-900 mb-3">
                  <i className="fas fa-database text-blue-600 mr-2"></i>
                  Armazenamento e Limpeza
                </h4>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• Armazene apenas dígitos (sem formatação)</li>
                  <li>• Mantenha o formato original para display</li>
                  <li>• Implemente rotinas de limpeza de dados</li>
                  <li>• Valide periodicamente números antigos</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-slate-900 mb-3">
                  <i className="fas fa-users text-purple-600 mr-2"></i>
                  Experiência do Usuário
                </h4>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• Detecte automaticamente tipo (celular/fixo)</li>
                  <li>• Sugira correções para números inválidos</li>
                  <li>• Permita edição fácil de números salvos</li>
                  <li>• Ofereça múltiplas opções de contato</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-slate-900 mb-3">
                  <i className="fas fa-gavel text-red-600 mr-2"></i>
                  Compliance e Segurança
                </h4>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• Respeite as regras de LGPD</li>
                  <li>• Implemente opt-in/opt-out para SMS</li>
                  <li>• Criptografe dados sensíveis</li>
                  <li>• Documente o uso dos dados coletados</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AdSense Banner - Footer */}
      <AdSenseBanner 
        type="horizontal" 
        slot="telefone-footer-banner"
      />
      
      <Footer />
    </div>
  );
}