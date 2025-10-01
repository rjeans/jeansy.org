import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  const sortedPosts = posts
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'jeansy.org',
    description: 'Personal website of an engineer and IT manager. Sharing thoughts on technology, management, and building things.',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      author: 'Richard Jeans',
      categories: post.data.tags || [],
    })),
    customData: `<language>en-us</language>`,
  });
}
