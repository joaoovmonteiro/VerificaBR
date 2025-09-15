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
      
      {/* Additional Educational Content */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            <i className="fas fa-graduation-cap text-orange-600 mr-2"></i>
            Tudo sobre CEP no Brasil
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-slate-900 mb-3">
                  <i className="fas fa-history text-blue-600 mr-2"></i>
                  História do CEP
                </h4>
                <p className="text-slate-600 text-sm mb-3">
                  O Código de Endereçamento Postal foi criado em 1971 pelos Correios para 
                  agilizar a distribuição de correspondências no Brasil.
                </p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 1971: Criação com 5 dígitos</li>
                  <li>• 1992: Expansão para 8 dígitos</li>
                  <li>• 2000: Digitalização completa</li>
                  <li>• Hoje: Mais de 1 milhão de CEPs ativos</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-slate-900 mb-3">
                  <i className="fas fa-chart-bar text-green-600 mr-2"></i>
                  Estatísticas do CEP
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600 text-sm">CEPs ativos no Brasil:</span>
                    <span className="font-semibold text-slate-900">1.000.000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 text-sm">Consultas diárias:</span>
                    <span className="font-semibold text-slate-900">50 milhões</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 text-sm">Cobertura nacional:</span>
                    <span className="font-semibold text-slate-900">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 text-sm">Precisão dos dados:</span>
                    <span className="font-semibold text-slate-900">99.8%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-slate-900 mb-3">
                  <i className="fas fa-cogs text-purple-600 mr-2"></i>
                  Aplicações Práticas
                </h4>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• <strong>E-commerce:</strong> Cálculo de frete automático</li>
                  <li>• <strong>Entregas:</strong> Otimização de rotas</li>
                  <li>• <strong>Marketing:</strong> Segmentação geográfica</li>
                  <li>• <strong>Logística:</strong> Centros de distribuição</li>
                  <li>• <strong>Imóveis:</strong> Localização de propriedades</li>
                  <li>• <strong>Seguros:</strong> Análise de riscos regionais</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-slate-900 mb-3">
                  <i className="fas fa-lightbulb text-yellow-600 mr-2"></i>
                  Dicas Avançadas
                </h4>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• CEPs terminados em 000 são de localidade geral</li>
                  <li>• Use APIs múltiplas para redundância</li>
                  <li>• Cache resultados para melhor performance</li>
                  <li>• Valide formato antes de consultar</li>
                  <li>• Implemente busca por endereço reverso</li>
                  <li>• Monitore atualizações da base oficial</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AdSense Banner - Footer */}
      <AdSenseBanner 
        type="horizontal" 
        slot="cep-footer-banner"
      />
      
      <Footer />
    </div>
  );
}