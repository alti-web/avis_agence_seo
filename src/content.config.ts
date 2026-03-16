import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const agences = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/agences' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    rank: z.number(),
    rating: z.number(),
    website: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    shortDescription: z.string(),
    city: z.string(),
    founded: z.string(),
    teamSize: z.string(),
    priceRange: z.string(),
    tags: z.array(z.string()),
    services: z.array(z.string()),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    targetAudience: z.string(),
    verdict: z.string(),
    alternatives: z.array(z.string()),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    date: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { agences, blog };
