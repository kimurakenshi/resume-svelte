<script lang="ts">
	/*
    @todo: is this the right way of including global styles? This layout is being shared between pages
    so hopefully it doesn't load the styles multiple times
  */
	import '../core/styles/globals.scss';
	import Footer from '$core/components/Footer.svelte';
</script>

<div class="h-screen font-default">
	<!--	<Header />-->

	<!--	<Nav />-->

	<slot />

	<Footer />
</div>
