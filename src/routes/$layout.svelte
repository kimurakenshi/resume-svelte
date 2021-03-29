<script lang="ts">
	import '../core/styles/global.scss';
	import Footer from '$core/components/Footer.svelte';
	import Header from '$core/components/Header.svelte';
	import { onMount } from 'svelte';
	import { theme } from '$core/theme';

	// @todo: if this run for every page I should remove it from here.
	onMount(() => theme.initializeTheme());
</script>

<div class="h-screen font-default">
	<Header />

	<!--	<Nav />-->
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
	</nav>

	<slot />

	<Footer />
</div>
