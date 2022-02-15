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
/* reset start */
html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}
/* reset end */
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
