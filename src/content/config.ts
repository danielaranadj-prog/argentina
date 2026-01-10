// src/content/config.ts
import { defineCollection, z } from 'astro:content';

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
    // Validamos el array de tours (nuevo)
    tours: z.array(z.object({
      titulo: z.string(),
      precio: z.string(),
      duracion: z.string(),
      link: z.string(),
      imagen: z.string().optional(), // Opcional por si alguno no tiene foto
    })).optional(), // Opcional por si un destino aun no tiene tours
  }),
});

export const collections = {
  'destinos': destinosCollection,
};