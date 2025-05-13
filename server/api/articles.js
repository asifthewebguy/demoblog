export default defineEventHandler(async (event) => {
  const articles = await queryContent('articles')
    .only(['title', 'description', 'img', 'slug', 'author'])
    .sort({ createdAt: 1 })
    .find();
  
  return articles;
});
