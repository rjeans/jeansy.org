# jeansy.org

A minimalistic personal website for an engineer and IT manager. Built with Astro and Tailwind CSS for optimal performance and clean design.

## Features

- Static site generation with Astro
- Markdown blog posts with frontmatter
- Responsive design with Tailwind CSS
- Clean, minimalistic UI with dark mode
- Fully SEO optimized with structured data
- RSS and JSON feeds
- Social media optimization (Open Graph, Twitter Cards)
- TypeScript support

## Tech Stack

- **Framework**: Astro 4.x
- **Styling**: Tailwind CSS with Typography plugin
- **Content**: Markdown with frontmatter and Astro Content Collections
- **Language**: TypeScript
- **SEO**: Sitemap, RSS/JSON feeds, JSON-LD structured data
- **Deployment**: Cloudflare Pages

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:4321`

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Project Structure

```
src/
├── content/
│   ├── blog/              # Blog posts (markdown)
│   └── config.ts          # Content collection config
├── layouts/
│   └── BaseLayout.astro   # Base page layout
├── pages/
│   ├── blog/
│   │   ├── [slug].astro   # Blog post template
│   │   └── index.astro    # Blog index
│   ├── index.astro        # Homepage
│   ├── rss.xml.js         # RSS feed generator
│   └── feed.json.js       # JSON feed generator
public/
├── images/
│   └── og-default.svg     # Social sharing image
└── robots.txt             # Crawler permissions
```

## Content Management

Blog posts are stored in `src/content/blog/` as markdown files with frontmatter:

```markdown
---
title: "Post Title"
description: "Post description"
pubDate: 2025-01-15
updatedDate: 2025-01-20  # Optional: track content updates
author: "Richard Jeans"   # Optional: defaults to Richard Jeans
tags: ["tag1", "tag2"]
draft: false              # Optional: hide unpublished posts
image: "/images/custom-og.jpg"  # Optional: custom social share image
imageAlt: "Image description"   # Optional: image alt text
---

# Your content here
```

### Available Frontmatter Fields

- `title` (required): Post title
- `description` (required): Post description/excerpt
- `pubDate` (required): Publication date
- `updatedDate` (optional): Last update date
- `author` (optional): Author name (defaults to "Richard Jeans")
- `tags` (optional): Array of tags/categories
- `draft` (optional): Set to `true` to hide from feeds (default: `false`)
- `image` (optional): Custom OG image path (defaults to site default)
- `imageAlt` (optional): Alt text for custom image

## Deployment

This site is deployed on **Cloudflare Pages** with automatic deployments from the main branch.

### Cloudflare Pages Setup
- Build command: `npm run build`
- Deploy command: (empty - static site)
- Build output directory: `dist`
- Auto-deploy: Enabled on push to main branch

### Manual Deployment
For other static hosting services, build with `npm run build` and deploy the `dist/` folder.

## SEO & Feeds

This site is fully optimized for search engines, social media, and feed readers:

### Feeds
- **RSS Feed**: [/rss.xml](https://jeansy.org/rss.xml)
- **JSON Feed**: [/feed.json](https://jeansy.org/feed.json)

### SEO Features
- Automatic sitemap generation
- Open Graph tags for social sharing (Facebook, LinkedIn, etc.)
- Twitter Card support
- JSON-LD structured data (BlogPosting, Person, WebSite schemas)
- Canonical URLs on all pages
- robots.txt with AI crawler permissions
- Theme-color meta tags for mobile browsers

### Validation
After deployment, validate with:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [W3C Feed Validator](https://validator.w3.org/feed/)

## Documentation

- [ROADMAP.md](./ROADMAP.md) - Development phases and planned features
- [HOSTING.md](./HOSTING.md) - Cloudflare Pages deployment guide
- [SEO-COMPLETE.md](./SEO-COMPLETE.md) - Comprehensive SEO implementation guide

## Live Site

Visit the live site at: [jeansy.org](https://jeansy.org)

## Author

**Richard Jeans** - Engineer and IT Manager

- Website: [jeansy.org](https://jeansy.org)
- GitHub: [@rjeans](https://github.com/rjeans)
- LinkedIn: [rjeans](https://www.linkedin.com/in/rjeans/)
- Twitter/X: [@rjeans](https://x.com/rjeans)