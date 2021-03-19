// eslint-disable-next-line import/no-unresolved
import 'virtual:windi.css';
import HMR from '@roxi/routify/hmr';
import App from './App.svelte';

const app = HMR(App, { target: document.body });

export default app;
