/*
This configuration doesn't provide any type-aware linting rules due to a limitation of `eslint-plugin-svelte3`
but avoid getting errors in svelte components due to typescript syntax (`svelte-check` is taking care of typescript error).
*/
module.exports = {
  root: true,
  extends: '@sveltejs',
  parserOptions: {
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['svelte3', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
  },
  settings: {
    'svelte3/typescript': require('typescript'), // pass the TypeScript package to the Svelte plugin
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
