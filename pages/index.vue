<template>
  <div>
    This is the homePage
    <div>
    <h1>Blog Posts</h1>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <!-- <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }"> -->
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img :src="require(`~/assets/images/${article.img}`)" />
          <div>
            <h2>{{ article.title }}</h2>
            <p>by {{ article.author.name }}</p>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({$content,params}){
    const articles = await $content('articles')
                      .only(['title', 'description','img', 'slug', 'author'])
                      .sortBy('createdAt','asc')
                      .fetch();
    return {
      articles
    }
  },
}
</script>
