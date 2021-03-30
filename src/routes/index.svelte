<script lang="ts">
	import { theme, ThemeName } from '$core/theme';
	import Page from '$components/Page.svelte';
</script>

<Page description="Home" title="Home" hasSpacing={false}>
	{#if $theme === ThemeName.LIGHT}
		<div>It is the light theme</div>
	{:else}
		<div>It is the dark theme</div>
	{/if}
</Page>
