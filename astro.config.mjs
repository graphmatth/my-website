import { defineConfig } from "astro/config";
import mdx from '@astrojs/mdx';
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://matthieucaron.fr',
  integrations: [mdx(), react(), sitemap()],
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