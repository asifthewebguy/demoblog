<template>
  <div class="home-page">
    <div class="blog-posts">
      <h1 class="page-title">Blog Posts</h1>
      <div v-if="pending">Loading articles...</div>
      <div v-else-if="error">Error: {{ error }}</div>
      <ul v-else class="article-list">
        <li v-for="article in articles" :key="article.slug" class="article-item">
          <NuxtLink :to="`/article/${article.slug}`" class="article-link">
            <img
              :src="`/assets/images/${article.img}`"
              :alt="article.title"
              class="article-image"
            />
            <div class="article-content">
              <h2 class="article-title">{{ article.title }}</h2>
              <p class="article-author">by {{ article.author?.name || 'Unknown' }}</p>
              <p class="article-description">{{ article.description }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { data: articles, pending, error } = await useFetch('/api/articles');
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: calc(var(--spacing-unit) * 2);
}

.page-title {
  margin-bottom: calc(var(--spacing-unit) * 3);
  font-size: 2rem;
  color: var(--color-primary);
}

.article-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: calc(var(--spacing-unit) * 3);
}

.article-item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.article-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.article-link {
  display: block;
  color: var(--color-text);
  text-decoration: none;
}

.article-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.article-content {
  padding: calc(var(--spacing-unit) * 2);
}

.article-title {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-unit);
}

.article-author {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: var(--spacing-unit);
}

.article-description {
  font-size: 1rem;
  line-height: 1.5;
}
</style>
