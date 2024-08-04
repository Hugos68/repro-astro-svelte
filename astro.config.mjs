import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [
    svelte(), 
    react(), // Removing the `react` integration fixes the `.title` undefined error
    mdx()]
});