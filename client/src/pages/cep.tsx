import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CepValidator from "@/components/validation/cep-validator";
import AdSenseBanner from "@/components/ui/adsense-banner";
import { Link } from "wouter";

export default function CepPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      
      <CepValidator onBack={() => {}} />
      
      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Consulta de CEP Online - Endereço Completo Gratuito
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Encontre endereços completos através do CEP. Consulta rápida via API oficial dos Correios 
              e ViaCEP com dados sempre atualizados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                <i className="fas fa-search text-purple-600 mr-2"></i>
                O que você encontra
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Logradouro (rua, avenida, praça)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Bairro e distrito</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Cidade e município</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Estado (UF) e região</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Código IBGE quando disponível</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                <i className="fas fa-database text-purple-600 mr-2"></i>
                Fontes de Dados
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>API oficial ViaCEP</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Base de dados dos Correios</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Informações sempre atualizadas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Cobertura nacional completa</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Resposta em formato JSON</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">
                <i className="fas fa-tachometer-alt text-purple-600 mr-2"></i>
                Consulta Rápida
              </h4>
              <p className="text-sm text-slate-600">
                Resultados em menos de 1 segundo. Digite o CEP e receba todas as informações instantaneamente.
              </p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">
                <i className="fas fa-shield-alt text-blue-600 mr-2"></i>
                100% Seguro
              </h4>
              <p className="text-sm text-slate-600">
                Não armazenamos seus dados. Todas as consultas são realizadas em tempo real.
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">
                <i className="fas fa-mobile-alt text-green-600 mr-2"></i>
                Mobile Ready
              </h4>
              <p className="text-sm text-slate-600">
                Interface otimizada para celulares e tablets. Consulte CEPs em qualquer lugar.
              </p>
            </div>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-slate-900 mb-2">
              <i className="fas fa-info-circle text-purple-600 mr-2"></i>
              Como usar o Consultor de CEP
            </h4>
            <p className="text-slate-600 mb-3">
              1. Digite o CEP no formato 00000-000 (a formatação é automática)<br/>
              2. Clique em "Consultar CEP" ou pressione Enter<br/>
              3. Receba instantaneamente todas as informações do endereço
            </p>
            <p className="text-slate-600">
              <strong>Dica:</strong> Você pode digitar apenas os números. Nossa ferramenta formata automaticamente 
              no padrão brasileiro 00000-000.
            </p>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibold text-slate-900 mb-2">
              <i className="fas fa-exclamation-triangle text-yellow-600 mr-2"></i>
              CEP não encontrado?
            </h4>
            <p className="text-slate-600">
              Se o CEP não for encontrado, verifique se foi digitado corretamente. CEPs muito novos podem 
              demorar alguns dias para aparecer na base dos Correios. Em caso de dúvida, consulte diretamente 
              o site dos Correios.
            </p>
          </div>
        </div>
      </section>
      
      {/* AdSense Banner - Middle */}
      <AdSenseBanner 
        type="square" 
        slot="cep-middle-square"
      />
      
      {/* AdSense Banner - Footer */}
      <AdSenseBanner 
        type="horizontal" 
        slot="cep-footer-banner"
      />
      
      <Footer />
    </div>
  );
}