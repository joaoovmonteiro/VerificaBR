import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FileConverter from "@/components/conversion/file-converter";
import AdPlaceholder from "@/components/ui/ad-placeholder";

export default function ConversorPdfPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      
      <FileConverter 
        type="word-to-pdf"
        title="Conversor Word para PDF"
        description="Converta documentos Word (.docx, .doc) para PDF de alta qualidade"
        icon="fas fa-file-word"
        iconColor="text-blue-600"
        acceptedFormats=".doc,.docx"
        outputFormat="PDF"
      />
      
      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Conversor Word para PDF Online - Gratuito e Seguro
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Converta documentos Word (.docx, .doc) para PDF mantendo a formatação original. 
              Rápido, seguro e sem necessidade de instalação de software.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                <i className="fas fa-file-word text-blue-600 mr-2"></i>
                Formatos Suportados
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Microsoft Word 2003+ (.doc)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Microsoft Word 2007+ (.docx)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Rich Text Format (.rtf)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>OpenDocument Text (.odt)</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                <i className="fas fa-shield-alt text-blue-600 mr-2"></i>
                Características
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Preserva formatação original</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Mantém imagens e tabelas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Conversão em alta resolução</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Arquivos deletados automaticamente</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-slate-900 mb-2">
              <i className="fas fa-info-circle text-blue-600 mr-2"></i>
              Como usar o conversor
            </h4>
            <ol className="text-slate-600 space-y-1">
              <li>1. Clique em "Escolher arquivo" e selecione seu documento Word</li>
              <li>2. Aguarde o upload completar (arquivo é processado instantaneamente)</li>
              <li>3. Clique em "Converter para PDF" para iniciar a conversão</li>
              <li>4. Faça o download do arquivo PDF convertido</li>
            </ol>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">
                <i className="fas fa-tachometer-alt text-green-600 mr-2"></i>
                Conversão Rápida
              </h4>
              <p className="text-sm text-slate-600">
                Processamento em segundos. Documentos até 50MB são convertidos instantaneamente.
              </p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">
                <i className="fas fa-lock text-purple-600 mr-2"></i>
                100% Seguro
              </h4>
              <p className="text-sm text-slate-600">
                Arquivos são deletados automaticamente após 1 hora. Suas informações ficam protegidas.
              </p>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">
                <i className="fas fa-star text-orange-600 mr-2"></i>
                Alta Qualidade
              </h4>
              <p className="text-sm text-slate-600">
                PDFs de alta qualidade com formatação preservada e texto pesquisável.
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