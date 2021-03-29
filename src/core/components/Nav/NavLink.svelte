<script lang="ts">
	export let path = '';
</script>

<li
	class="px-2 md:px-4 hover:underline opacity-80 hover:opacity-100 hover:scale-110 transform duration-200 text-sm md:text-base"
>
	<a href={path}><slot /></a>
</li>
