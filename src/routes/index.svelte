<script lang="ts">
	import Page from '$components/Page.svelte';
	import Typewriter from '$components/Typewriter.svelte';
	import { onMount } from 'svelte';

	let showTypewriterAnimation = false;
	const typeWriterClasses =
		'text-md md:text-lg text-center font-light flex flex-col justify-center';

	onMount(() => {
		showTypewriterAnimation = true;
	});
</script>

<Page description="Home" title="Home" hasSpacing={false}>
	{#if showTypewriterAnimation}
		<div class="page--min-height flex flex-col items-center justify-center">
			<Typewriter classes={typeWriterClasses} delay={2}>Hello! , I'm Sebastián.</Typewriter>

			<Typewriter classes={typeWriterClasses} delay={4}>This is my personal Website.</Typewriter>
		</div>
	{/if}
</Page>
