# ASTRAEd - Sitio Web Institucional

Sitio web profesional para ASTRAEd (Astra Education Consulting), empresa especializada en consultoría estratégica y capacitación desde 2016.

## 🎨 Diseño

Inspirado en la estética de Harvard University:
- **Colores**: Crimson (#A51C30), Navy (#0C2340), Gold (#C99700)
- **Tipografía**: Playfair Display (títulos) + Inter (cuerpo)
- **Estilo**: Profesional, académico, sofisticado

## 🛠️ Stack Tecnológico

- **HTML5** - Estructura semántica
- **Tailwind CSS** (vía CDN) - Estilos responsive
- **JavaScript** (Vanilla) - Funcionalidad dinámica
- **Font Awesome 6** - Iconos
- **Google Fonts** - Tipografías personalizadas

## 📁 Estructura de Archivos

```
astraeducon.com/
├── index.html              # Página principal
├── servicios.html          # Catálogo de servicios
├──contacto.html           # Formulario de contacto
├── includes/
│   ├── header.html        # Componente header
│   └── footer.html        # Componente footer
├── js/
│   └── main.js            # JavaScript principal
├── images/                # Imágenes del sitio
│   ├── hero.jpg
│   ├── ambiente.jpg
│   ├── servicio1-6.jpg
│   ├── equipo.jpg
│   ├── cta.jpg
│   └── social1-6.jpg
└── README.md              # Este archivo
```

## 🚀 Instalación y Uso

### Opción 1: Servidor Local con Python
```bash
python -m http.server 8000
```
Luego abre: http://localhost:8000

### Opción 2: Servidor Local con PHP
```bash
php -S localhost:8000
```

### Opción 3: GitHub Pages
1. Sube los archivos a un repositorio de GitHub
2. Ve a Settings → Pages
3. Selecciona la rama `main` como fuente
4. El sitio estará disponible en `https://tu-usuario.github.io/tu-repo`

### Opción 4: Netlify/Vercel
Simplemente arrastra la carpeta del proyecto a Netlify o Vercel para deployment instantáneo.

## 🖼️ Imágenes

El sitio requiere 16 imágenes profesionales:
- **hero.jpg** - Imagen principal del hero (1920x1080)
- **ambiente.jpg** - Ambiente de trabajo profesional (800x600)
- **servicio1-6.jpg** - Imágenes de servicios (600x600 cada una)
- **equipo.jpg** - Foto del equipo (800x600)
- **cta.jpg** - Imagen de call-to-action (1920x600)
- **social1-6.jpg** - Contenido tipo Instagram (400x400 cada una)

**Actualmente**: El sitio usa placeholders. Reemplaza con tus imágenes reales.

## 🎯 Características

- ✅ Diseño responsive (mobile-first)
- ✅ Menú hamburguesa funcional en móvil
- ✅ Navegación sticky en página de servicios
- ✅ Animaciones suaves y efectos hover
- ✅ Formulario de contacto con validación
- ✅ Mapa de Google Maps integrado
- ✅ Compatible con GitHub Pages
- ✅ SEO-friendly con meta tags

## ⚙️ Personalización

### Cambiar colores
Edita las variables en el `tailwind.config` en cada archivo HTML:
```javascript
colors: {
    'crimson': '#TU_COLOR',
    'navy': '#TU_COLOR',
    'gold': '#TU_COLOR'
}
```

### Actualizar información de contacto
Edita `includes/footer.html` y `contacto.html`:
- Teléfono
- Email
- Dirección
- Redes sociales
- Horarios

### Configurar formulario
El formulario en `contacto.html` actualmente muestra una alerta. Para integrarlo:
1. Usa un servicio como **FormSpree**, **Netlify Forms**, o **EmailJS**
2. Modifica el handler en el script al final de `contacto.html`

## 📱 Navegadores Soportados

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)

## 📄 Licencia

© 2026 ASTRAEd - Astra Education Consulting. Todos los derechos reservados.

## 🤝 Contacto

- **Email**: contacto@astraed.com
- **Teléfono**: +595 XXX XXX XXX
- **Ubicación**: Asunción, Paraguay

---

**Desarrollado con** ❤️ **para ASTRAEd**
