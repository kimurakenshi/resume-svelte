<script lang="ts">
  import Header from "./Header.svelte";
  import { count } from "./store";
  function onHeaderClicked(e: CustomEvent) {
    alert(e.detail.text);
  }

  function incrementCounter() {
    count.update((n) => n + 1);
  }

  function resetCounter() {
    count.set(0);
  }

  let countValue: number;

  count.subscribe((counter) => (countValue = counter));
</script>

<div>
  <Header on:header-clicked={onHeaderClicked} />

  <button on:click={incrementCounter}>Increment</button>
  <button on:click={resetCounter}>Reset</button>
  <span class="text-2xl font-bold">
    {countValue}
  </span>
</div>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
