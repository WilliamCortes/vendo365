# Vendo365 - Cloudflare Pages Deployment Guide

## Configuración en Cloudflare Pages

Cuando conectes tu repositorio a Cloudflare Pages, usa esta configuración:

### Build Settings

**Framework preset:** Next.js (Static HTML Export)

**Build command:**
```
npm run build
```

**Build output directory:**
```
out
```

**Root directory:** (dejar en blanco o `/`)

**Environment variables:** Ninguna requerida por ahora

### Node.js Version

Si necesitas especificar la versión de Node.js, agrega esta variable de entorno:
- `NODE_VERSION` = `22`

## Pasos para Deploy

1. **Sube tu código a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Vendo365 landing page"
   git branch -M main
   git remote add origin <tu-repo-url>
   git push -u origin main
   ```

2. **Conecta a Cloudflare Pages**
   - Ve a Cloudflare Dashboard
   - Pages > Create a project
   - Connect to Git
   - Selecciona tu repositorio

3. **Configura el build**
   - Framework preset: Next.js (Static HTML Export)
   - Build command: `npm run build`
   - Build output directory: `out`

4. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare construirá y desplegará automáticamente

## Verificar Build Localmente

Antes de hacer deploy, verifica que el build funcione:

```bash
npm run build
```

Esto creará la carpeta `out/` con todos los archivos estáticos.

## Custom Domain

Una vez desplegado, puedes configurar tu dominio personalizado:
1. Pages > tu-proyecto > Custom domains
2. Agrega `vendo365.com` o el dominio que prefieras
3. Sigue las instrucciones para configurar DNS

## Troubleshooting

### Error: "Missing entry-point"
- Asegúrate de que `next.config.js` tenga `output: 'export'`
- Verifica que el build command sea `npm run build`
- El output directory debe ser `out`

### Build falla
- Revisa que todas las dependencias estén en `package.json`
- Verifica que no haya errores de TypeScript
- Ejecuta `npm run build` localmente primero

### Imágenes no cargan
- Asegúrate de que `images.unoptimized: true` esté en `next.config.js`
- Usa rutas absolutas para imágenes

## Actualizaciones Automáticas

Cada vez que hagas push a tu rama principal, Cloudflare Pages:
1. Detectará el cambio
2. Ejecutará el build automáticamente
3. Desplegará la nueva versión

No necesitas hacer nada manual después del setup inicial.
