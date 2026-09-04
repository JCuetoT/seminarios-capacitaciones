# Seminarios y Capacitaciones PTARM

Oferta de seminarios y capacitaciones especializadas en saneamiento y tratamiento de aguas.

## Estructura

```
/
├── index.html                          # Portada: oferta de seminarios (cards data-driven)
├── operacion-lagunas-estabilizacion/   # Propuesta: Operación de Lagunas de Estabilización
├── conductas-proambientales/           # Propuesta: De la Indiferencia a la Acción
├── ingenieria-del-compostaje/          # Propuesta: Ingeniería del Compostaje y NTC 5167
├── css/
│   └── main.css                        # Estilos compartidos (fonts, print)
├── js/
│   ├── main.js                         # Config de Tailwind (paletas) + init de Lucide (compartido)
│   └── seminarios.js                   # Catálogo de seminarios + render de tarjetas
└── assets/                             # Imágenes y recursos estáticos
```

## Agregar un seminario nuevo

1. Crear la carpeta `<slug-del-seminario>/` en la raíz con su `index.html` (propuesta detalle).
2. Agregar una entrada al array `seminarios` en `js/seminarios.js` con los datos de la card.
3. (Opcional) Incluir materiales académicos dentro de la carpeta del seminario.

## Stack

- Tailwind CSS v4 vía CDN (config en `js/main.js`)
- Iconos Lucide
- Vanilla JS, sin framework ni build

## Deploy

GitHub Pages sirve la rama `main` desde la raíz.