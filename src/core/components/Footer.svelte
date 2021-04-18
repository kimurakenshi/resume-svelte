<script lang="ts">
	import { ThemeName, theme } from '$core/theme';
</script>

<footer
	class={$theme === ThemeName.DARK
		? 'background on-background text-center footer'
		: 'bg-blue-800 bg-opacity-90 text-gray-100 text-center footer'}
>
	<a
		href="https://vercel.com"
		target="_blank"
		rel="noopener noreferrer"
		class="flex items-center justify-center text-sm h-full"
	>
		<span class="text-sm mr-1">Powered by</span>

		<svg
			role="img"
			aria-label="Vercel Inc."
			width="15"
			height="15"
			viewBox="0 0 116 100"
			class="fill-current text-gray-100"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M57.5 0L115 100H0L57.5 0z" />
		</svg>
	</a>
</footer>

<style lang="scss">
	.footer {
		height: var(--footer-height);
	}
</style>
