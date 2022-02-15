<template>
  <div>
    <Header/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
import MAC from "~/components/MAC.vue";
import Navigation from "~/components/Navigation.vue";
import Header from "../components/Header.vue";
  export default {
    components: { MAC, Navigation, Header }
}
</script>

<style scoped>

</style>
