<template>
  <div v-if="pending">Loading article...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <article v-else class="article">
    <header class="article-header">
      <h1>{{ article.title }}</h1>
      <p class="article-description">{{ article.description }}</p>
      <img
        :src="`/assets/images/${article.img}`"
        :alt="article.alt"
        class="article-image"
      >
    </header>

    <TableOfContents v-if="article.toc" :toc="article.toc" title="In this article" />

    <div class="article-content">
      <ContentRenderer :value="article" />
    </div>

    <footer class="article-footer">
      <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
    </footer>
  </article>
</template>

<script setup>
import { useRoute } from 'vue-router';
import TableOfContents from '~/components/TableOfContents.vue';

const route = useRoute();
const slug = route.params.slug;

const { data: article, pending, error } = await useAsyncData(`article-${slug}`, () => {
  return queryContent('articles').where({ slug: slug }).findOne();
});

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en', options);
}
</script>

<style scoped>
.article {
  max-width: 800px;
  margin: 0 auto;
  padding: calc(var(--spacing-unit) * 2);
}

.article-header {
  margin-bottom: calc(var(--spacing-unit) * 3);
}

.article-description {
  font-size: 1.2rem;
  color: #666;
  margin: var(--spacing-unit) 0;
}

.article-image {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin: calc(var(--spacing-unit) * 2) 0;
}

.article-content {
  margin: calc(var(--spacing-unit) * 3) 0;
}

.article-footer {
  margin-top: calc(var(--spacing-unit) * 3);
  padding-top: var(--spacing-unit);
  border-top: 1px solid #eee;
  font-size: 0.9rem;
  color: #666;
}

/* Content styling */
.nuxt-content h1 {
  color: var(--color-primary);
  font-size: 2rem;
  margin: calc(var(--spacing-unit) * 3) 0 var(--spacing-unit);
}

.nuxt-content h2 {
  font-weight: bold;
  font-size: 1.5rem;
  margin: calc(var(--spacing-unit) * 2) 0 var(--spacing-unit);
}

.nuxt-content h3 {
  font-weight: bold;
  font-size: 1.25rem;
  margin: calc(var(--spacing-unit) * 1.5) 0 var(--spacing-unit);
}

.nuxt-content p {
  margin-bottom: calc(var(--spacing-unit) * 2);
}

.icon.icon-link {
  background-image: url('/assets/svg/hashtag.svg');
  display: inline-block;
  width: 16px;
  height: 16px;
  background-size: 16px 16px;
  margin-left: 4px;
  opacity: 0.5;
}
</style>
