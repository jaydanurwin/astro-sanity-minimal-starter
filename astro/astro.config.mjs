import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://astro-sanity-minimal-starter.netlify.app/', // Your public domain, e.g.: https://my-site.dev/
  integrations: [sitemap()]
});