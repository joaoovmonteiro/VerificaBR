import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CpfCnpjValidator from "@/components/validation/cpf-cnpj-validator";
import AdSenseBanner from "@/components/ui/adsense-banner";
import { Link } from "wouter";

export default function CpfCnpjPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      
      <CpfCnpjValidator onBack={() => {}} />
      
      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Validador de CPF e CNPJ Online - Gratuito e Seguro
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Valide CPF e CNPJ com algoritmo oficial brasileiro. Verificação instantânea de dígitos verificadores
              para garantir a autenticidade dos documentos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                <i className="fas fa-id-card text-blue-600 mr-2"></i>
                Como Funciona a Validação de CPF
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Verificação dos 11 dígitos do CPF</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Cálculo dos dígitos verificadores</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Detecção de sequências inválidas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Formatação automática do número</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                <i className="fas fa-building text-blue-600 mr-2"></i>
                Como Funciona a Validação de CNPJ
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Verificação dos 14 dígitos do CNPJ</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Algoritmo oficial da Receita Federal</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Validação dos dois dígitos verificadores</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Formatação padrão 00.000.000/0000-00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
            <h4 className="font-semibold text-slate-900 mb-2">
              <i className="fas fa-info-circle text-blue-600 mr-2"></i>
              Por que validar CPF e CNPJ?
            </h4>
            <p className="text-slate-600">
              A validação de CPF e CNPJ é essencial para verificar a autenticidade dos documentos antes de 
              processar cadastros, realizar transações ou cumprir obrigações fiscais. Nossa ferramenta utiliza 
              o algoritmo oficial brasileiro, garantindo 100% de precisão na verificação dos dígitos verificadores.
            </p>
          </div>
          
          {/* Detailed Algorithm Explanation */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              <i className="fas fa-calculator text-blue-600 mr-2"></i>
              Algoritmo de Validação Detalhado
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">
                  <i className="fas fa-user text-blue-600 mr-2"></i>
                  Validação de CPF (Pessoa Física)
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Estrutura do CPF:</h5>
                    <p className="text-slate-600 text-sm mb-2">XXX.XXX.XXX-XX (11 dígitos)</p>
                    <p className="text-slate-600 text-sm">Os dois últimos dígitos são verificadores calculados pelos primeiros 9.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Primeiro Dígito Verificador:</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Multiplica cada dígito por pesos de 10 a 2</li>
                      <li>• Soma todos os resultados</li>
                      <li>• Calcula o resto da divisão por 11</li>
                      <li>• Se resto menor que 2, dígito = 0; senão dígito = 11 - resto</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Segundo Dígito Verificador:</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Inclui o primeiro dígito verificador</li>
                      <li>• Multiplica por pesos de 11 a 2</li>
                      <li>• Aplica a mesma regra de cálculo</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">
                  <i className="fas fa-building text-green-600 mr-2"></i>
                  Validação de CNPJ (Pessoa Jurídica)
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Estrutura do CNPJ:</h5>
                    <p className="text-slate-600 text-sm mb-2">XX.XXX.XXX/XXXX-XX (14 dígitos)</p>
                    <p className="text-slate-600 text-sm">Os dois últimos dígitos são verificadores calculados pelos primeiros 12.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Primeiro Dígito Verificador:</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Pesos: 5,4,3,2,9,8,7,6,5,4,3,2</li>
                      <li>• Multiplica e soma todos os produtos</li>
                      <li>• Resto da divisão por 11</li>
                      <li>• Se resto menor que 2, dígito = 0; senão dígito = 11 - resto</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Segundo Dígito Verificador:</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Pesos: 6,5,4,3,2,9,8,7,6,5,4,3,2</li>
                      <li>• Inclui o primeiro dígito verificador</li>
                      <li>• Aplica a mesma regra de cálculo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Common Errors Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              <i className="fas fa-exclamation-triangle text-orange-600 mr-2"></i>
              Erros Comuns na Validação
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">
                  <i className="fas fa-times-circle text-red-600 mr-2"></i>
                  Sequências Inválidas
                </h4>
                <p className="text-slate-600 text-sm mb-3">
                  CPFs ou CNPJs com todos os dígitos iguais são sempre inválidos:
                </p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 111.111.111-11</li>
                  <li>• 222.222.222-22</li>
                  <li>• 00.000.000/0000-00</li>
                  <li>• 11.111.111/1111-11</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">
                  <i className="fas fa-keyboard text-yellow-600 mr-2"></i>
                  Erros de Digitação
                </h4>
                <p className="text-slate-600 text-sm mb-3">
                  Problemas mais frequentes:
                </p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Inversão de dígitos</li>
                  <li>• Números ausentes</li>
                  <li>• Dígitos duplicados</li>
                  <li>• Formatação incorreta</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">
                  <i className="fas fa-shield-check text-purple-600 mr-2"></i>
                  Nossa Verificação
                </h4>
                <p className="text-slate-600 text-sm mb-3">
                  O ValidaBR detecta automaticamente:
                </p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Documentos com formato inválido</li>
                  <li>• Sequências numéricas inválidas</li>
                  <li>• Dígitos verificadores incorretos</li>
                  <li>• Formatação automática do resultado</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Real-world Applications */}
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              <i className="fas fa-briefcase text-slate-600 mr-2"></i>
              Aplicações Práticas da Validação
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shopping-cart text-blue-600 text-2xl"></i>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">E-commerce</h4>
                <p className="text-slate-600 text-sm">
                  Validação no checkout para evitar pedidos fraudulentos e melhorar a conversão.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-university text-green-600 text-2xl"></i>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Serviços Financeiros</h4>
                <p className="text-slate-600 text-sm">
                  KYC obrigatório para abertura de contas e aprovação de crédito.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-file-alt text-purple-600 text-2xl"></i>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Documentos Fiscais</h4>
                <p className="text-slate-600 text-sm">
                  Emissão de NFe e integração com sistemas da Receita Federal.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-orange-600 text-2xl"></i>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Recursos Humanos</h4>
                <p className="text-slate-600 text-sm">
                  Validação de dados na contratação e folha de pagamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AdSense Banner - Middle */}
      <AdSenseBanner 
        type="square" 
        slot="cpf-middle-square"
      />
      
      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            <i className="fas fa-lightbulb text-yellow-500 mr-2"></i>
            Dicas Importantes sobre CPF e CNPJ
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">Proteção de Dados Pessoais</h4>
                <p className="text-slate-600 text-sm">
                  Nunca compartilhe seu CPF desnecessariamente. Use apenas em sites confiáveis 
                  e sempre verifique se a conexão é segura (HTTPS).
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">Regulamentação LGPD</h4>
                <p className="text-slate-600 text-sm">
                  Empresas devem ter base legal para processar CPF/CNPJ e implementar 
                  medidas de segurança adequadas para proteger esses dados.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">Penalidades por Uso Indevido</h4>
                <p className="text-slate-600 text-sm">
                  O uso fraudulento de CPF/CNPJ pode resultar em multas de até R$ 50 milhões 
                  e outras sanções previstas na LGPD e Código Penal.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">Validação vs Verificação</h4>
                <p className="text-slate-600 text-sm">
                  Validação verifica se o formato está correto. Verificação confirma 
                  se o documento realmente existe na Receita Federal.
                </p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">Documentos Suspensos</h4>
                <p className="text-slate-600 text-sm">
                  Um CPF pode estar válido matematicamente mas suspenso na Receita. 
                  Para verificar a situação real, consulte o site oficial.
                </p>
              </div>
              
              <div className="border-l-4 border-indigo-500 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">Integração com APIs</h4>
                <p className="text-slate-600 text-sm">
                  Para sistemas empresariais, recomendamos validação local + verificação 
                  em lote via APIs oficiais da Receita Federal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AdSense Banner - Footer */}
      <AdSenseBanner 
        type="horizontal" 
        slot="cpf-footer-banner"
      />
      
      <Footer />
    </div>
  );
}