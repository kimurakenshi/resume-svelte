<script lang="ts">
	import Typewriter from '$components/Typewriter.svelte';
	import Panel from '$components/Panel.svelte';
	import Text from '$components/Text.svelte';
	import { onMount } from 'svelte';

	let showTypewriterAnimation = false;
	const typeWriterClasses =
		'text-md md:text-lg text-center font-light flex flex-col justify-center';

	onMount(() => {
		showTypewriterAnimation = true;
	});
</script>

{#if showTypewriterAnimation}
	<div class="page--min-height flex flex-col items-center justify-center">
		<Typewriter classes={typeWriterClasses} delay={2}>Hello! , I'm Sebastián.</Typewriter>

		<Typewriter classes={typeWriterClasses} delay={4}>This is my personal Website.</Typewriter>
	</div>
{/if}

<Panel customClasses="mb-10 md:mb-20 bg-gray-800 bg-opacity-60">
	<Text>
		I enjoy building new things, I&apos;m passionated about UI/UX and helping my team to succeed.
	</Text>
</Panel><Panel customClasses="mb-10 md:mb-20 bg-gray-800 bg-opacity-60">
	<Text>
		I enjoy building new things, I&apos;m passionated about UI/UX and helping my team to succeed.
	</Text>
</Panel><Panel customClasses="mb-10 md:mb-20 bg-gray-800 bg-opacity-60">
	<Text>
		I enjoy building new things, I&apos;m passionated about UI/UX and helping my team to succeed.
	</Text>
</Panel><Panel customClasses="mb-10 md:mb-20 bg-gray-800 bg-opacity-60">
	<Text>
		I enjoy building new things, I&apos;m passionated about UI/UX and helping my team to succeed.
	</Text>
</Panel>
