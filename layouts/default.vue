<template>
  <div class="container">
    <Header/>
    <NuxtPage/>
    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: { Header, Footer }
}
</script>

<style scoped>
/* Custom styles for this layout */
</style>
