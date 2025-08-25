import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FileConverter from "@/components/conversion/file-converter";
import AdPlaceholder from "@/components/ui/ad-placeholder";

export default function ConversorWordPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      
      <FileConverter 
        type="pdf-to-word"
        title="Conversor PDF para Word"
        description="Converta arquivos PDF para documentos Word editáveis (.docx)"
        icon="fas fa-file-pdf"
        iconColor="text-red-600"
        acceptedFormats=".pdf"
        outputFormat="DOCX"
      />
      
      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Conversor PDF para Word Online - Edite PDFs como DOCX
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Transforme arquivos PDF em documentos Word editáveis. Converta PDFs para .docx 
              mantendo texto, imagens e formatação para edição fácil.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                <i className="fas fa-magic text-red-600 mr-2"></i>
                Tecnologia OCR Avançada
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Reconhecimento óptico de caracteres</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Extração precisa de texto</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Preservação de imagens</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Manutenção de tabelas</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                <i className="fas fa-edit text-red-600 mr-2"></i>
                Resultado Editável
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Texto totalmente editável</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Formatação preservada</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Compatível com Microsoft Word</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Suporte a múltiplas páginas</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-slate-900 mb-2">
              <i className="fas fa-lightbulb text-red-600 mr-2"></i>
              Dicas para melhor conversão
            </h4>
            <ul className="text-slate-600 space-y-1">
              <li>• PDFs com texto nativo convertem melhor que imagens escaneadas</li>
              <li>• Documentos com formatação simples têm melhor resultado</li>
              <li>• PDFs protegidos por senha precisam ser desbloqueados primeiro</li>
              <li>• Arquivos muito grandes podem demorar mais para processar</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">
                <i className="fas fa-eye text-red-600 mr-2"></i>
                OCR Inteligente
              </h4>
              <p className="text-sm text-slate-600">
                Tecnologia avançada de reconhecimento para extrair texto mesmo de PDFs escaneados.
              </p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">
                <i className="fas fa-layers text-blue-600 mr-2"></i>
                Layout Preservado
              </h4>
              <p className="text-sm text-slate-600">
                Mantém a estrutura original do documento incluindo parágrafos e formatação.
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">
                <i className="fas fa-download text-green-600 mr-2"></i>
                Download Imediato
              </h4>
              <p className="text-sm text-slate-600">
                Arquivo Word convertido fica disponível para download instantaneamente.
              </p>
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