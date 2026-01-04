# CampusLogix - Industry-Aligned Skill Development Platform

## Overview

CampusLogix is a B2B marketing website for a skill development company that partners with colleges and universities across India. The platform helps educational institutions transform their students into job-ready professionals through industry-aligned training programs. The site includes a lead generation system where institution representatives can schedule consultations, with form submissions stored in a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **Routing**: React Router DOM for client-side navigation
- **State Management**: React Query (@tanstack/react-query) for server state, React Context for UI state (LeadFormContext)
- **Styling**: Tailwind CSS with CSS variables for theming, class-variance-authority for component variants
- **UI Components**: Radix UI primitives wrapped with shadcn/ui component library
- **Path Aliases**: `@/` maps to `./src/` for clean imports

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript executed via tsx
- **API Pattern**: RESTful endpoints under `/api/` prefix
- **Development**: Frontend dev server proxies API requests to backend on port 3001

### Data Layer
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-kit for migrations
- **Schema Location**: `shared/schema.ts` contains table definitions and Zod validation schemas
- **Connection**: Uses `pg` package with connection pooling via `DATABASE_URL` environment variable

### Key Design Patterns
1. **Shared Schema**: Database schema and validation types are shared between frontend and backend via `shared/` directory
2. **Modal-based Lead Capture**: LeadFormModal component accessible globally through LeadFormContext
3. **Component Composition**: Layout components (Navbar, Footer) wrap page content in App.tsx
4. **Form Validation**: Zod schemas for both client and server-side validation

### Page Structure
- `/` - Home page with hero, features, and call-to-action sections
- `/courses` - Training program catalog
- `/testimonials` - Student and institution testimonials
- `/contact` - Contact form with consultation request submission

### API Endpoints
- `POST /api/consultation` - Submit a new consultation request (stores in database)
- `GET /api/consultations` - Retrieve all consultation requests
- `GET /api/consultations/export` - Export all consultation requests as CSV file

## External Dependencies

### Database
- **PostgreSQL**: Primary data store, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Schema management and query building with `drizzle-kit push` for schema sync

### UI/Component Libraries
- **Radix UI**: Headless component primitives (dialog, select, accordion, etc.)
- **shadcn/ui**: Pre-styled component wrappers configured via `components.json`
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel functionality
- **Vaul**: Drawer component
- **cmdk**: Command palette component

### Development Tools
- **Lovable Tagger**: Development plugin for component tagging (lovable.dev integration)
- **ESLint**: Code linting with TypeScript and React plugins
- **PostCSS/Autoprefixer**: CSS processing for Tailwind

### Fonts & Assets
- **Google Fonts**: Inter font family loaded via CSS import
- **Static Assets**: Images stored in `attached_assets/` directory with `@assets` path alias