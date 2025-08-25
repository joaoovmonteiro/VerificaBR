import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useDropzone } from "react-dropzone";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { FileConversionResponse } from "@shared/schema";

interface FileConverterProps {
  type: string;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  acceptedFormats: string;
  outputFormat: string;
}

type ConversionResult = FileConversionResponse;

export default function FileConverter({ 
  type, 
  title, 
  description, 
  icon, 
  iconColor, 
  acceptedFormats,
  outputFormat 
}: FileConverterProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<ConversionResult | null>(null);
  const { toast } = useToast();

  const convertMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', type);
      
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
        description: "Seu arquivo foi convertido com sucesso.",
      });
    },
    onError: (error) => {
      setIsConverting(false);
      setProgress(0);
      toast({
        title: "Erro na conversão",
        description: "Ocorreu um erro ao converter o arquivo. Tente novamente.",
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

  const getMimeTypes = (formats: string) => {
    const mimeTypeMap: Record<string, string[]> = {
      '.pdf': ['application/pdf'],
      '.doc': ['application/msword'],
      '.docx': ['application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
      '.jpg': ['.jpg', '.jpeg'],
      '.jpeg': ['.jpg', '.jpeg'], 
      '.png': ['.png'],
      '.gif': ['.gif'],
      '.bmp': ['.bmp'],
      '.tiff': ['.tiff', '.tif'],
      '.webp': ['.webp']
    };
    
    return formats.split(',').reduce((acc, format) => {
      const key = format.trim();
      const extensions = mimeTypeMap[key] || [];
      extensions.forEach(ext => {
        acc[ext] = extensions;
      });
      return acc;
    }, {} as Record<string, string[]>);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: getMimeTypes(acceptedFormats),
    maxFiles: 1,
    maxSize: 50 * 1024 * 1024, // 50MB
  });

  const handleConvert = () => {
    if (!file) return;
    
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
    
    convertMutation.mutate(file);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className={`w-16 h-16 bg-${iconColor.split('-')[1]}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
            <i className={`${icon} ${iconColor} text-2xl`}></i>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">{title}</h1>
          <p className="text-lg text-slate-600">{description}</p>
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
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-slate-300 hover:border-slate-400'
              }`}
              data-testid="file-upload-area"
            >
              <input {...getInputProps()} />
              <div className="space-y-4">
                <div className={`w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto`}>
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
                        ? 'Solte o arquivo aqui...' 
                        : 'Arraste um arquivo aqui ou clique para selecionar'
                      }
                    </p>
                    <p className="text-slate-400 text-sm">
                      Formatos aceitos: {acceptedFormats} | Máximo: 50MB
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Conversion Progress */}
            {isConverting && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Convertendo arquivo...</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="w-full" />
              </div>
            )}

            {/* Convert Button */}
            <Button
              onClick={handleConvert}
              disabled={!file || isConverting}
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
                  Converter para {outputFormat}
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
  );
}