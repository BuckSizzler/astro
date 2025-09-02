// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://astonishing-haupia-82dc93.netlify.app/",
  integrations: [preact()]
});