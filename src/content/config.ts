import { defineCollection, z } from 'astro:content';

// 1. Colección existente: Destinos (con FAQs y Lead Magnet opcionales)
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
  }),
});

// 2. Nueva Colección: Blog (Aquí configuramos tus requisitos)
const blogCollection = defineCollection({
  type: 'content', // Usamos archivos Markdown (.md)
  schema: z.object({
    title: z.string(),
    pubDate: z.date(), // Importante para ordenar por fecha
    description: z.string().max(160, "La descripción debe ser corta para SEO"),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    author: z.string().default('Instante Trips Team'), // Cumple con E-E-A-T (Firma de autor)
    tags: z.array(z.string()),
    lang: z.enum(['es', 'en']), // Preparamos para inglés/español
    isSecurityAlert: z.boolean().default(false).optional(), // Si es true, activará la alerta visual
  }),
});

// 3. Exportamos ambas colecciones
export const collections = {
  'destinos': destinosCollection,
  'blog': blogCollection,
};