# jeansy.org

A minimalistic personal website for an engineer and IT manager. Built with Astro and Tailwind CSS for optimal performance and clean design.

## Features

- Static site generation with Astro
- Markdown blog posts with frontmatter
- Responsive design with Tailwind CSS
- Clean, minimalistic UI
- SEO optimized
- TypeScript support

## Tech Stack

- **Framework**: Astro 4.x
- **Styling**: Tailwind CSS
- **Content**: Markdown with frontmatter
- **Language**: TypeScript
- **Deployment**: Static hosting ready

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
│   ├── blog/           # Blog posts (markdown)
│   └── config.ts       # Content collection config
├── layouts/
│   └── BaseLayout.astro # Base page layout
├── pages/
│   ├── blog/           # Blog pages
│   ├── index.astro     # Homepage
│   └── about.astro     # About page
└── components/         # Reusable components
```

## Content Management

Blog posts are stored in `src/content/blog/` as markdown files with frontmatter:

```markdown
---
title: "Post Title"
description: "Post description"
pubDate: 2024-01-15
tags: ["tag1", "tag2"]
---

# Your content here
```

## Deployment

This site is designed for static hosting. Build with `npm run build` and deploy the `dist/` folder to any static hosting service.

## Development Roadmap

See [ROADMAP.md](./ROADMAP.md) for planned features and development phases.