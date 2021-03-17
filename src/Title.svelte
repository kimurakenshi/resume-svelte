<script lang="ts">
  export let title: string;
  export let subtitle = "";
</script>

<h1 class="Title">
  {title}
</h1>

{#if subtitle !== ""}
  <h2 class="Subtitle">{subtitle}</h2>
{/if}

<style lang="scss">
  .Title {
    @apply text-4xl;
  }

  .Subtitle {
    @apply text-2xl;
  }
</style>
