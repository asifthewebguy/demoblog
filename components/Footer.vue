<template>
  <footer>
    &copy; Asif Chowdhury {{ new Date().getFullYear() }}
  </footer>
</template>

<script>
  export default {

  }
</script>

<style scoped>
footer {
  width: 100%;
  text-align: center;
  position: fixed;
  bottom: 0;
  padding: var(--spacing-unit);
  background: var(--color-header-bg);
}
</style>
