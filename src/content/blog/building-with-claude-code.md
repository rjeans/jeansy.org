---
title: "Building This Site with Claude Code: A Developer's Journey"
description: "My experience using Claude Code to create a personal blog from scratch - the good, the challenging, and the surprisingly effective."
pubDate: 2025-01-18
tags: ["development", "tools", "astro", "claude-code"]
---

# Building This Site with Claude Code: A Developer's Journey

After years of managing development teams and architecting systems, I decided it was time to create a personal space to share my thoughts on engineering and leadership. The twist? I wanted to explore Claude Code as my development partner.

## The Motivation

Like many engineers, I've been curious about AI-assisted development but skeptical about its practical value. As someone who's spent considerable time evaluating tools and technologies for teams, I wanted to put Claude Code through its paces on a real project - not just toy examples or contrived demos.

The goal was simple: create a minimalistic personal blog that could showcase both technical insights and management perspectives. Nothing revolutionary, but something that would require real decision-making, problem-solving, and the kind of iterative refinement that defines good software development.

## Choosing the Stack

One of the first pleasant surprises was the thoughtful approach to technology selection. Rather than defaulting to the latest trendy framework, Claude Code helped me think through the requirements:

- Minimalistic design (reflecting my preference for clean, functional interfaces)
- Markdown-based content (because I write in markdown anyway)
- Static generation (for performance and simplicity)
- Future extensibility (knowing requirements always evolve)

The recommendation was Astro with Tailwind CSS. Having worked with various static site generators over the years, I appreciated that this wasn't just a default suggestion - it was reasoned, considering both my stated goals and the broader ecosystem.

## Technical Architecture

The final stack proved to be well-suited for the project:

**Core Framework**: Astro 4.x provides the static site generation with excellent performance. The component-based architecture allows for future expansion while maintaining simplicity for content-focused pages.

**Styling**: Tailwind CSS with the typography plugin handles all styling needs. The utility-first approach keeps the CSS manageable and the design consistent.

**Content Management**: Astro's content collections feature manages blog posts as markdown files with frontmatter. This approach provides structure while keeping content creation simple.

**TypeScript**: Full TypeScript support throughout the project ensures type safety and better developer experience.

The project structure that emerged was logical and scalable:

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

## The Development Process

What struck me most was how the development process mirrored good pair programming. Claude Code didn't just write code - it helped structure the project, created comprehensive documentation, and even suggested a development roadmap.

The workflow felt natural:
1. Discuss requirements and approach
2. Set up project structure systematically
3. Create foundational components
4. Iterate on functionality
5. Document decisions and next steps

Each step built logically on the previous one, with clear explanations of choices made. When I ran into deployment issues with Cloudflare Pages, the troubleshooting process was methodical rather than random.

## What Worked Well

**Project Organization**: The initial project structure was well-thought-out. Everything had its place, and the conventions were consistent. The TypeScript configuration, build setup, and folder organization all reflected current best practices.

**Documentation**: Perhaps most impressively, comprehensive documentation was created alongside the code. The README, hosting guide, and development roadmap weren't afterthoughts - they were integral to the development process.

**Problem-Solving**: When we hit the inevitable deployment snags (wrong Cloudflare dashboard section, incorrect build configuration), the debugging approach was systematic. No random guessing or cargo-cult solutions.

## The Challenges

**Interface Evolution**: Cloudflare's dashboard layout had changed since the training data, leading to some navigation confusion. This reminded me that documentation and interfaces evolve faster than training data.

**Deployment Nuances**: Getting the build and deploy commands right required several iterations. The difference between build commands and deploy commands for static sites isn't always obvious, even to experienced developers.

## Deployment and Hosting

One of the more interesting aspects of this project was the deployment process. We chose Cloudflare Pages for hosting, which proved to be an excellent choice for a static Astro site.

**The Learning Curve**: Initially, there was some confusion about the correct build configuration. The key insight was understanding that for static sites, you need:
- Build command: `npm run build`
- Deploy command: (empty - Cloudflare automatically serves static files)
- Build output directory: `dist`

**Navigation Challenge**: Cloudflare's dashboard interface had evolved since the training data, leading to some initial confusion about finding the Pages section. The correct path turned out to be: Dashboard → Compute (Workers) → Workers & Pages → Pages tab.

**Results**: Once configured correctly, the deployment pipeline works seamlessly. Every push to the main branch triggers an automatic build and deployment, typically completing in under 2 minutes.

The hosting setup provides:
- Automatic HTTPS certificates
- Global CDN distribution
- Branch previews for testing
- Built-in analytics and performance monitoring

**Human Judgment**: While Claude Code suggested good defaults, the really important decisions still required human input - project goals, design preferences, content strategy.

## Reflections

As both an engineer and a manager, I found this experience enlightening. The development process felt less like working with a tool and more like collaborating with a knowledgeable colleague who happens to type very fast.

The code quality was solid - not just functional, but well-structured and maintainable. The documentation was thorough. The problem-solving approach was methodical. These are the characteristics I look for in senior developers.

But perhaps most importantly, it freed me to focus on the higher-level decisions - what this site should be, how it should feel, what stories I want to tell. The technical implementation became less of a barrier and more of an enabler.

## Moving Forward

This site represents just the beginning. The foundation is solid, the deployment pipeline works, and the development workflow is established. Now comes the harder part - creating content that's worth reading.

The real test of any tool isn't how well it handles the initial implementation, but how it supports ongoing evolution and maintenance. Based on this initial experience, I'm optimistic about the path ahead.

For fellow engineers and managers considering AI-assisted development: the technology isn't magic, but it's genuinely useful. The key is approaching it as a collaboration, not a replacement for engineering judgment.

The future of software development is looking increasingly interesting.

## Source Code and Documentation

The complete source code for this site is available on GitHub at [github.com/rjeans/jeansy.org](https://github.com/rjeans/jeansy.org). The repository includes:

- Complete Astro + Tailwind CSS implementation
- Comprehensive README with setup instructions
- Detailed hosting guide for Cloudflare Pages deployment
- Development roadmap for future enhancements

The repository serves as a practical example of AI-assisted development, showing both the code structure and the documentation that emerged from the collaborative process.

## Development Commands

For anyone interested in running this locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development experience is smooth, with hot-reloading and fast builds that make iteration pleasant.

---

*This post marks the first real content on this site. The source code is available on [GitHub](https://github.com/rjeans/jeansy.org), and if you're interested in more thoughts on engineering, management, or the intersection of technology and leadership, stay tuned.*