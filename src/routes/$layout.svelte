<script lang="ts">
	/*
    @todo: is this the right way of including global styles? This layout is being shared between pages
    so hopefully it doesn't load the styles multiple times
  */
	import '../core/styles/globals.scss';
</script>

<main>
	<slot />
</main>
