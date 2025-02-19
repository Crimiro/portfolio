// @ts-check
import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import dotenv from 'dotenv';

dotenv.config();

// https://astro.build/config
export default defineConfig({
  integrations: [image()],
});
