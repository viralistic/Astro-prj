// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({});

import { defineConfig } from 'astro/config'
import fulldev from 'fulldev-ui/integration'

export default defineConfig({
  integrations: [fulldev()],
})