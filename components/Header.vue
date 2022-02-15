<template>
  <header>
    <MAC/> <Navigation/>
  </header>
</template>

<script>
import MAC from "./MAC.vue";
  export default {
    components: { MAC }
}
</script>

<style scoped>
  header{
    display: flex;
    justify-content: space-between;
    background: #f5f5f5;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1;
  }
</style>
