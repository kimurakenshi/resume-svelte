<script lang="ts">
	import { ThemeName, theme } from '$core/theme';
</script>

<div
	role="button"
	class={$theme === ThemeName.DARK
		? 'ThemeSwitcher cursor-pointer opacity-80 hover:opacity-100 hover:scale-110 transform transition duration-300 ease-in-out hover:text-yellow-200'
		: 'ThemeSwitcher cursor-pointer opacity-80 hover:opacity-100 hover:scale-110 transform transition duration-300 ease-in-out hover:text-white'}
	on:click={() => theme.switchTheme()}
>
	{#if $theme === ThemeName.DARK}
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
			/>
		</svg>
	{:else}
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
			/>
		</svg>
	{/if}
</div>

<style lang="scss">
	.ThemeSwitcher {
		height: 25px;
		width: 25px;
	}
</style>
