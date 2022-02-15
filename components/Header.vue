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
  }
</style>
