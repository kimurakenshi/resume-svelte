<script lang="ts">
	import Page from '$components/Page.svelte';
	import ParallaxLight from '../core/components/ParallaxLight.svelte';
	import ParallaxDark from '../core/components/ParallaxDark.svelte';
	import { ThemeName, theme } from '$core/theme';
</script>

<Page description="Home" title="Home" hasSpacing={false}>
	{#if $theme === ThemeName.LIGHT}
		<ParallaxLight />
	{:else}
		<ParallaxDark />
	{/if}
</Page>
