const autoPreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: autoPreprocess({
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
    defaults: {
      script: 'typescript',
    },
  }),
};
