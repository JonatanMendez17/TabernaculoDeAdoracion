# Estructura Modular del Proyecto

Este proyecto ha sido modularizado para mejorar la organización, mantenibilidad y escalabilidad del código.

## 📁 Estructura de Carpetas

```
TDA/
├── components/          # Componentes HTML reutilizables
│   ├── header.html
│   └── footer.html
├── css/
│   ├── main.css        # Archivo principal que importa todos los módulos
│   ├── modules/        # Módulos CSS organizados
│   │   ├── _variables.css    # Variables CSS (colores, tipografías, espaciado)
│   │   ├── _base.css         # Reset y estilos base
│   │   ├── _layout.css       # Layout (header, footer, hero)
│   │   ├── _components.css   # Componentes reutilizables (botones, cards, forms)
│   │   ├── _sections.css    # Secciones de página (about, construction, events, etc.)
│   │   └── _responsive.css  # Media queries y estilos responsive
│   └── [todos los estilos están en modules/]
├── js/
│   ├── main.js         # Archivo principal (placeholder)
│   ├── modules/        # Módulos JavaScript organizados
│   │   ├── backgrounds.js   # Aplicar imágenes de fondo desde data-bg
│   │   ├── header.js        # Funcionalidad del header (menú móvil)
│   │   ├── events.js        # Carga dinámica de eventos
│   │   ├── forms.js         # Manejo de formularios
│   │   └── components.js    # Carga dinámica de componentes HTML
│   └── [todos los scripts están en modules/]
└── [páginas HTML]
```

## 🎨 Módulos CSS

### `_variables.css`
Define todas las variables CSS reutilizables:
- Colores (accent, accent-dark, muted, text)
- Tipografías (primary, heading, script)
- Espaciado (xs, sm, md, lg, xl, xxl)
- Breakpoints

### `_base.css`
Estilos base y reset:
- Reset CSS básico
- Estilos globales del body
- Utilidades básicas (.container, .center)

### `_layout.css`
Componentes de layout:
- Header y navegación
- Hero section
- Footer

### `_components.css`
Componentes reutilizables:
- Botones (btn, btn-read-more, btn-construction, btn-donate, btn-contact)
- Cards
- Video player
- Formularios

### `_sections.css`
Secciones específicas de página:
- About
- Construction CTA
- Events
- Ministries
- Donate CTA
- Contact
- Nosotros (Historia, Misión/Visión, Valores, etc.)

### `_responsive.css`
Todas las media queries organizadas por breakpoint:
- 1200px (Large Desktop)
- 1024px (Desktop)
- 900px (Tablet Landscape)
- 768px (Tablet)
- 860px (Mobile Landscape)
- 480px (Small Mobile)

## 📜 Módulos JavaScript

### `backgrounds.js`
Aplica imágenes de fondo desde atributos `data-bg` y `data-gradient`.

### `header.js`
Maneja la funcionalidad del header:
- Toggle del menú móvil
- Cierre automático al hacer clic fuera
- Cierre al hacer clic en un enlace

### `events.js`
Carga dinámicamente los eventos en la página de inicio:
- Define el array `eventsData` con los eventos
- Renderiza los eventos en el elemento `#eventsList`

### `forms.js`
Maneja el formulario de contacto:
- Validación de campos
- Validación de email
- Mensajes de éxito/error

### `ministries.js`
Carga dinámicamente los ministerios:
- Define el array `ministriesData` con los ministerios
- Renderiza ministerios en `index.html` (versión simple)
- Renderiza ministerios en `ministerios.html` (versión detallada)

## 🔧 Uso

### En las páginas HTML

**CSS:**
```html
<link rel="stylesheet" href="css/main.css">
```

**JavaScript:**
```html
<!-- Módulos comunes (todas las páginas) -->
<script src="js/modules/backgrounds.js"></script>
<script src="js/modules/header.js"></script>

<!-- Módulos específicos por página -->
<script src="js/modules/events.js"></script>      <!-- Solo en index.html -->
<script src="js/modules/ministries.js"></script>  <!-- Solo en index.html y ministerios.html -->
<script src="js/modules/forms.js"></script>       <!-- Solo en contacto.html -->
```

## ✨ Ventajas de la Modularización

1. **Organización**: Código separado por responsabilidades
2. **Mantenibilidad**: Fácil encontrar y modificar código específico
3. **Reutilización**: Componentes y módulos reutilizables
4. **Escalabilidad**: Fácil agregar nuevos módulos
5. **Performance**: Carga solo lo necesario
6. **Colaboración**: Múltiples desarrolladores pueden trabajar en paralelo

## 📝 Notas

- **Optimización:** Todos los archivos legacy han sido eliminados
- Los módulos JavaScript son auto-inicializables (IIFE)
- Los módulos CSS usan `@import` en `main.css`
- Cada página carga solo los módulos JavaScript necesarios
- Los estilos de la página "Nosotros" están integrados en los módulos CSS

## 🚀 Próximos Pasos (Opcional)

1. Implementar un sistema de build (Webpack, Vite, etc.)
2. Minificar y combinar archivos CSS/JS en producción
3. Usar componentes HTML dinámicos en todas las páginas
4. Agregar más módulos según necesidad (animations.js, analytics.js, etc.)

