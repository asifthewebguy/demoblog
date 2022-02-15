<template>
  <nav>
    <ul>
      <li><i class="fa fa-home" aria-hidden="true"></i></li>
      <li>About</li>
      <li>Work</li>
      <li>Contact</li>
      <li>Resume</li>
      <li><i class="fa fa-moon-o" aria-hidden="true"></i></li>
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
