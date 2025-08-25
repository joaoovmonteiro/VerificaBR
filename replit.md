# ValidaBR - Brazilian Document Validation Platform

## Overview

ValidaBR is a comprehensive web application that provides professional validation tools for Brazilian documents and contact information. The platform offers real-time validation for CPF, CNPJ, phone numbers, postal codes (CEP), and email addresses. Built as a single-page application, it features a clean, responsive interface with stateless validation operations that don't require persistent data storage.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**React Single-Page Application**: The frontend is built using React 18 with TypeScript, utilizing a modern component-based architecture. The application uses Wouter for lightweight client-side routing and TanStack Query for server state management and caching.

**Component Structure**: The UI follows a modular design with shadcn/ui components providing a consistent design system. Components are organized into layout components (Header, Footer), validation tools (CPF/CNPJ, Phone, CEP, Email validators), and reusable UI components. The application uses a card-based interface where users can select validation tools from a main dashboard.

**Styling System**: Tailwind CSS provides utility-first styling with a custom configuration supporting dark mode and CSS variables for theming. The design system uses a "new-york" style from shadcn/ui with neutral base colors and custom color schemes for different validation tools.

**State Management**: React hooks manage local component state, while TanStack Query handles server state, caching, and API interactions. The validation operations are stateless, with results displayed immediately after API responses.

### Backend Architecture

**Express.js API Server**: The backend is a REST API built with Express.js and TypeScript, following a clean separation of concerns. The server provides validation endpoints for each document type and handles CORS, request logging, and error handling middleware.

**Service Layer Pattern**: Business logic is encapsulated in service classes (DocumentValidator, PhoneValidator, CepValidator, EmailValidator) that contain the validation algorithms. This separation allows for easy testing and maintenance of validation logic.

**Request/Response Validation**: Zod schemas define and validate API request and response structures, ensuring type safety and proper data validation across the client-server boundary.

**Development Setup**: The application uses Vite for development with hot module replacement, and esbuild for production builds. Development and production environments are handled through environment-specific configurations.

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