<script lang="ts">
	export let title = '';
	export let description = '';
	export let customClasses = '';
	export let hasSpacing = true;
	export let hasMarkdown = false;
	export let imageIndex = 0;
	export let items = [
		{
			id: 1,
			classNames: 'background on-background'
		}
	];
</script>

<svelte:head>
	<meta name="Description" content={description} />
	<title>{title}</title>
</svelte:head>
<!--	@todo: remove background class from here once parallax is implemented-->
<div class="background on-background font-default relative ">
	<!--	@todo: it depends on Background component-->
	<!--{items && items.length > 0 && (-->
	<!--  <Background currentItemIndex={imageIndex} items={items} />-->
	<!--)}-->

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
