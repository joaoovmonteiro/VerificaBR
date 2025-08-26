from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import re
import socket
import dns.resolver
from typing import Dict, Any, Optional
import json

app = Flask(__name__)
CORS(app)

class DocumentValidator:
    @staticmethod
    def validate_cpf_cnpj(document: str) -> Dict[str, Any]:
        """Valida CPF ou CNPJ brasileiro"""
        # Remove formatação
        clean_doc = re.sub(r'[^\d]', '', document)
        
        if len(clean_doc) == 11:
            return DocumentValidator._validate_cpf(clean_doc)
        elif len(clean_doc) == 14:
            return DocumentValidator._validate_cnpj(clean_doc)
        else:
            return {
                "success": True,
                "valid": False,
                "document": clean_doc,
                "formattedDocument": document,
                "type": "Unknown",
                "message": "Documento deve ter 11 dígitos (CPF) ou 14 dígitos (CNPJ)"
            }
    
    @staticmethod
    def _validate_cpf(cpf: str) -> Dict[str, Any]:
        """Valida CPF usando o algoritmo oficial"""
        # Verifica se todos os dígitos são iguais
        if len(set(cpf)) == 1:
            return {
                "success": True,
                "valid": False,
                "document": cpf,
                "formattedDocument": f"{cpf[:3]}.{cpf[3:6]}.{cpf[6:9]}-{cpf[9:]}",
                "type": "CPF",
                "message": "CPF inválido - todos os dígitos são iguais"
            }
        
        # Calcula o primeiro dígito verificador
        sum1 = sum(int(cpf[i]) * (10 - i) for i in range(9))
        digit1 = 11 - (sum1 % 11)
        if digit1 >= 10:
            digit1 = 0
        
        # Calcula o segundo dígito verificador
        sum2 = sum(int(cpf[i]) * (11 - i) for i in range(10))
        digit2 = 11 - (sum2 % 11)
        if digit2 >= 10:
            digit2 = 0
        
        # Verifica se os dígitos calculados conferem
        is_valid = int(cpf[9]) == digit1 and int(cpf[10]) == digit2
        
        return {
            "success": True,
            "valid": is_valid,
            "document": cpf,
            "formattedDocument": f"{cpf[:3]}.{cpf[3:6]}.{cpf[6:9]}-{cpf[9:]}",
            "type": "CPF",
            "message": "CPF válido" if is_valid else "CPF inválido"
        }
    
    @staticmethod
    def _validate_cnpj(cnpj: str) -> Dict[str, Any]:
        """Valida CNPJ usando o algoritmo oficial"""
        # Verifica se todos os dígitos são iguais
        if len(set(cnpj)) == 1:
            return {
                "success": True,
                "valid": False,
                "document": cnpj,
                "formattedDocument": f"{cnpj[:2]}.{cnpj[2:5]}.{cnpj[5:8]}/{cnpj[8:12]}-{cnpj[12:]}",
                "type": "CNPJ",
                "message": "CNPJ inválido - todos os dígitos são iguais"
            }
        
        # Pesos para cálculo do primeiro dígito
        weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        sum1 = sum(int(cnpj[i]) * weights1[i] for i in range(12))
        digit1 = 11 - (sum1 % 11)
        if digit1 >= 10:
            digit1 = 0
        
        # Pesos para cálculo do segundo dígito
        weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        sum2 = sum(int(cnpj[i]) * weights2[i] for i in range(13))
        digit2 = 11 - (sum2 % 11)
        if digit2 >= 10:
            digit2 = 0
        
        # Verifica se os dígitos calculados conferem
        is_valid = int(cnpj[12]) == digit1 and int(cnpj[13]) == digit2
        
        return {
            "success": True,
            "valid": is_valid,
            "document": cnpj,
            "formattedDocument": f"{cnpj[:2]}.{cnpj[2:5]}.{cnpj[5:8]}/{cnpj[8:12]}-{cnpj[12:]}",
            "type": "CNPJ",
            "message": "CNPJ válido" if is_valid else "CNPJ inválido"
        }

class PhoneValidator:
    # Mapeamento de códigos de área para regiões
    AREA_CODES = {
        "11": "São Paulo - SP", "12": "São José dos Campos - SP", "13": "Santos - SP",
        "14": "Bauru - SP", "15": "Sorocaba - SP", "16": "Ribeirão Preto - SP",
        "17": "São José do Rio Preto - SP", "18": "Presidente Prudente - SP", "19": "Campinas - SP",
        "21": "Rio de Janeiro - RJ", "22": "Campos dos Goytacazes - RJ", "24": "Volta Redonda - RJ",
        "27": "Vitória - ES", "28": "Cachoeiro de Itapemirim - ES",
        "31": "Belo Horizonte - MG", "32": "Juiz de Fora - MG", "33": "Governador Valadares - MG",
        "34": "Uberlândia - MG", "35": "Poços de Caldas - MG", "37": "Divinópolis - MG", "38": "Montes Claros - MG",
        "41": "Curitiba - PR", "42": "Ponta Grossa - PR", "43": "Londrina - PR",
        "44": "Maringá - PR", "45": "Foz do Iguaçu - PR", "46": "Francisco Beltrão - PR",
        "47": "Joinville - SC", "48": "Florianópolis - SC", "49": "Chapecó - SC",
        "51": "Porto Alegre - RS", "53": "Pelotas - RS", "54": "Caxias do Sul - RS", "55": "Santa Maria - RS",
        "61": "Brasília - DF", "62": "Goiânia - GO", "63": "Palmas - TO", "64": "Rio Verde - GO",
        "65": "Cuiabá - MT", "66": "Rondonópolis - MT", "67": "Campo Grande - MS",
        "68": "Rio Branco - AC", "69": "Porto Velho - RO",
        "71": "Salvador - BA", "73": "Itabuna - BA", "74": "Camaçari - BA", "75": "Feira de Santana - BA",
        "77": "Barreiras - BA", "79": "Aracaju - SE",
        "81": "Recife - PE", "82": "Maceió - AL", "83": "João Pessoa - PB",
        "84": "Natal - RN", "85": "Fortaleza - CE", "86": "Teresina - PI",
        "87": "Petrolina - PE", "88": "Juazeiro do Norte - CE", "89": "Picos - PI",
        "91": "Belém - PA", "92": "Manaus - AM", "93": "Santarém - PA",
        "94": "Marabá - PA", "95": "Boa Vista - RR", "96": "Macapá - AP", "97": "Coari - AM", "98": "São Luís - MA", "99": "Imperatriz - MA"
    }
    
    @staticmethod
    def validate_phone(phone: str, phone_type: str = "br") -> Dict[str, Any]:
        """Valida telefone brasileiro"""
        clean_phone = re.sub(r'[^\d]', '', phone)
        
        if phone_type == "br":
            return PhoneValidator._validate_brazilian_phone(clean_phone)
        else:
            return PhoneValidator._validate_international_phone(clean_phone)
    
    @staticmethod
    def _validate_brazilian_phone(phone: str) -> Dict[str, Any]:
        """Valida telefone brasileiro"""
        # Remove código do país se presente
        if phone.startswith('55') and len(phone) > 11:
            phone = phone[2:]
        
        if len(phone) == 10:  # Telefone fixo: (XX) XXXX-XXXX
            area_code = phone[:2]
            number = phone[2:]
            formatted = f"({area_code}) {number[:4]}-{number[4:]}"
            phone_type = "Fixo"
            carrier = "Telefonia fixa"
        elif len(phone) == 11:  # Celular: (XX) 9XXXX-XXXX
            area_code = phone[:2]
            number = phone[2:]
            if number.startswith('9'):
                formatted = f"({area_code}) {number[:5]}-{number[5:]}"
                phone_type = "Celular"
                carrier = "Telefonia móvel"
            else:
                return {
                    "success": True,
                    "valid": False,
                    "phone": phone,
                    "formattedPhone": phone,
                    "type": "Desconhecido",
                    "message": "Número de celular deve começar com 9"
                }
        elif len(phone) == 4 and phone.startswith('0800'):
            formatted = "0800"
            phone_type = "0800"
            area_code = None
            carrier = "Serviço gratuito"
        elif len(phone) == 4 and phone.startswith('4004'):
            formatted = "4004"
            phone_type = "4004"
            area_code = None
            carrier = "Serviço especial"
        else:
            return {
                "success": True,
                "valid": False,
                "phone": phone,
                "formattedPhone": phone,
                "type": "Desconhecido",
                "message": "Formato de telefone inválido"
            }
        
        area_name = PhoneValidator.AREA_CODES.get(area_code, "Região desconhecida") if area_code else None
        
        return {
            "success": True,
            "valid": True,
            "phone": phone,
            "formattedPhone": formatted,
            "type": phone_type,
            "areaCode": area_code,
            "areaName": area_name,
            "carrier": carrier,
            "message": f"Telefone {phone_type.lower()} válido"
        }
    
    @staticmethod
    def _validate_international_phone(phone: str) -> Dict[str, Any]:
        """Validação básica para telefone internacional"""
        if len(phone) >= 7 and len(phone) <= 15:
            return {
                "success": True,
                "valid": True,
                "phone": phone,
                "formattedPhone": f"+{phone}",
                "type": "Internacional",
                "message": "Formato internacional válido"
            }
        else:
            return {
                "success": True,
                "valid": False,
                "phone": phone,
                "formattedPhone": phone,
                "type": "Internacional",
                "message": "Formato internacional inválido"
            }

class CepValidator:
    @staticmethod
    def validate_cep(cep: str) -> Dict[str, Any]:
        """Valida CEP usando ViaCEP API"""
        clean_cep = re.sub(r'[^\d]', '', cep)
        
        if len(clean_cep) != 8:
            return {
                "success": True,
                "valid": False,
                "cep": clean_cep,
                "formattedCep": cep,
                "message": "CEP deve ter 8 dígitos"
            }
        
        formatted_cep = f"{clean_cep[:5]}-{clean_cep[5:]}"
        
        try:
            # Tenta ViaCEP primeiro
            response = requests.get(f"https://viacep.com.br/ws/{clean_cep}/json/", timeout=5)
            if response.status_code == 200:
                data = response.json()
                if 'erro' not in data:
                    return {
                        "success": True,
                        "valid": True,
                        "cep": clean_cep,
                        "formattedCep": formatted_cep,
                        "address": {
                            "street": data.get("logradouro", ""),
                            "neighborhood": data.get("bairro", ""),
                            "city": data.get("localidade", ""),
                            "state": data.get("uf", ""),
                            "ibge": data.get("ibge", "")
                        },
                        "message": "CEP encontrado"
                    }
        except:
            pass
        
        return {
            "success": True,
            "valid": False,
            "cep": clean_cep,
            "formattedCep": formatted_cep,
            "message": "CEP não encontrado"
        }

class EmailValidator:
    # Lista de domínios descartáveis mais comuns
    DISPOSABLE_DOMAINS = {
        "10minutemail.com", "guerrillamail.com", "mailinator.com", "temp-mail.org",
        "throwaway.email", "yopmail.com", "tempail.com", "maildrop.cc"
    }
    
    # Lista de emails baseados em função/papel
    ROLE_BASED_LOCALS = {
        "admin", "administrator", "postmaster", "hostmaster", "webmaster",
        "www", "uucp", "ftp", "usenet", "news", "noc", "security", "root",
        "info", "support", "help", "sales", "marketing", "abuse"
    }
    
    @staticmethod
    def validate_email(email: str) -> Dict[str, Any]:
        """Valida email com múltiplas verificações"""
        result = {
            "success": True,
            "valid": False,
            "email": email,
            "result": "invalid",
            "reason": "",
            "message": "",
            "checks": {
                "syntax": False,
                "domain": False,
                "mx": False,
                "smtp": False,
                "disposable": False,
                "roleBase": False,
                "catchAll": False
            }
        }
        
        # Validação de sintaxe básica
        email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        if not re.match(email_regex, email):
            result["reason"] = "syntax"
            result["message"] = "Formato de email inválido"
            return result
        
        result["checks"]["syntax"] = True
        
        # Separa local e domínio
        local, domain = email.rsplit('@', 1)
        
        # Verifica se é baseado em função
        if local.lower() in EmailValidator.ROLE_BASED_LOCALS:
            result["checks"]["roleBase"] = True
        
        # Verifica se é domínio descartável
        if domain.lower() in EmailValidator.DISPOSABLE_DOMAINS:
            result["checks"]["disposable"] = True
            result["reason"] = "disposable"
            result["message"] = "Email descartável detectado"
            return result
        
        # Verifica domínio
        try:
            socket.gethostbyname(domain)
            result["checks"]["domain"] = True
        except:
            result["reason"] = "domain"
            result["message"] = "Domínio não existe"
            return result
        
        # Verifica registros MX
        try:
            mx_records = dns.resolver.resolve(domain, 'MX')
            if mx_records:
                result["checks"]["mx"] = True
        except:
            result["reason"] = "mx"
            result["message"] = "Domínio não aceita emails"
            return result
        
        # Se chegou até aqui, o email é válido
        result["valid"] = True
        result["result"] = "valid"
        result["reason"] = "valid"
        result["message"] = "Email válido"
        
        return result

# Rotas da API
@app.route('/api/validate/cpf-cnpj', methods=['POST'])
def validate_cpf_cnpj():
    try:
        data = request.get_json()
        document = data.get('document', '')
        result = DocumentValidator.validate_cpf_cnpj(document)
        return jsonify(result)
    except Exception as e:
        return jsonify({
            "success": False,
            "valid": False,
            "document": "",
            "formattedDocument": "",
            "type": "Unknown",
            "message": "Erro interno do servidor"
        }), 500

@app.route('/api/validate/telefone', methods=['POST'])
def validate_phone():
    try:
        data = request.get_json()
        phone = data.get('phone', '')
        phone_type = data.get('type', 'br')
        result = PhoneValidator.validate_phone(phone, phone_type)
        return jsonify(result)
    except Exception as e:
        return jsonify({
            "success": False,
            "valid": False,
            "phone": "",
            "formattedPhone": "",
            "type": "Unknown",
            "message": "Erro interno do servidor"
        }), 500

@app.route('/api/validate/cep', methods=['POST'])
def validate_cep():
    try:
        data = request.get_json()
        cep = data.get('cep', '')
        result = CepValidator.validate_cep(cep)
        return jsonify(result)
    except Exception as e:
        return jsonify({
            "success": False,
            "valid": False,
            "cep": "",
            "formattedCep": "",
            "message": "Erro interno do servidor"
        }), 500

@app.route('/api/validate/email', methods=['POST'])
def validate_email():
    try:
        data = request.get_json()
        email = data.get('email', '')
        result = EmailValidator.validate_email(email)
        return jsonify(result)
    except Exception as e:
        return jsonify({
            "success": False,
            "valid": False,
            "email": "",
            "result": "unknown",
            "reason": "exception",
            "message": "Erro interno do servidor",
            "checks": {
                "syntax": False,
                "domain": False,
                "mx": False,
                "smtp": False,
                "disposable": False,
                "roleBase": False,
                "catchAll": False
            }
        }), 500

# Rota para servir o frontend
@app.route('/')
def serve_frontend():
    return app.send_static_file('index.html')

# Rota catch-all para SPA routing
@app.route('/<path:path>')
def serve_spa(path):
    # Para arquivos estáticos específicos
    if '.' in path:
        return app.send_static_file(path)
    # Para rotas do SPA, sempre retorna o index.html
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)