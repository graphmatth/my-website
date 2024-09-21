import { defineConfig } from "astro/config";
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],

  markdown: {
    shikiConfig: {
      themes: {
        light: 'vitesse-light',
        dark: 'vesper',
      },
      defaultColor: false,
      langs: [],
      wrap: false,
      transformers: [],
    },
  },
});
