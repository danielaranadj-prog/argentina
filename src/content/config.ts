import { defineCollection, z } from 'astro:content';

// 1. Colección: Destinos (Completa con todas las secciones)
const destinosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    img: z.string(),
    desc: z.string(),
    historia: z.string(),

    // Dashboard de datos rápidos
    dashboard: z.array(z.object({
      label: z.string(),
      value: z.string(),
      icon: z.string(),
    })).optional(),

    // Secciones básicas (iconos)
    secciones: z.array(z.object({
      icon: z.string(),
      label: z.string(),
      text: z.string(),
    })),

    // ========== NUEVO: QUÉ HACER ==========
    actividades: z.array(z.object({
      nombre: z.string(),
      icono: z.string(),
      descripcion: z.string(),
      link: z.string().optional(),
    })).optional(),

    // ========== NUEVO: QUÉ VISITAR ==========
    atracciones: z.array(z.object({
      nombre: z.string(),
      zona: z.string(),
      descripcion: z.string(),
      imagen: z.string().optional(),
      gratis: z.boolean().optional(),
      precio: z.string().optional(),
      link: z.string().optional(),
    })).optional(),

    // ========== NUEVO: BARRIOS ==========
    barrios: z.array(z.object({
      nombre: z.string(),
      tipo: z.string(),
      descripcion: z.string(),
      imperdible: z.string(),
      imagen: z.string().optional(),
    })).optional(),

    // ========== NUEVO: TRANSPORTE ==========
    transporte: z.object({
      aeropuerto: z.object({
        nombre: z.string(),
        distancia: z.string(),
        opciones: z.array(z.object({
          metodo: z.string(),
          tiempo: z.string(),
          precio: z.string(),
          link: z.string().optional(),
        })),
      }),
    }).optional(),

    // ========== NUEVO: ESCAPADAS ==========
    escapadas: z.array(z.object({
      nombre: z.string(),
      distancia: z.string(),
      tiempo: z.string(),
      descripcion: z.string(),
      imagen: z.string().optional(),
      link: z.string().optional(),
    })).optional(),

    // ========== NUEVO: GASTRONOMÍA ==========
    gastronomia: z.array(z.object({
      categoria: z.string(),
      lugares: z.array(z.object({
        nombre: z.string(),
        zona: z.string(),
        precio: z.string(),
        link: z.string().optional(),
      })),
    })).optional(),

    // ========== NUEVO: MAPA ==========
    mapa: z.object({
      centro: z.string(),
      zoom: z.number(),
    }).optional(),

    // Zonas recomendadas (existente)
    zonas: z.array(z.object({
      nombre: z.string(),
      tipo: z.string(),
      descripcion: z.string(),
    })).optional(),

    // CTAs de afiliados (existente)
    ctas: z.array(z.object({
      titulo: z.string(),
      descripcion: z.string(),
      boton: z.string(),
      link: z.string(),
      color: z.string().optional().default('gold'),
    })).optional(),

    // Tours (existente)
    tours: z.array(z.object({
      titulo: z.string(),
      precio: z.string(),
      duracion: z.string(),
      link: z.string(),
      imagen: z.string().optional(),
    })).nullable().optional().default([]),

    // FAQs (existente)
    faqs: z.array(z.object({
      pregunta: z.string(),
      respuesta: z.string(),
    })).optional(),

    // Lead Magnet (existente)
    leadMagnet: z.object({
      titulo: z.string(),
      descripcion: z.string(),
      archivo: z.string(),
      imagen: z.string().optional(),
    }).optional(),
  }),
});

// 2. Colección: Blog
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string().max(160, "La descripción debe ser corta para SEO"),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    author: z.string().default('Instante Trips Team'),
    tags: z.array(z.string()),
    lang: z.enum(['es', 'en']),
    isSecurityAlert: z.boolean().default(false).optional(),
  }),
});

// 3. Exportamos ambas colecciones
export const collections = {
  'destinos': destinosCollection,
  'blog': blogCollection,
};