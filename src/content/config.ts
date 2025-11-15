import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Richard Jeans'),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    keywords: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

const publicationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('Richard Jeans'),
  }),
});

export const collections = {
  blog: blogCollection,
  publications: publicationsCollection,
};