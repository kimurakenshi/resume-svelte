<script>
	import NavLink from './NavLink.svelte';
	import Logo from '$components/Logo.svelte';
	import { HEADER_HEIGHT } from '../../core.constants';

	let scrollYPosition = 0;
	$: isStickyNav = scrollYPosition > HEADER_HEIGHT - 20;
</script>

<svelte:window bind:scrollY={scrollYPosition} />

<nav
	class={isStickyNav
		? 'nav h-12 transition duration-500 ease-in-out relative flex justify-center items-center px-5 border-b border-gray-300 dark:border-gray-800 z-50 sticky top-0 bg-gradient-to-r from-purple-800 via-pink-700 to-purple-800 bg-opacity-90 text-white'
		: 'nav h-12 transition duration-500 ease-in-out relative flex justify-center items-center px-5 border-b border-gray-300 dark:border-gray-800 z-50 bg-gray-200 dark:bg-gray-800 on-background'}
>
	<div class="absolute left-5 ml-1 nav__logo">
		{#if isStickyNav}
			<Logo class="nav__logo object-contain" animate />
		{/if}
	</div>

	<ul class="flex justify-center items-center h-full md:m-auto">
		<NavLink path="/">01.Me</NavLink>

		<NavLink path="/resume">02.Resume</NavLink>

		<NavLink path="/contact">03.Contact</NavLink>
	</ul>
</nav>

<style lang="scss">
	.nav {
		height: var(--nav-height);
	}

	.nav__logo {
		width: 25px;
		height: 25px;

		@screen md {
			width: 30px;
			height: 30px;
		}
	}
</style>
