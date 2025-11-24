# Tabernáculo de Adoración - Sitio Web

Sitio web oficial del Tabernáculo de Adoración, una casa de oración ubicada en Santa Fe, Argentina. Cultivamos la gloria celestial por medio de adoración e intercesión continua, impactando desde Santa Fe hacia las naciones.

## 📋 Descripción

Sitio web estático desarrollado con HTML5, CSS3 y JavaScript vanilla. Arquitectura modular que facilita el mantenimiento y la escalabilidad del proyecto.

## 🏗️ Estructura del Proyecto

```
TDA/
├── components/          # Componentes HTML reutilizables
│   ├── header.html
│   └── footer.html
├── css/
│   ├── main.css        # Archivo principal (importa módulos)
│   └── modules/        # Módulos CSS organizados
│       ├── _variables.css
│       ├── _base.css
│       ├── _layout.css
│       ├── _components.css
│       ├── _sections.css
│       └── _responsive.css
├── js/
│   ├── dataconfig.js   # Datos centralizados (ministerios y eventos)
│   └── modules/        # Módulos JavaScript
│       ├── backgrounds.js
│       ├── header.js
│       ├── events.js
│       ├── forms.js
│       └── ministries.js
├── Imagenes/          # Recursos de imágenes
├── index.html         # Página principal
├── nosotros.html      # Página "Nosotros"
├── ministerios.html   # Página "Ministerios"
└── contacto.html      # Página "Contacto"
```

## 🛠️ Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Módulos CSS, Variables CSS, Flexbox, Grid
- **JavaScript**: Vanilla JS (ES5), módulos IIFE
- **Font Awesome**: Iconos
- **Google Fonts**: Tipografías (Montserrat, Playfair Display, Dancing Script)

## 📝 Actualización de Contenido

### Ministerios y Eventos

Los datos se centralizan en `js/dataconfig.js`:


### Estilos

Los estilos están organizados en módulos dentro de `css/modules/`:
- `_variables.css`: Colores, tipografías, espaciado
- `_base.css`: Reset y estilos base
- `_layout.css`: Header, footer, hero
- `_components.css`: Botones, cards, formularios
- `_sections.css`: Secciones específicas de página
- `_responsive.css`: Media queries

## 📱 Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Menú móvil funcional
- ✅ Formulario de contacto con validación
- ✅ Carga dinámica de ministerios y eventos
- ✅ Imágenes de fondo dinámicas
- ✅ SEO optimizado (meta tags, Open Graph)
- ✅ Arquitectura modular


## 📄 Páginas

- **Inicio** (`index.html`): Página principal con información general
- **Nosotros** (`nosotros.html`): Historia, misión, visión y valores
- **Ministerios** (`ministerios.html`): Información sobre los ministerios
- **Contacto** (`contacto.html`): Formulario de contacto e información


## 📌 Notas Importantes

- El formulario de contacto actualmente simula el envío. Para producción, integrar con un servicio real (Formspree, EmailJS, o backend propio).
- Las imágenes deben optimizarse antes de producción (WebP, compresión).
- Actualizar datos de contacto (email, teléfono) en todos los archivos HTML antes de publicar.

## 📜 Licencia

© Tabernáculo de Adoración. Todos los derechos reservados.

---

**Desarrollado con ❤️ para el Tabernáculo de Adoración**

