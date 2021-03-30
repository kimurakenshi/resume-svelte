<script lang="ts">
	import '../core/styles/global.scss';
	import Footer from '$core/components/Footer.svelte';
	import Header from '$core/components/Header.svelte';
	import { onMount } from 'svelte';
	import { theme } from '$core/theme';
	import Nav from '$core/components/Nav/Nav.svelte';

	onMount(() => theme.initializeTheme());
</script>

<div class="h-screen font-default">
	<Header />

	<Nav />

	<slot />

	<Footer />
</div>
