<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/"><i class="fa fa-home" aria-hidden="true"></i></nuxt-link>
      </li>
      <li>
        <nuxt-link to="about">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="work">Work</nuxt-link>
      </li>
      <li>
        <nuxt-link to="contact">Contact</nuxt-link>
      </li>
      <li>
        <nuxt-link to="resume">Resume</nuxt-link>
      </li>
      <li>
        <i class="fa fa-moon-o" aria-hidden="true"></i>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {

  }
</script>

<style scoped>
/* horizontal navigation */
nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav li{
  list-style: none;
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
}
</style>
