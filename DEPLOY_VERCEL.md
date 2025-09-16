# Deploy no Vercel - VerificaBR

Este projeto foi configurado para funcionar no Vercel com serverless functions.

## Estrutura do Projeto

- **Frontend**: React + Vite na pasta `client/`
- **Backend**: Serverless functions na pasta `api/`
- **Build**: Configurado para gerar apenas o frontend estático

## Arquivos de Configuração

- `vercel.json`: Configuração principal do Vercel
- `api/`: Serverless functions para as validações
- `package.json`: Scripts atualizados para build do Vercel

## Como Deployar

1. **Conectar ao GitHub**: 
   - Faça push do código para o GitHub
   - Conecte o repositório ao Vercel

2. **Configurações do Vercel**:
   - Framework: Vite (detectado automaticamente)
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

3. **Variáveis de Ambiente** (se necessário):
   - NODE_ENV=production

## API Endpoints

As seguintes rotas estão disponíveis como serverless functions:

- `POST /api/validate/cpf-cnpj` - Validação de CPF/CNPJ
- `POST /api/validate/phone` - Validação de telefone
- `POST /api/validate/cep` - Validação de CEP
- `POST /api/validate/email` - Validação de email
- `GET /api/ads.txt` - Arquivo ads.txt

## Diferenças do Render

- **Render**: Servidor Node.js tradicional com Express
- **Vercel**: Frontend estático + serverless functions
- **Build**: Apenas o frontend é buildado, as APIs são serverless

## Troubleshooting

Se o deploy não funcionar:

1. Verifique se o `vercel.json` está na raiz do projeto
2. Confirme se as serverless functions estão na pasta `api/`
3. Verifique se o build está gerando a pasta `dist/public/`
4. Confirme se as dependências estão instaladas corretamente
