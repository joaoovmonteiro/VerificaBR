# ValidaBR - Brazilian Document Validation Platform

## Overview

ValidaBR is a comprehensive web application that provides professional validation tools for Brazilian documents and contact information. The platform offers real-time validation for CPF, CNPJ, phone numbers, postal codes (CEP), and email addresses. Built as a single-page application, it features a clean, responsive interface with stateless validation operations that don't require persistent data storage.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Backend Architecture - 100% Python

**Flask API Server**: The backend is now a complete Python Flask application with all validation logic implemented in pure Python. The server provides RESTful endpoints for each document type with proper CORS handling and error management.

**Python Validation Classes**: Business logic is organized in Python classes:
- `DocumentValidator`: CPF/CNPJ validation using official Brazilian algorithms
- `PhoneValidator`: Brazilian phone number validation with carrier detection
- `CepValidator`: CEP validation with ViaCEP API integration  
- `EmailValidator`: Advanced email validation with DNS/MX verification

**API Endpoints**: All validation endpoints migrated to Python Flask:
- `/api/validate/cpf-cnpj` - Document validation
- `/api/validate/telefone` - Phone validation
- `/api/validate/cep` - Postal code validation
- `/api/validate/email` - Email validation

**Static File Serving**: Flask serves the built React frontend as static files, maintaining the exact same user interface while running on a pure Python backend.

### Frontend Architecture

**React Build Integration**: The existing React frontend is built and served as static files by the Flask application, maintaining the exact same user experience while simplifying the development stack to focus on Python.

**Maintained Interface**: All UI components, styling, and user interactions remain identical to ensure a consistent user experience during the Python migration.

### Data Storage Solutions

**Stateless Architecture**: The application operates without persistent data storage, as all validation operations are stateless and computed in real-time. An in-memory storage interface is defined but not utilized, maintaining clean architecture principles.

**Session Management**: Basic session handling is configured through connect-pg-simple, though current validation operations don't require user sessions or persistent state.

### Authentication and Authorization

**No Authentication Required**: The validation platform operates as a public service without user authentication. All validation endpoints are publicly accessible, aligning with the tool's purpose as a free validation service.

### Validation Logic Implementation

**CPF/CNPJ Validation**: Implements official Brazilian tax document validation algorithms using digit verification formulas. Handles both individual (CPF) and corporate (CNPJ) documents with proper formatting and invalid sequence detection.

**Phone Validation**: Supports Brazilian phone number validation with area code verification, carrier detection, and formatting. Includes support for mobile, landline, and special service numbers.

**CEP Validation**: Integrates with external postal code APIs (Correios and ViaCEP) to provide address lookup functionality with comprehensive location data including street, neighborhood, city, and state information.

**Email Validation**: Performs multi-layer email validation including syntax checking, domain validation, MX record verification, disposable email detection, and role-based email identification.

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework for building the user interface
- **Express.js**: Backend web framework for API server
- **TypeScript**: Type-safe development across frontend and backend
- **Node.js**: Runtime environment for the backend server

### Database and ORM
- **Drizzle ORM**: Type-safe SQL query builder and ORM
- **PostgreSQL**: Configured as the primary database (via @neondatabase/serverless)
- **Neon Database**: Serverless PostgreSQL hosting service

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Low-level UI primitives for accessibility and customization
- **Lucide React**: Icon library for consistent iconography
- **Font Awesome**: Icon library for additional visual elements

### State Management and API
- **TanStack Query**: Server state management and caching
- **Wouter**: Lightweight client-side routing
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation for API requests and responses

### Development and Build Tools
- **Vite**: Frontend build tool and development server
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: CSS vendor prefixing

### External APIs and Services
- **ViaCEP API**: Brazilian postal code lookup service
- **Correios API**: Official Brazilian postal service API
- **DNS Resolution Services**: For email domain and MX record validation

### Development and Runtime
- **tsx**: TypeScript execution environment for development
- **nanoid**: Unique identifier generation
- **date-fns**: Date utility library for formatting and manipulation

The application is designed to be deployed on platforms like Replit with environment variable configuration for database connections and external API integrations.

## Recent Changes

### Latest Modifications with Dates

**Janeiro 2025 - Implementação de Rotas Individuais e SEO**
- Criado rotas específicas para cada validador (/cpf-cnpj, /telefone, /cep, /email)
- Implementado menu dropdown no header com navegação para cada ferramenta
- Adicionado páginas individuais com conteúdo SEO otimizado para cada validador
- Criado seção "Sobre" expansiva na home page com detalhes técnicos
- Adicionado seção de contato completa
- Implementado menu mobile responsivo
- Melhorado meta tags para SEO (title e description)
- Atualizado componentes para usar navegação por rotas ao invés de estado local

### Architecture Updates

**Multi-Route System**: Transformado de single-page application para multi-route system com:
- Rotas dedicadas para cada validador permitindo acesso direto via URL
- Melhor indexação pelos motores de busca
- URLs amigáveis para compartilhamento
- Navegação intuitiva através de dropdown menu

**SEO Optimization**: Cada página de validador contém:
- Conteúdo detalhado sobre o funcionamento da validação específica
- Meta tags otimizadas para cada ferramenta
- Estrutura semântica melhorada
- Informações técnicas e educativas

**Enhanced User Experience**:
- Menu dropdown responsivo com ícones
- Seções informativas expandidas
- Placeholders para monetização com AdSense
- Design mobile-first mantido