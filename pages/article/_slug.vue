<template>
  <article>
    <h1>{{article.title}}</h1>
    <p>{{article.description}}</p>
    <img :src="require(`~/assets/images/${article.img}`)" :alt="article.alt">
    <p>{{article.content}}</p>
    <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <nuxt-content :document="article" />
    <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
    <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </article>
</template>

<script>


  export default {
    methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
 },
    async asyncData({$content, params}){
      const article = await $content('articles', params.slug).fetch();
      return {article};
    }
  }
</script>

<style scoped>
  .nuxt-content h1{
    color: blueviolet;
  }
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }
  .icon.icon-link {
    background-image: url('~assets/svg/hashtag.svg');
    display: inline-block;
    width: 20px;
    height: 20px;
    background-size: 20px 20px;
  }
</style>
