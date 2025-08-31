import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ToolCard from "@/components/validation/tool-card";
import AdSenseBanner from "@/components/ui/adsense-banner";

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

      {/* AdSense Banner - Top */}
      <AdSenseBanner 
        type="horizontal" 
        slot="home-top-banner"
      />

      {/* Tools Grid */}
      <section id="ferramentas" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-4">Validadores Profissionais</h3>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Ferramentas de validação confiáveis para documentos brasileiros e dados pessoais. 
            Validação instantânea com algoritmos oficiais, totalmente gratuito e seguro.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </section>

      {/* AdSense Banner - Middle */}
      <AdSenseBanner 
        type="horizontal" 
        slot="home-middle-banner"
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

      {/* AdSense Banner - Sidebar */}
      <AdSenseBanner 
        type="square" 
        slot="home-sidebar-square"
      />

      {/* AdSense Banner - Footer */}
      <AdSenseBanner 
        type="horizontal" 
        slot="home-footer-banner"
      />

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Perguntas Frequentes sobre Validação de Documentos</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre validação de CPF, CNPJ, telefones, CEP e emails no Brasil.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                <i className="fas fa-id-card text-blue-600 mr-2"></i>
                Como funciona a validação de CPF?
              </h4>
              <p className="text-slate-600 mb-4">
                O ValidaBR utiliza o algoritmo oficial da Receita Federal para validar CPFs. Verificamos os dígitos verificadores, 
                detectamos sequências inválidas como 111.111.111-11 e formatamos automaticamente o número.
              </p>
              <p className="text-slate-600">
                O processo é instantâneo e garante 100% de precisão na verificação matemática do documento, 
                seguindo as especificações oficiais brasileiras.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                <i className="fas fa-building text-green-600 mr-2"></i>
                CNPJ também é validado?
              </h4>
              <p className="text-slate-600 mb-4">
                Sim! Validamos CNPJs usando o algoritmo oficial com verificação dos dois dígitos verificadores. 
                O sistema detecta automaticamente se o documento é CPF (11 dígitos) ou CNPJ (14 dígitos).
              </p>
              <p className="text-slate-600">
                Formatamos no padrão 00.000.000/0000-00 e verificamos sequências inválidas como 00.000.000/0000-00.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                <i className="fas fa-phone text-purple-600 mr-2"></i>
                Quais tipos de telefone são suportados?
              </h4>
              <p className="text-slate-600 mb-4">
                Validamos celulares (11 dígitos com 9º dígito), telefones fixos (10 dígitos), 
                números 0800 gratuitos e 4004 de atendimento. Todos os DDDs brasileiros são reconhecidos.
              </p>
              <p className="text-slate-600">
                Identificamos automaticamente a operadora (Vivo, TIM, Claro, Oi) e o estado de origem 
                baseado no DDD fornecido.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                <i className="fas fa-map-marker-alt text-orange-600 mr-2"></i>
                Como funciona a consulta de CEP?
              </h4>
              <p className="text-slate-600 mb-4">
                Conectamos diretamente à API oficial dos Correios (ViaCEP) para buscar endereços completos. 
                Retornamos logradouro, bairro, cidade, estado e código IBGE quando disponível.
              </p>
              <p className="text-slate-600">
                A consulta é feita em tempo real e os dados estão sempre atualizados conforme a base oficial brasileira.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                <i className="fas fa-envelope text-red-600 mr-2"></i>
                O que verifica a validação de email?
              </h4>
              <p className="text-slate-600 mb-4">
                Realizamos validação completa: sintaxe RFC5322, existência do domínio, registros MX, 
                conectividade SMTP, detecção de emails descartáveis e identificação de emails de função.
              </p>
              <p className="text-slate-600">
                Sugerimos correções para domínios populares quando detectamos possíveis erros de digitação.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                <i className="fas fa-shield-alt text-indigo-600 mr-2"></i>
                Os dados são armazenados?
              </h4>
              <p className="text-slate-600 mb-4">
                Não! Todos os dados são processados em tempo real e descartados imediatamente após a validação. 
                Não mantemos histórico, logs ou qualquer registro dos documentos validados.
              </p>
              <p className="text-slate-600">
                Sua privacidade é nossa prioridade. Utilizamos conexões criptografadas e processamento local 
                sempre que possível.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
