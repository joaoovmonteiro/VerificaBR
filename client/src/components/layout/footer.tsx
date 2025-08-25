export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-check-double text-white text-sm"></i>
              </div>
              <h4 className="text-xl font-bold">ValidaBR</h4>
            </div>
            <p className="text-slate-400">Ferramentas profissionais de validação para CPF, CNPJ, telefone, CEP e email.</p>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Ferramentas</h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-cpf-cnpj">Validador CPF/CNPJ</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-phone">Validador Telefone</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-cep">Consulta CEP</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-email">Validador Email</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Contato</h5>
            <ul className="space-y-2 text-slate-400">
              <li><i className="fas fa-envelope mr-2"></i> contato@validabr.com</li>
              <li><i className="fas fa-shield-alt mr-2"></i> Política de Privacidade</li>
              <li><i className="fas fa-file-alt mr-2"></i> Termos de Uso</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 ValidaBR. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
