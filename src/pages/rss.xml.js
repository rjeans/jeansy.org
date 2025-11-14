import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  const sortedPosts = posts
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'jeansy.org',
    description: 'Personal website, sharing thoughts on projects, ideas, and things that spark my curiosity. All opinions mine. For my professional life, please get in touch via LinkedIn.',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      categories: post.data.categories || [],
    })),
    customData: `<language>en-us</language>
    <atom:link href="${context.site}rss.xml" rel="self" type="application/rss+xml" />
    <managingEditor>noreply@jeansy.org (Richard Jeans)</managingEditor>
    <webMaster>noreply@jeansy.org (Richard Jeans)</webMaster>`,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
  });
}
