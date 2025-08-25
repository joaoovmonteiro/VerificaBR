import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PhoneValidator from "@/components/validation/phone-validator";
import AdPlaceholder from "@/components/ui/ad-placeholder";
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
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-slate-900 mb-2">
              <i className="fas fa-info-circle text-green-600 mr-2"></i>
              Formatação Automática
            </h4>
            <p className="text-slate-600">
              Nossa ferramenta formata automaticamente o número enquanto você digita, facilitando a visualização 
              e garantindo o padrão brasileiro correto. Perfeito para validação em formulários e sistemas.
            </p>
          </div>
        </div>
      </section>
      
      {/* AdSense Placement - Middle */}
      <AdPlaceholder 
        type="square" 
        description="[ Espaço para Anúncio AdSense - Square Banner ]"
        dimensions="300x250 ou 336x280"
      />
      
      {/* AdSense Placement - Before Footer */}
      <AdPlaceholder 
        type="horizontal" 
        description="[ Espaço para Anúncio AdSense - Horizontal Banner ]"
        dimensions="728x90 ou 320x50 (responsivo)"
      />
      
      <Footer />
    </div>
  );
}