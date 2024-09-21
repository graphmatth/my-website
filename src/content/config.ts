import { z, defineCollection } from "astro:content";
const worksCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  works: worksCollection,
};
