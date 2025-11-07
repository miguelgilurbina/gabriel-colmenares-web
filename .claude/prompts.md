# Gabriel Colmenares Web - Project Context

## Project Overview
This is a Next.js website for Gabriel Colmenares (@uncolmenares), a Venezuelan comedian and creative director based in Santiago, Chile. The site showcases his comedy shows, creative services, and featured content.

## Tech Stack
- **Framework**: Next.js 15.4.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form + Zod
- **Email**: Nodemailer

## Project Structure
```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Main homepage
│   ├── about/             # About page
│   └── api/contact/       # Contact API endpoint
├── components/            # React components
│   ├── Hero.tsx          # Hero section
│   ├── Shows.tsx         # Shows section with Passline integration
│   ├── Services.tsx      # Services (collapsible from Shows)
│   ├── Contact.tsx       # Contact with featured content
│   ├── Header.tsx        # Navigation header
│   └── Footer.tsx        # Footer
├── data/
│   └── template.json     # Central data source for all content
└── lib/
    └── types.ts          # TypeScript interfaces
```

## Key Features
1. **Hero Section**: Brand introduction with dual CTAs
2. **Shows Section**: Displays upcoming shows with Passline ticket links
3. **Contact Section**:
   - Featured content (short video + podcast episode)
   - Social media links (Instagram)
4. **Services**: Collapsible section triggered from Shows component
5. **Responsive Design**: Mobile-first approach

## Data Management
All content is centralized in `src/data/template.json` with TypeScript interfaces in `src/lib/types.ts`. This makes content updates easy without touching component code.

## Current Branch Strategy
- `main`: Production-ready code
- `gabriel-customization`: Active development branch for client customizations

## Important Notes
- Portfolio component exists but is currently commented out
- Services component is integrated into Shows as a collapsible section
- All external links open in new tabs with proper rel attributes
- WhatsApp integration throughout for direct communication

## Client Information
- **Client**: Gabriel Colmenares
- **Brand**: @uncolmenares
- **Location**: Santiago, Chile
- **Services**: Stand-up comedy, event hosting, creative direction, podcast
- **WhatsApp**: +56932323094

## Development Workflow
1. Make changes in `gabriel-customization` branch
2. Test locally with `npm run dev`
3. Build verification with `npm run build`
4. Commit with descriptive messages
5. Push to remote for client review
