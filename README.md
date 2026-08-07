# Pasitos y Saltos

Sitio web estático de la guardería infantil Pasitos y Saltos, preparado para publicarse en GitHub Pages.

## Vista local

No requiere compilación ni dependencias. Podés abrir `index.html` directamente o iniciar un servidor local:

```powershell
python -m http.server 8000
```

Luego visitá `http://localhost:8000`.

## Publicar en GitHub Pages

1. Subí estos archivos a la rama `main` del repositorio.
2. En GitHub, abrí **Settings → Pages**.
3. En **Build and deployment**, elegí **Deploy from a branch**.
4. Seleccioná la rama `main`, carpeta `/ (root)`, y guardá.

GitHub mostrará la URL pública cuando finalice el despliegue.

## Personalización pendiente

El formulario prepara el texto de la consulta y abre la aplicación de correo. Como el documento no aporta un contacto comercial confirmado, el destinatario queda vacío. Antes de publicar, agregá el correo después de `mailto:` en `assets/js/app.js`, o convertí la acción a WhatsApp cuando exista un número comercial.

## Estructura

- `index.html`: contenido y estructura principal.
- `assets/css/styles.css`: diseño responsive.
- `assets/js/app.js`: navegación, animaciones y formulario.
- `404.html`: página de error compatible con GitHub Pages.
- `.nojekyll`: evita procesamiento innecesario de Jekyll.
