import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
export default {
  kit: {
    adapter: adapter({
      fallback: '404.html',
      strict: true
    }),
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
    }
  },
  preprocess: vitePreprocess()
};
