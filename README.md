# Vendo365 - Landing Page

Landing page para Vendo365: Tu tienda online + redes sociales automáticas por solo $49.500/mes.

## 🚀 Inicio Rápido

### Instalar dependencias
```bash
npm install
```

### Ejecutar en desarrollo
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Construir para producción
```bash
npm run build
```

### Exportar para Cloudflare Pages
```bash
npm run build
```

## 📁 Estructura del Proyecto

```
vendo365/
├── app/
│   ├── layout.tsx      # Layout principal con metadata SEO
│   ├── page.tsx        # Landing page principal
│   └── globals.css     # Estilos globales con Tailwind
├── next.config.js      # Configuración de Next.js
├── tailwind.config.ts  # Configuración de Tailwind CSS
└── package.json        # Dependencias y scripts
```

## 🛠️ Tecnologías

- **Next.js 14+** - Framework React con App Router
- **React 19** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Estilos utility-first
- **Lucide React** - Iconos

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 🎨 Características de la Landing

- ✅ Diseño minimalista y profesional
- ✅ Responsive mobile-first
- ✅ SEO optimizado
- ✅ Formulario de contacto funcional
- ✅ Pricing strategy clara
- ✅ Énfasis en automatización con IA
- ✅ Optimizado para conversión

## 🌐 Deployment en Cloudflare Pages

### Configuración Requerida

Cuando conectes tu repositorio a Cloudflare Pages, usa esta configuración:

- **Framework preset:** Next.js (Static HTML Export)
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Node version:** 22 (opcional, agregar como variable de entorno `NODE_VERSION=22`)

### Pasos para Deploy

1. Sube tu código a GitHub
2. Ve a Cloudflare Pages > Create a project
3. Conecta tu repositorio
4. Usa la configuración de arriba
5. Click "Save and Deploy"

Ver [CLOUDFLARE_DEPLOY.md](./CLOUDFLARE_DEPLOY.md) para instrucciones detalladas.

### Verificar Build Localmente

Antes de hacer deploy, prueba el build:

```bash
npm run build
```

Esto creará la carpeta `out/` con los archivos estáticos listos para deploy.

## 💰 Propuesta de Valor

**$49.500/mes** - Todo incluido:
- Tienda online personalizada
- Publicación diaria automática en Facebook e Instagram
- Pasarela de pagos (Nequi, Daviplata, tarjetas)
- Hosting incluido
- Sin permanencia

**Opcional:** Bot de WhatsApp con IA por +$80.000/mes
