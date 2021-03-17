<script lang="ts">
  import Title from "./Title.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleCLick() {
    dispatch("header-clicked", { text: "Head component was clicked" });
  }
</script>

<header class="header" on:click={handleCLick}>
  <Title title="My First Svelte App" subtitle="Some catchy text here" />
</header>

<style lang="scss">
  .header {
    @apply text-4xl;
  }
</style>
