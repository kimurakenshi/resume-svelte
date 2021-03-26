const path = require('path');
const sveltePreprocess = require('svelte-preprocess');
const svelteWindiCSSPreprocess = require('svelte-windicss-preprocess');
const vercel = require('@sveltejs/adapter-vercel');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess.typescript(),
		svelteWindiCSSPreprocess.preprocess({
			config: 'tailwind.config.cjs',
			compile: false,
			prefix: 'windi-',
			globalPreflight: true,
			globalUtility: true
		})
	],
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			},
			resolve: {
				alias: {
					$components: path.resolve(__dirname, 'src/components')
				}
			}
		}
	}
};
