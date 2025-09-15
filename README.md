# 🇧🇷 ValidaBR - Validador de Documentos Brasileiros

[![Python](https://img.shields.io/badge/Python-3.11+-blue.svg)](https://python.org)
[![Flask](https://img.shields.io/badge/Flask-3.0+-red.svg)](https://flask.palletsprojects.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**ValidaBR** é uma plataforma completa e gratuita para validação de documentos brasileiros e dados pessoais. Desenvolvida 100% em Python com Flask, oferece validação instantânea e confiável de CPF, CNPJ, telefones, CEP e emails.

## ✨ Funcionalidades

### 📋 Validadores Disponíveis

- **🆔 CPF/CNPJ**: Validação com algoritmo oficial dos dígitos verificadores
- **📞 Telefone**: Suporte completo para números brasileiros com detecção de operadora
- **📍 CEP**: Consulta de endereços via API dos Correios (ViaCEP)
- **📧 Email**: Validação avançada com verificação DNS, MX e detecção de emails descartáveis

### 🚀 Características Técnicas

- **Backend 100% Python**: Flask com código limpo e organizando
- **APIs RESTful**: Endpoints padronizados e documentados
- **Validação Rigorosa**: Implementação dos algoritmos oficiais brasileiros
- **Interface Moderna**: Frontend responsivo com design profissional
- **Gratuito e Open Source**: Sem limitações de uso

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Python 3.11+
- pip (gerenciador de pacotes Python)

### Instalação Rápida

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/validabr.git
cd validabr
```

2. **Instale as dependências**
```bash
pip install flask flask-cors requests dnspython validate-email email-validator
```

3. **Execute a aplicação**
```bash
python app.py
```

4. **Acesse no navegador**
```
http://localhost:5000
```

## 📚 Uso da API

### Validação de CPF/CNPJ
```bash
curl -X POST http://localhost:5000/api/validate/cpf-cnpj \
  -H "Content-Type: application/json" \
  -d '{"document": "111.444.777-35"}'
```

**Resposta:**
```json
{
  "success": true,
  "valid": true,
  "document": "11144477735",
  "formattedDocument": "111.444.777-35",
  "type": "CPF",
  "message": "CPF válido"
}
```

### Validação de Telefone
```bash
curl -X POST http://localhost:5000/api/validate/telefone \
  -H "Content-Type: application/json" \
  -d '{"phone": "(11) 98765-4321", "type": "br"}'
```

**Resposta:**
```json
{
  "success": true,
  "valid": true,
  "phone": "11987654321",
  "formattedPhone": "(11) 98765-4321",
  "type": "Celular",
  "areaCode": "11",
  "areaName": "São Paulo - SP",
  "carrier": "Telefonia móvel",
  "message": "Telefone celular válido"
}
```

### Validação de CEP
```bash
curl -X POST http://localhost:5000/api/validate/cep \
  -H "Content-Type: application/json" \
  -d '{"cep": "01310-100"}'
```

**Resposta:**
```json
{
  "success": true,
  "valid": true,
  "cep": "01310100",
  "formattedCep": "01310-100",
  "address": {
    "street": "Avenida Paulista",
    "neighborhood": "Bela Vista",
    "city": "São Paulo",
    "state": "SP",
    "ibge": "3550308"
  },
  "message": "CEP encontrado"
}
```

### Validação de Email
```bash
curl -X POST http://localhost:5000/api/validate/email \
  -H "Content-Type: application/json" \
  -d '{"email": "exemplo@gmail.com"}'
```

**Resposta:**
```json
{
  "success": true,
  "valid": true,
  "email": "exemplo@gmail.com",
  "result": "valid",
  "reason": "valid",
  "message": "Email válido",
  "checks": {
    "syntax": true,
    "domain": true,
    "mx": true,
    "smtp": false,
    "disposable": false,
    "roleBase": false,
    "catchAll": false
  }
}
```

## 🏗️ Arquitetura do Projeto

```
validabr/
├── app.py                 # Aplicação Flask principal
├── static/               # Arquivos do frontend (HTML, CSS, JS)
├── templates/            # Templates Jinja2 (se necessário)
├── requirements.txt      # Dependências Python
└── README.md            # Documentação
```

### Classes Principais

- **DocumentValidator**: Validação de CPF e CNPJ
- **PhoneValidator**: Validação de telefones brasileiros e internacionais
- **CepValidator**: Consulta de CEP via APIs externas
- **EmailValidator**: Validação completa de emails

## 🌟 Diferenciais Técnicos

### Validação de CPF/CNPJ
- ✅ Algoritmo oficial de dígitos verificadores
- ✅ Detecção de documentos com dígitos iguais
- ✅ Formatação automática de saída

### Validação de Telefone
- ✅ Suporte completo a números brasileiros (fixos e móveis)
- ✅ Identificação automática de códigos de área
- ✅ Detecção de operadoras (fixa/móvel)
- ✅ Suporte a números especiais (0800, 4004)

### Validação de CEP
- ✅ Integração com ViaCEP (API oficial dos Correios)
- ✅ Retorno de endereço completo
- ✅ Tratamento de erros e timeouts

### Validação de Email
- ✅ Verificação de sintaxe avançada
- ✅ Validação de domínio e registros MX
- ✅ Detecção de emails descartáveis
- ✅ Identificação de emails baseados em função

## 🤝 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🚀 Deploy

### Heroku
```bash
# Adicione os arquivos necessários
echo "web: python app.py" > Procfile
echo -e "flask\nflask-cors\nrequests\ndnspython\nvalidate-email\nemail-validator" > requirements.txt

# Deploy
heroku create seu-app-validabr
git push heroku main
```

### Docker
```dockerfile
FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
EXPOSE 5000

CMD ["python", "app.py"]
```

## 📞 Contato e Suporte

- **GitHub**: [github.com/seu-usuario/validabr](https://github.com/seu-usuario/validabr)
- **Issues**: Para reportar bugs ou solicitar features
- **Documentação**: Acesse a documentação completa da API

---

⭐ **Se este projeto foi útil para você, considere dar uma estrela no GitHub!**

**ValidaBR** - Validação de documentos brasileiros feita da forma certa! 🇧🇷