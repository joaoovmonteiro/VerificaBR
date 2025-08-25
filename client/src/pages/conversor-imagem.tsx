import { useState, useCallback } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import AdPlaceholder from "@/components/ui/ad-placeholder";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useDropzone } from "react-dropzone";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

interface ConversionResult {
  success: boolean;
  downloadUrl?: string;
  filename?: string;
  originalName?: string;
  size?: number;
  format?: string;
  error?: string;
}

export default function ConversorImagemPage() {
  const [file, setFile] = useState<File | null>(null);
  const [targetFormat, setTargetFormat] = useState<string>("jpg");
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<ConversionResult | null>(null);
  const { toast } = useToast();

  const convertMutation = useMutation({
    mutationFn: async (data: { file: File; format: string }) => {
      const formData = new FormData();
      formData.append('file', data.file);
      formData.append('type', 'image-converter');
      formData.append('targetFormat', data.format);
      
      const response = await fetch('/api/convert', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Conversion failed');
      }
      
      return response.json() as Promise<ConversionResult>;
    },
    onSuccess: (data) => {
      setResult(data);
      setIsConverting(false);
      setProgress(100);
      toast({
        title: "Conversão concluída!",
        description: "Sua imagem foi convertida com sucesso.",
      });
    },
    onError: () => {
      setIsConverting(false);
      setProgress(0);
      toast({
        title: "Erro na conversão",
        description: "Ocorreu um erro ao converter a imagem. Tente novamente.",
        variant: "destructive",
      });
    },
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);
      setResult(null);
      setProgress(0);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp']
    },
    maxFiles: 1,
    maxSize: 50 * 1024 * 1024, // 50MB
  });

  const handleConvert = () => {
    if (!file || !targetFormat) return;
    
    setIsConverting(true);
    setProgress(0);
    
    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + Math.random() * 20;
      });
    }, 200);
    
    convertMutation.mutate({ file, format: targetFormat });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      
      {/* Converter Interface */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-image text-purple-600 text-2xl"></i>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Conversor de Imagens</h1>
            <p className="text-lg text-slate-600">Converta imagens entre diferentes formatos (JPG, PNG, WebP, etc.)</p>
          </div>

          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Upload e Conversão</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* File Upload Area */}
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragActive 
                    ? 'border-purple-500 bg-purple-50' 
                    : 'border-slate-300 hover:border-slate-400'
                }`}
                data-testid="file-upload-area"
              >
                <input {...getInputProps()} />
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                    <i className="fas fa-cloud-upload-alt text-slate-600 text-xl"></i>
                  </div>
                  {file ? (
                    <div>
                      <p className="text-slate-900 font-medium">{file.name}</p>
                      <p className="text-slate-500 text-sm">{formatFileSize(file.size)}</p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-slate-600">
                        {isDragActive 
                          ? 'Solte a imagem aqui...' 
                          : 'Arraste uma imagem aqui ou clique para selecionar'
                        }
                      </p>
                      <p className="text-slate-400 text-sm">
                        Formatos aceitos: JPG, PNG, GIF, WebP, BMP, TIFF | Máximo: 50MB
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Format Selection */}
              {file && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Converter para:
                  </label>
                  <Select value={targetFormat} onValueChange={setTargetFormat}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o formato de saída" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jpg">JPG - Melhor para fotos</SelectItem>
                      <SelectItem value="png">PNG - Com transparência</SelectItem>
                      <SelectItem value="webp">WebP - Formato moderno</SelectItem>
                      <SelectItem value="gif">GIF - Para animações</SelectItem>
                      <SelectItem value="bmp">BMP - Bitmap</SelectItem>
                      <SelectItem value="tiff">TIFF - Alta qualidade</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Conversion Progress */}
              {isConverting && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>Convertendo imagem...</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="w-full" />
                </div>
              )}

              {/* Convert Button */}
              <Button
                onClick={handleConvert}
                disabled={!file || !targetFormat || isConverting}
                className="w-full"
                size="lg"
                data-testid="button-convert"
              >
                {isConverting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Convertendo...
                  </>
                ) : (
                  <>
                    <i className="fas fa-exchange-alt mr-2"></i>
                    Converter para {targetFormat?.toUpperCase()}
                  </>
                )}
              </Button>

              {/* Download Result */}
              {result && result.success && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <i className="fas fa-check text-green-600"></i>
                      </div>
                      <div>
                        <p className="font-medium text-green-900">Conversão concluída!</p>
                        <p className="text-sm text-green-700">{result.filename}</p>
                      </div>
                    </div>
                    <Button
                      onClick={() => window.open(result.downloadUrl, '_blank')}
                      variant="outline"
                      size="sm"
                      data-testid="button-download"
                    >
                      <i className="fas fa-download mr-2"></i>
                      Download
                    </Button>
                  </div>
                </div>
              )}

              {/* Error State */}
              {result && !result.success && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <i className="fas fa-exclamation-triangle text-red-600"></i>
                    </div>
                    <div>
                      <p className="font-medium text-red-900">Erro na conversão</p>
                      <p className="text-sm text-red-700">{result.error || 'Tente novamente'}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 text-center">
                <a 
                  href="/"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                  data-testid="button-back-to-tools"
                >
                  <i className="fas fa-arrow-left mr-2"></i>Voltar às Ferramentas
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
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