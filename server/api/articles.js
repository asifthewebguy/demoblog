// Import the correct function from the content module
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  // Use serverQueryContent with the event parameter
  const articles = await serverQueryContent(event, 'articles')
    .only(['title', 'description', 'img', 'slug', 'author'])
    .sort({ createdAt: 1 })
    .find();

  return articles;
});
