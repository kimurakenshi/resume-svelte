<script lang="ts">
  let header: string;

  header = "something";
</script>

<header class="header">
  This is {header}
</header>

<style lang="scss">
  .header {
    @apply text-4xl;
  }
</style>
