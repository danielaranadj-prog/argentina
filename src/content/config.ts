import { defineCollection, z } from 'astro:content';

// 1. Colección existente: Destinos (con FAQs, Lead Magnet, Dashboard, Zonas y CTAs)
const destinosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    img: z.string(),
    desc: z.string(),
    historia: z.string(),
    
    // Validamos el array de secciones (iconos)
    secciones: z.array(z.object({
      icon: z.string(),
      label: z.string(),
      text: z.string(),
    })),
    
    // Validamos el array de tours (acepta null o undefined)
    tours: z.array(z.object({
      titulo: z.string(),
      precio: z.string(),
      duracion: z.string(),
      link: z.string(),
      imagen: z.string().optional(),
    })).nullable().optional().default([]),
    
    // FAQs para SEO (opcional)
    faqs: z.array(z.object({
      pregunta: z.string(),
      respuesta: z.string(),
    })).optional(),
    
    // Lead Magnet para captura de emails (opcional)
    leadMagnet: z.object({
      titulo: z.string(),
      descripcion: z.string(),
      archivo: z.string(),
      imagen: z.string().optional(),
    }).optional(),

    // ========== NUEVOS CAMPOS ==========
    
    // Dashboard de datos rápidos (opcional)
    dashboard: z.array(z.object({
      label: z.string(),
      value: z.string(),
      icon: z.string(),
    })).optional(),
    
    // Zonas recomendadas (opcional)
    zonas: z.array(z.object({
      nombre: z.string(),
      tipo: z.string(), // trendy, elegante, bohemio, moderno
      descripcion: z.string(),
    })).optional(),
    
    // CTAs de afiliados (opcional)
    ctas: z.array(z.object({
      titulo: z.string(),
      descripcion: z.string(),
      boton: z.string(),
      link: z.string(),
      color: z.string().optional().default('gold'), // emerald, blue, gold, purple
    })).optional(),
  }),
});

// 2. Nueva Colección: Blog
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