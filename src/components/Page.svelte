<script lang="ts">
	import Background from './Background.svelte';
	export let title = '';
	export let description = '';
	export let customClasses = '';
	export let bgClasses = 'background on-background';
	export let hasSpacing = true;
	export let hasMarkdown = false;
</script>

<svelte:head>
	<meta name="Description" content={description} />
	<title>{title}</title>
</svelte:head>
<div class="font-default relative">
	<Background classNames={bgClasses} />

	<main
		class={hasSpacing
			? `on-background page--min-height py-6 md:py-16 px-8 mx-auto my-0 max-w-full md:max-w-2xl xl:max-w-5xl 2xl:max-w-6xl ${customClasses}`
			: `on-background page--min-height ${customClasses}`}
	>
		{#if hasMarkdown}
			<article class="prose dark:prose--dark max-w-none">
				<slot />
			</article>
		{:else}
			<slot />
		{/if}
	</main>
</div>
