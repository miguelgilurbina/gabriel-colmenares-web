# Gabriel Colmenares - Página Web Oficial

Página web para Gabriel Colmenares (@uncolmenares) - Comediante & Director Creativo

## 🎭 Cliente

- **Nombre:** Gabriel Colmenares
- **Instagram:** [@uncolmenares](https://instagram.com/uncolmenares)
- **Ubicación:** Santiago, Chile
- **Servicios:** Stand Up Comedy, Presentación Eventos, Dirección Creativa

## 🚀 Stack Técnico

- Next.js 15.4.3 (App Router)
- TypeScript
- Tailwind CSS v3
- Framer Motion
- Lucide React
- React Hook Form + Zod
- Nodemailer

## 🎯 Objetivos Principales

1. **Vender 180 entradas** para show diciembre 2024
2. **Hub central** para todos sus servicios
3. **Más bookings corporativos**
4. **Posicionamiento dirección creativa**

## 📋 Funcionalidades

### ✅ Implementadas

- Hero section con CTAs duales
- Sección Shows con integración Passline
- Servicios desplegables desde Shows
- Sección de contenido destacado (videos/podcasts)
- Contacto directo WhatsApp/Instagram
- Sistema de datos centralizado (template.json)
- Diseño responsive mobile-first
- Animaciones con Framer Motion
- SEO optimizado

### 🔄 En Desarrollo

- About page completa
- Instagram/Spotify feeds automáticos
- Sistema de calendario para bookings

## 🎨 Paleta de Colores

- **Gabriel Blue:** #1E3A8A (Azul profesional)
- **Gabriel Yellow:** #FCD34D (Amarillo vibrante)
- **Gabriel Dark:** #1F2937 (Gris oscuro para texto)
- **Gabriel Gray:** #6B7280 (Gris medio para texto secundario)

## 👨‍💻 Desarrollo

### Estructura del Proyecto

```
src/
├── app/              # Next.js app router
├── components/       # React components
├── data/            # template.json - datos centralizados
└── lib/             # TypeScript types
```

### Branch Strategy

- `main` - Código en producción
- `gabriel-customization` - Desarrollo activo

### Comandos

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Producción
npm start

# Linting
npm run lint
```

### Claude Code Setup

Este proyecto incluye configuración de Claude Code para desarrollo asistido por IA:

- **Custom Commands**: Slash commands para tareas comunes
  - `/review-changes` - Revisar cambios antes de commit
  - `/update-content` - Actualizar template.json
  - `/add-component` - Crear nuevos componentes
  - `/prepare-deploy` - Checklist de deployment
  - `/create-issue` - Crear GitHub issues

- **Context Sessions**: Mantener contexto entre sesiones de trabajo

- **GitHub Integration**: Templates de issues y workflows automáticos

Ver `.claude/README.md` para más detalles.

## 🚀 Deploy

- **Producción:** [URL por definir]
- **Staging:** [URL por definir]

---

**Desarrollado por:** [Miguel Gil Urbina](https://github.com/miguelgilurbina) | Tu Web en 7 Días
