<script lang="ts">
	import { fade } from 'svelte/transition';
	import { ThemeName } from '$core/theme';

	export let background = '';
	export let imageUrl = '';
	export let classNames = '';
	export let theme: ThemeName;

	const styleProps = {};

	if (imageUrl) {
		styleProps['background-image'] = `url(${imageUrl})`;
	}

	if (background) {
		styleProps['background'] = background;
	}
</script>

<div
	class="absolute h-full w-full top-0 left-0 animate__animated animate__fadeIn bg-cover bg-no-repeat bg-fixed bg-center background {classNames}"
	class:background--dark={theme === ThemeName.DARK}
	class:background--light={theme === ThemeName.LIGHT}
	style={styleProps}
	transition:fade={{ delay: 250, duration: 2000 }}
/>

<style lang="scss">
	.background {
		z-index: -1;
	}

	.background--light {
		@apply bg-gray-400;

		background-blend-mode: lighten;
	}

	.background--dark {
		@apply bg-gray-500;

		background-blend-mode: darken;
	}
</style>
