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

El contenido sigue el documento del proyecto de egreso (misión, servicios, rutina, cuotas, beneficios, localización e historia de la Casa del Niño). El logo de `assets/img/` se extrajo de ese documento.

- **Contacto:** el documento no incluye un correo ni un teléfono comercial, así que el formulario abre la aplicación de correo sin destinatario. Agregá el correo después de `mailto:` en `assets/js/app.js`, o cambiá la acción a WhatsApp cuando exista un número.
- **Días de atención:** el documento indica el horario (5:30 a 24:00) pero no los días. Si corresponde, agregalos en la sección de horarios.

## Estructura

- `index.html`: contenido y estructura principal.
- `assets/css/styles.css`: diseño responsive.
- `assets/js/app.js`: navegación, animaciones y formulario.
- `assets/img/`: logo y favicon.
- `404.html`: página de error compatible con GitHub Pages.
- `.nojekyll`: evita procesamiento innecesario de Jekyll.
