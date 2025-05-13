<template>
  <nav class="table-of-contents" v-if="toc && toc.length">
    <h2 class="toc-title">{{ title }}</h2>
    <ul>
      <li v-for="link of toc" :key="link.id">
        <NuxtLink :to="`#${link.id}`" class="toc-link">
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    toc: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: 'Table of Contents'
    }
  }
}
</script>

<style scoped>
.table-of-contents {
  margin: var(--spacing-unit) 0;
  padding: calc(var(--spacing-unit) * 2);
  border: 1px solid #eee;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.02);
}

.toc-title {
  font-size: 1.2rem;
  margin-bottom: var(--spacing-unit);
  font-weight: bold;
}

.toc-link {
  display: block;
  padding: calc(var(--spacing-unit) / 2) 0;
  color: var(--color-text);
  text-decoration: none;
}

.toc-link:hover {
  color: var(--color-primary);
  text-decoration: underline;
}
</style>
