# Seminarios y Capacitaciones PTARM

Oferta de seminarios y capacitaciones especializadas en saneamiento y tratamiento de aguas.

## Estructura

```
/
├── index.html                          # Oferta de seminarios (landing, cards data-driven)
├── seminarios/
│   └── operacion-lagunas-estabilizacion/
│       ├── index.html                  # Propuesta ejecutiva del seminario
│       └── materiales/                 # Material académico del seminario (PDF, guías)
├── css/
│   └── main.css                        # Estilos compartidos (fonts, print)
├── js/
│   ├── main.js                         # Config de Tailwind + init de Lucide (compartido)
│   └── seminarios.js                   # Catálogo de seminarios + render de tarjetas
└── assets/                             # Imágenes y recursos estáticos
```

## Agregar un seminario nuevo

1. Crear la carpeta `seminarios/<slug-del-seminario>/` con su `index.html` (propuesta detalle).
2. Agregar una entrada al array `seminarios` en `js/seminarios.js` con los datos de la card.
3. (Opcional) Incluir materiales académicos dentro de la carpeta del seminario.

## Stack

- Tailwind CSS v4 vía CDN (config en `js/main.js`)
- Iconos Lucide
- Vanilla JS, sin framework ni build

## Deploy

GitHub Pages sirve la rama `main` desde la raíz.