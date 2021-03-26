<script lang="ts">
	/*
    @todo: is this the right way of including global styles? This layout is being shared between pages
    so hopefully it doesn't load the styles multiple times
  */
	import '../core/styles/globals.scss';
	import Footer from '$core/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { theme } from '$core/theme';

	// @todo: if this run for every page I should remove it from here.
	onMount(() => theme.initializeTheme());
</script>

<div class="h-screen font-default">
	<!--	<Header />-->

	<!--	<Nav />-->
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
	</nav>

	<slot />

	<Footer />
</div>
