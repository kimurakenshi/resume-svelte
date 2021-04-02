<script lang="ts">
	import { fade } from 'svelte/transition';

	export let customClasses = '';
</script>

<div
	class="text-center shadow rounded-2xl px-4 md:px-6 py-4 md:py-8 min-w-min text-sm md:text-base {customClasses}"
	transition:fade
>
	<slot />
</div>
