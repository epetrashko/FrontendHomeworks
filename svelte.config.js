import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const dev = process.env.NODE_ENV === 'development';

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
            		pages: "docs",
            		assets: "docs"
        	}),
		paths: {
      			base: dev ? '' : '/FrontendHomeworks',
    		},
		target: "#svelte"
	}
};

export default config;
