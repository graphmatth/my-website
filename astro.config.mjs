import { defineConfig } from "astro/config";
import mdx from '@astrojs/mdx';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'vitesse-light',
        dark: 'vesper'
      },
      defaultColor: false,
      langs: [],
      wrap: false,
      transformers: []
    }
  }
});