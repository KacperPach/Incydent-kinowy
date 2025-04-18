import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { FESTIVAL_NAMES } from "./consts";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    trailerLink: z.string().optional(),
    fesitvals: z.array(FESTIVAL_NAMES).optional(),
  }),
});

const news = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/news", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    trailerLink: z.string().optional(),
    fesitvals: z.array(FESTIVAL_NAMES).optional(),
  }),
});

export const collections = { blog, news };
