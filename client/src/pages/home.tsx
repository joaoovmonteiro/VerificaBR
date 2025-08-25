import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ToolCard from "@/components/validation/tool-card";
import CpfCnpjValidator from "@/components/validation/cpf-cnpj-validator";
import PhoneValidator from "@/components/validation/phone-validator";
import CepValidator from "@/components/validation/cep-validator";
import EmailValidator from "@/components/validation/email-validator";
import AdPlaceholder from "@/components/ui/ad-placeholder";

type ToolType = 'cpf-cnpj' | 'telefone' | 'cep' | 'email' | null;

export default function Home() {
  const [activeTool, setActiveTool] = useState<ToolType>(null);

  const tools = [
    {
      id: 'cpf-cnpj' as const,
      title: 'CPF / CNPJ',
      description: 'Valide documentos brasileiros com algoritmo oficial de dígitos verificadores',
      icon: 'fas fa-id-card',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      id: 'telefone' as const,
      title: 'Telefone',
      description: 'Verifica números brasileiros e internacionais com detecção de operadora',
      icon: 'fas fa-phone',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      id: 'cep' as const,
      title: 'CEP',
      description: 'Consulta endereço completo via API dos Correios e ViaCEP',
      icon: 'fas fa-map-marker-alt',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      id: 'email' as const,
      title: 'Email',
      description: 'Validação completa com DNS, MX, SMTP e detecção de domínios descartáveis',
      icon: 'fas fa-envelope',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
  ];

  const renderToolValidator = () => {
    switch (activeTool) {
      case 'cpf-cnpj':
        return <CpfCnpjValidator onBack={() => setActiveTool(null)} />;
      case 'telefone':
        return <PhoneValidator onBack={() => setActiveTool(null)} />;
      case 'cep':
        return <CepValidator onBack={() => setActiveTool(null)} />;
      case 'email':
        return <EmailValidator onBack={() => setActiveTool(null)} />;
      default:
        return null;
    }
  };

  if (activeTool) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans">
        <Header />
        {renderToolValidator()}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Validação Rápida e Confiável
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Ferramentas profissionais para validar CPF, CNPJ, telefone, CEP e email. 
            Rápido, seguro e totalmente gratuito.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center space-x-2">
              <i className="fas fa-shield-alt text-green-500"></i>
              <span>100% Seguro</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-bolt text-yellow-500"></i>
              <span>Validação Instantânea</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-mobile-alt text-blue-500"></i>
              <span>Mobile Friendly</span>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Placeholder */}
      <AdPlaceholder 
        type="horizontal" 
        description="[ Espaço para Anúncio AdSense - Horizontal Banner ]"
        dimensions="728x90 ou 320x50 (responsivo)"
      />

      {/* Tools Grid */}
      <section id="ferramentas" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">Escolha sua Ferramenta</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {tools.map((tool) => (
              <ToolCard
                key={tool.id}
                title={tool.title}
                description={tool.description}
                icon={tool.icon}
                bgColor={tool.bgColor}
                iconColor={tool.iconColor}
                onClick={() => setActiveTool(tool.id)}
                data-testid={`card-tool-${tool.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AdSense Placeholder */}
      <AdPlaceholder 
        type="square" 
        description="[ Espaço para Anúncio AdSense - Square Banner ]"
        dimensions="300x250"
      />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">Por que escolher ValidaBR?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-rocket text-blue-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Rápido e Eficiente</h4>
              <p className="text-slate-600">Validação em tempo real com algoritmos otimizados para máxima performance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-green-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">100% Seguro</h4>
              <p className="text-slate-600">Seus dados não são armazenados. Processamento local e conexões criptografadas</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-mobile-alt text-purple-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Mobile First</h4>
              <p className="text-slate-600">Interface responsiva otimizada para todos os dispositivos e tamanhos de tela</p>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Placeholder */}
      <AdPlaceholder 
        type="horizontal" 
        description="[ Espaço para Anúncio AdSense - Horizontal Banner ]"
        dimensions="728x90 ou 320x50 (responsivo)"
      />

      <Footer />
    </div>
  );
}
