<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/" aria-label="Home">
          <span class="icon icon-home"></span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/work">Work</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/resume">Resume</nuxt-link>
      </li>
      <li>
        <button @click="toggleDarkMode" aria-label="Toggle dark mode">
          <span class="icon icon-moon"></span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false
    }
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      document.documentElement.classList.toggle('dark-mode', this.darkMode);
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  display: flex;
  align-items: center;
}

nav li {
  list-style: none;
  display: inline-block;
  margin: 0 var(--spacing-unit);
  cursor: pointer;
}

nav a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
}

nav a:hover {
  color: var(--color-primary);
}

button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: var(--color-text);
}

.icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  vertical-align: middle;
}

.icon-home {
  background-image: url('/assets/svg/house.svg');
}

.icon-moon {
  background-image: url('/assets/svg/moon.svg');
}
</style>
