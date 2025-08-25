import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ToolCard from "@/components/validation/tool-card";
import AdPlaceholder from "@/components/ui/ad-placeholder";

export default function Home() {
  const validationTools = [
    {
      id: 'cpf-cnpj' as const,
      title: 'CPF / CNPJ',
      description: 'Valide documentos brasileiros com algoritmo oficial de dígitos verificadores',
      icon: 'fas fa-id-card',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      href: '/cpf-cnpj',
    },
    {
      id: 'telefone' as const,
      title: 'Telefone',
      description: 'Verifica números brasileiros e internacionais com detecção de operadora',
      icon: 'fas fa-phone',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      href: '/telefone',
    },
    {
      id: 'cep' as const,
      title: 'CEP',
      description: 'Consulta endereço completo via API dos Correios e ViaCEP',
      icon: 'fas fa-map-marker-alt',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      href: '/cep',
    },
    {
      id: 'email' as const,
      title: 'Email',
      description: 'Validação completa com DNS, MX, SMTP e detecção de domínios descartáveis',
      icon: 'fas fa-envelope',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
      href: '/email',
    },
  ];

  const conversionTools = [
    {
      id: 'conversor-pdf' as const,
      title: 'Word para PDF',
      description: 'Converta documentos Word (.docx, .doc) para PDF mantendo formatação',
      icon: 'fas fa-file-pdf',
      bgColor: 'bg-red-100',
      iconColor: 'text-red-600',
      href: '/conversor-pdf',
    },
    {
      id: 'conversor-word' as const,
      title: 'PDF para Word',
      description: 'Transforme PDFs em documentos Word editáveis com OCR avançado',
      icon: 'fas fa-file-word',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      href: '/conversor-word',
    },
    {
      id: 'conversor-imagem' as const,
      title: 'Conversor Imagens',
      description: 'Converta entre JPG, PNG, WebP, GIF e outros formatos de imagem',
      icon: 'fas fa-image',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      href: '/conversor-imagem',
    },
  ];

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
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-4">Suas Ferramentas Online</h3>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Validadores e conversores profissionais para suas necessidades diárias. Tudo gratuito, rápido e seguro.
          </p>
          
          {/* Validation Tools */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-slate-900 mb-6 text-center">
              <i className="fas fa-check-circle text-green-600 mr-2"></i>
              Validadores
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {validationTools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  title={tool.title}
                  description={tool.description}
                  icon={tool.icon}
                  bgColor={tool.bgColor}
                  iconColor={tool.iconColor}
                  href={tool.href}
                  data-testid={`card-tool-${tool.id}`}
                />
              ))}
            </div>
          </div>

          {/* AdSense Placement - Between Tool Sections */}
          <div className="my-12">
            <AdPlaceholder 
              type="square" 
              description="[ Espaço para Anúncio AdSense - Square Banner ]"
              dimensions="300x250 ou 336x280"
            />
          </div>
          
          {/* Conversion Tools */}
          <div>
            <h4 className="text-xl font-semibold text-slate-900 mb-6 text-center">
              <i className="fas fa-exchange-alt text-blue-600 mr-2"></i>
              Conversores de Arquivo
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {conversionTools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  title={tool.title}
                  description={tool.description}
                  icon={tool.icon}
                  bgColor={tool.bgColor}
                  iconColor={tool.iconColor}
                  href={tool.href}
                  data-testid={`card-tool-${tool.id}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Placement - Above Features */}
      <AdPlaceholder 
        type="horizontal" 
        description="[ Espaço para Anúncio AdSense - Horizontal Banner ]"
        dimensions="728x90 ou 320x50 (responsivo)"
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

      {/* About Section */}
      <section id="sobre" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Sobre o ValidaBR</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              O ValidaBR é a plataforma mais completa e confiável para validação de documentos e dados brasileiros. 
              Desenvolvida com foco em precisão, segurança e facilidade de uso.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-check text-blue-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-3">Algoritmos Oficiais</h4>
              <p className="text-slate-600">
                Utilizamos apenas algoritmos oficiais brasileiros para validação de CPF e CNPJ, 
                garantindo 100% de precisão conforme especificação da Receita Federal.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-database text-green-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-3">APIs Confiáveis</h4>
              <p className="text-slate-600">
                Integramos com APIs oficiais como ViaCEP dos Correios para consulta de CEP e 
                servidores DNS/SMTP reais para validação completa de emails.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-lock text-purple-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-3">Privacidade Total</h4>
              <p className="text-slate-600">
                Não armazenamos nenhum dado pessoal. Todas as validações são processadas em tempo real 
                e descartadas imediatamente após o resultado.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-tachometer-alt text-orange-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-3">Performance Otimizada</h4>
              <p className="text-slate-600">
                Infraestrutura moderna e otimizada para entregar resultados em milissegundos. 
                Algoritmos eficientes e cache inteligente para máxima velocidade.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-red-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-3">Milhares de Usuários</h4>
              <p className="text-slate-600">
                Confiado por desenvolvedores, empresas e profissionais em todo o Brasil. 
                Mais de 100.000 validações realizadas com sucesso mensalmente.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-code text-indigo-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-3">Open Source</h4>
              <p className="text-slate-600">
                Código aberto e transparente. Contribua com melhorias, reporte bugs ou 
                sugira novas funcionalidades através do nosso repositório no GitHub.
              </p>
            </div>
          </div>
          
          {/* Technical Details */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              <i className="fas fa-cog text-blue-600 mr-2"></i>
              Tecnologias e Especificações
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-lg font-semibold text-slate-900 mb-4">Validação de Documentos</h5>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-green-500 mt-1"></i>
                    <span>CPF: Algoritmo oficial com verificação de dígitos verificadores</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-green-500 mt-1"></i>
                    <span>CNPJ: Conformidade com especificação da Receita Federal</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-green-500 mt-1"></i>
                    <span>Detecção de sequências inválidas e formatação automática</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold text-slate-900 mb-4">Validação de Contatos</h5>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-green-500 mt-1"></i>
                    <span>Telefone: Todos os DDDs brasileiros + internacional</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-green-500 mt-1"></i>
                    <span>CEP: Integração oficial com Correios e ViaCEP</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-green-500 mt-1"></i>
                    <span>Email: DNS, MX Records, SMTP e anti-spam</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-slate-600">Precisão na Validação</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">&lt;100ms</div>
              <div className="text-slate-600">Tempo de Resposta</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-slate-600">Disponibilidade</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-slate-600">Gratuito</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Entre em Contato</h3>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Dúvidas, sugestões ou problemas? Estamos aqui para ajudar. 
              Nossa equipe responde em até 24 horas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-envelope text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Email</h4>
              <p className="text-slate-400 mb-2">contato@validabr.com</p>
              <p className="text-sm text-slate-500">Resposta em até 24h</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Comunidade</h4>
              <p className="text-slate-400 mb-2">+10.000 usuários ativos</p>
              <p className="text-sm text-slate-500">Validações realizadas diariamente</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-question-circle text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Suporte</h4>
              <p className="text-slate-400 mb-2">suporte@validabr.com</p>
              <p className="text-sm text-slate-500">Dúvidas técnicas</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Additional AdSense Placement - Before Contact */}
      <AdPlaceholder 
        type="square" 
        description="[ Espaço para Anúncio AdSense - Square Banner ]"
        dimensions="300x250 ou 336x280"
      />

      {/* Final AdSense Placement - Before Footer */}
      <AdPlaceholder 
        type="horizontal" 
        description="[ Espaço para Anúncio AdSense - Horizontal Banner ]"
        dimensions="728x90 ou 320x50 (responsivo)"
      />

      <Footer />
    </div>
  );
}
