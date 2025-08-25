import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CpfCnpjValidator from "@/components/validation/cpf-cnpj-validator";
import AdPlaceholder from "@/components/ui/ad-placeholder";
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
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
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