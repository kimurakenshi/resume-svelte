<script lang="ts">
	import ThemeSwitcher from './ThemeSwitcher.svelte';
	import Logo from '$components/Logo.svelte';
</script>

<header
	class="flex justify-between items-center bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white header"
>
	<div class="text-white opacity-80 header__logo">
		<Logo customClasses="text-green-300" />
	</div>

	<h1 class="capitalize font-default text-xl md:text-3xl">Sebasti&aacute;n Giraudo</h1>

	<ThemeSwitcher />
</header>

<style lang="scss">
	.header {
		height: var(--header-height-small);
		width: 100%;

		@apply px-5;
		@apply py-4;

		@screen md {
			height: var(--header-height);
		}
	}

	.header__logo {
		width: 30px;
		height: 30px;
		position: relative;

		@screen md {
			width: 40px;
			height: 40px;
		}
	}
</style>
