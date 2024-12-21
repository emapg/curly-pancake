import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import supabase from '@astrojs/supabase';

export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx(),
    sitemap(),
    supabase()
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});