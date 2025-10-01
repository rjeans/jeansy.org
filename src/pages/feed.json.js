import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  const sortedPosts = posts
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: 'jeansy.org',
    home_page_url: context.site,
    feed_url: `${context.site}feed.json`,
    description: 'Personal website of an engineer and IT manager. Sharing thoughts on technology, management, and building things.',
    icon: `${context.site}favicon.svg`,
    author: {
      name: 'Richard Jeans',
      url: 'https://jeansy.org',
      avatar: `${context.site}images/og-default.svg`
    },
    language: 'en-US',
    items: sortedPosts.map((post) => ({
      id: `${context.site}blog/${post.slug}/`,
      url: `${context.site}blog/${post.slug}/`,
      title: post.data.title,
      content_html: post.data.description,
      content_text: post.data.description,
      date_published: post.data.pubDate.toISOString(),
      date_modified: post.data.updatedDate ? post.data.updatedDate.toISOString() : post.data.pubDate.toISOString(),
      authors: [{
        name: 'Richard Jeans',
        url: 'https://jeansy.org'
      }],
      tags: post.data.tags || [],
      language: 'en-US'
    })),
  };

  return new Response(JSON.stringify(feed, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
