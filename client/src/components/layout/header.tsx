import { useState } from "react";
import { Link } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-check-double text-white text-sm"></i>
              </div>
              <h1 className="text-xl font-bold text-slate-900">ValidaBR</h1>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-slate-600 hover:text-blue-600 transition-colors" data-testid="dropdown-tools">
                  Ferramentas <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/cpf-cnpj" className="flex items-center space-x-2 cursor-pointer" data-testid="link-cpf-cnpj">
                    <i className="fas fa-id-card text-blue-600 w-4"></i>
                    <span>Validador CPF/CNPJ</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/telefone" className="flex items-center space-x-2 cursor-pointer" data-testid="link-telefone">
                    <i className="fas fa-phone text-green-600 w-4"></i>
                    <span>Validador Telefone</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/cep" className="flex items-center space-x-2 cursor-pointer" data-testid="link-cep">
                    <i className="fas fa-map-marker-alt text-purple-600 w-4"></i>
                    <span>Consulta CEP</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/email" className="flex items-center space-x-2 cursor-pointer" data-testid="link-email">
                    <i className="fas fa-envelope text-orange-600 w-4"></i>
                    <span>Validador Email</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#sobre" className="text-slate-600 hover:text-blue-600 transition-colors" data-testid="link-about">Sobre</a>
            <a href="#contato" className="text-slate-600 hover:text-blue-600 transition-colors" data-testid="link-contact">Contato</a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 transition-colors"
              data-testid="button-mobile-menu"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200 py-4" data-testid="mobile-menu">
            <div className="space-y-3">
              <div className="text-slate-900 font-medium mb-2">Ferramentas:</div>
              <Link href="/cpf-cnpj" className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors" data-testid="mobile-link-cpf-cnpj">
                <i className="fas fa-id-card text-blue-600 w-4"></i>
                <span>Validador CPF/CNPJ</span>
              </Link>
              <Link href="/telefone" className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors" data-testid="mobile-link-telefone">
                <i className="fas fa-phone text-green-600 w-4"></i>
                <span>Validador Telefone</span>
              </Link>
              <Link href="/cep" className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors" data-testid="mobile-link-cep">
                <i className="fas fa-map-marker-alt text-purple-600 w-4"></i>
                <span>Consulta CEP</span>
              </Link>
              <Link href="/email" className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors" data-testid="mobile-link-email">
                <i className="fas fa-envelope text-orange-600 w-4"></i>
                <span>Validador Email</span>
              </Link>
              <div className="border-t border-slate-200 pt-3 mt-3">
                <a href="#sobre" className="block text-slate-600 hover:text-blue-600 transition-colors mb-2" data-testid="mobile-link-about">Sobre</a>
                <a href="#contato" className="block text-slate-600 hover:text-blue-600 transition-colors" data-testid="mobile-link-contact">Contato</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
