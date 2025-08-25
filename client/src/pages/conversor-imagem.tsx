import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FileConverter from "@/components/conversion/file-converter";
import AdPlaceholder from "@/components/ui/ad-placeholder";

export default function ConversorImagemPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      
      <FileConverter 
        type="image-converter"
        title="Conversor de Imagens"
        description="Converta imagens entre diferentes formatos (JPG, PNG, WebP, etc.)"
        icon="fas fa-image"
        iconColor="text-purple-600"
        acceptedFormats=".jpg,.jpeg,.png,.gif,.bmp,.tiff,.webp"
        outputFormat="Múltiplos formatos"
      />
      
      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Conversor de Imagens Online - Todos os Formatos
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Converta imagens entre JPG, PNG, WebP, GIF e outros formatos. Redimensione, 
              comprima e otimize suas imagens online gratuitamente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                <i className="fas fa-images text-purple-600 mr-2"></i>
                Formatos Suportados
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>JPEG/JPG - Fotos e imagens coloridas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>PNG - Imagens com transparência</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>WebP - Formato moderno e otimizado</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>GIF - Imagens animadas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>TIFF, BMP - Formatos profissionais</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                <i className="fas fa-cogs text-purple-600 mr-2"></i>
                Funcionalidades
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Conversão entre formatos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Redimensionamento de imagens</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Compressão e otimização</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Ajuste de qualidade</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Processamento em lote</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">
                <i className="fas fa-compress text-purple-600 mr-2"></i>
                Compressão Inteligente
              </h4>
              <p className="text-sm text-slate-600">
                Reduza o tamanho dos arquivos mantendo a qualidade visual das imagens.
              </p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">
                <i className="fas fa-expand-arrows-alt text-blue-600 mr-2"></i>
                Redimensionamento
              </h4>
              <p className="text-sm text-slate-600">
                Altere as dimensões das imagens para web, redes sociais ou impressão.
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">
                <i className="fas fa-bolt text-green-600 mr-2"></i>
                Conversão Rápida
              </h4>
              <p className="text-sm text-slate-600">
                Processamento instantâneo de imagens até 20MB cada arquivo.
              </p>
            </div>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-slate-900 mb-2">
              <i className="fas fa-info-circle text-purple-600 mr-2"></i>
              Quando usar cada formato
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
              <div>
                <p className="font-medium text-slate-900 mb-1">JPG/JPEG</p>
                <p>Ideal para fotos e imagens com muitas cores. Menor tamanho de arquivo.</p>
              </div>
              <div>
                <p className="font-medium text-slate-900 mb-1">PNG</p>
                <p>Melhor para logos, ícones e imagens que precisam de transparência.</p>
              </div>
              <div>
                <p className="font-medium text-slate-900 mb-1">WebP</p>
                <p>Formato moderno com melhor compressão. Ideal para web.</p>
              </div>
              <div>
                <p className="font-medium text-slate-900 mb-1">GIF</p>
                <p>Para imagens animadas simples e paleta de cores limitada.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibold text-slate-900 mb-2">
              <i className="fas fa-lightbulb text-yellow-600 mr-2"></i>
              Dicas de otimização
            </h4>
            <ul className="text-slate-600 space-y-1">
              <li>• Use JPG para fotos e PNG para gráficos com texto</li>
              <li>• WebP oferece melhor compressão que JPG mantendo qualidade</li>
              <li>• Redimensione imagens para o tamanho necessário antes de usar</li>
              <li>• Para web, imagens entre 500KB-1MB são ideais</li>
            </ul>
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