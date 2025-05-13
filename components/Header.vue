<template>
  <header>
    <MAC/> <Navigation/>
  </header>
</template>

<script>
import MAC from "./MAC.vue";
import Navigation from "./Navigation.vue";

export default {
  components: { MAC, Navigation }
}
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    background: var(--color-header-bg);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    padding: var(--spacing-unit);
  }
</style>
