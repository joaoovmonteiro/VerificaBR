export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <i className="fas fa-check-double text-white text-sm"></i>
            </div>
            <h1 className="text-xl font-bold text-slate-900">ValidaBR</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#ferramentas" className="text-slate-600 hover:text-blue-600 transition-colors" data-testid="link-tools">Ferramentas</a>
            <a href="#sobre" className="text-slate-600 hover:text-blue-600 transition-colors" data-testid="link-about">Sobre</a>
            <a href="#contato" className="text-slate-600 hover:text-blue-600 transition-colors" data-testid="link-contact">Contato</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
