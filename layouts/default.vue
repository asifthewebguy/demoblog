<template>
  <div class="container">
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
:root{
  font-size: 16px;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container{
  margin-top: 80px;
}
</style>
