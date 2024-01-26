
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';
import adapter from '@sveltejs/adapter-static';
import {svelte} from "@sveltejs/vite-plugin-svelte";



export default defineConfig({
	base: "/svelteportfolio/",
	plugins: [
		sveltekit(),
		svg({
			includePaths: ['./src/lib/graphics/'],
			svgoOptions: {
				multipass: true,
				plugins: ['preset-default']
			}
		})
	]
	
});
