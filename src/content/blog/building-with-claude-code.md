---
title: "Building This Site with Claude Code: An introduction"
description: "My experience using Claude Code to create a personal blog from scratch - the good, the challenging, and the surprisingly effective."
pubDate: 2025-07-18
tags: ["development", "tools", "astro", "claude-code"]
---

I have had many different sites at jeansy.org over the years. Wordpress, static HTML, Drupal. I suspect there were others. Of course it suffered from the usual problem, I loved playing with the hosting technology, domains, and content management systems, but hated writing anything. 

## The Motivation

I guess I had several different motivatgions. The first was an opportunity to use Claude Code to help build a new blog. Certainly this would be right up the street of an AI coding assistant? Also a good opportunity to test out this way of developing.

Second motivation was to start to create some meaningful content. I have been journalling on and off over the last few years and have really enjoyed it. Don't worry, I don't plan to share my journal, but perhaps I could develop a style and some better skill at writing.

At this point I have a confession. Having built the site with Claud Code, I inevitably set the Generative AI to write my blog posts. It was definitely effective, but the style was far from authentic. So my confession - I rewrote the blog posts, removed the em-dashes, and reduced the number of bullet point lists. 

So even if the AI has helped build the technology - the writing is all mine. 

## Choosing the Technology

Claude was really effective at helping choose the technology stack. I think it really helped that I knew what sort of site and technology I wanted. It really helps to ask Claude to "think carefully" about the technology and then for you (as the driver) to question and challenge the selection. 

This was my recurring experience with Claude, the need to challenge and ensure that the decisions had been thought through. I don't need to know the details of Hugo, TypeScript, Astro, Node, Java Script. But you do need to know what you want and how the technology supports it.

So it was a joint effort and my requirements were clear. I wanted:

- Minimalistic design (reflecting a preference for clean, functional interfaces)
- Markdown-based content (because I am learning to like Markdown)
- Static generation (for performance and simplicity)
- Future extensibility (knowing requirements always evolve)

The recommendation was Astro with Tailwind CSS. We (Claude and I) tested the choices against the requirements. Also a good trick is to ask claude to write down the roadmap and then play that into a different LLM. So ask Gemini or GPT what they think and iterate. 

## Technical Architecture

The final stack seems to be working well:

**Core Framework**: Astro 4.x provides the static site generation with good performance. The component-based architecture will allow for future expansion while maintaining simplicity for content-focused pages in markdown.

**Styling**: Tailwind CSS with the typography plugin handles all styling needs. It has been very easy to change the look and feel of the site. It keeps the CSS manageable and the design consistent.

**Content Management**: Astro's content collections feature manages blog posts as markdown files with frontmatter. This approach provides structure while keeping content creation simple. As I said, I am learning to like markdown.

**TypeScript**: Full TypeScript support throughout the project ensures type safety and better developer experience. Actually Claude came up with this. I am reviewing the code so will reserve judgement but it seems to be correct.

The project structure that was developed is as follows:

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

What struck me most was how the development process worked well when it was collaborative. Claude Code operates like a well informed, expert machine, but is overly confident and jsust a little too obliging. It definitely needs a strong hand to ensure that things remain well focused and architected. Of course it didn't just write code - it helped provide the structure the project, created documentation, and suggested a development roadmap.

The workflow felt natural - although it took some getting used to being hands off the development. More like a dev lead role than developer. 

What did I bring to the party?

Well I didn't know the astro framework but that was okay. What I did know were the pitfalls and issues. Performance, compatability, development vs testing vs production. I can also tell when things are getting too complicated or over designed. That keeps the well intentioned but over enthusiastic AI programmer on the rails.

## What Worked Well

**Project Organization**: The initial project structure was well-thought-out. Everything had its place, and the conventions were consistent. The TypeScript configuration, build setup, and folder organization all reflected current best practices. Indeed, I found a useful prompt was to ask claude to take a step back and review the architecture in light of best practices. Like all enthusiastic programmers - sometimes it needed a little promting to step back and look at the bigger picture.

**Documentation**: Perhaps most useful was the ability to create comprehensive documentation   alongside the code. The README, hosting guide, and development roadmap were developed as part of the process. Indeed, they are really important to keep claude focused. It is also useful to plug this documentation into other LLM to get feedback. Of course the style is very AI - but for the technical documentation, that is okay.

**Playwright**: I really like the [MCP server Playwright](https://github.com/microsoft/playwright-mcp). This was a game changer when it came to debugging and improvign the look and feel. Before Playwright, claude was pretty good but the ability for the AI to improve UX when it could browse and see the site was so much better. Try it - it works so well.

## The Challenges

**Problem Solving**: You have to be careful. It is easy to be lulled into a false sense of security and continue to iterate in circles, hoping that claude will always sort out a problem. In gerneral for something like a static website in Astro, most problems can be solved. But when it came to hosting and navigating Cloudflare's (great) solution, it faltered. We had to resort to old fasioned google and other sources. (Interestingly Cloudflare now have an MCP server - perhaps that would be the answer to this problem!)

**Bloat**: I like a tidy repo so you have to stay on top of what is being generated. Claude likes to generate documentation and markdown files. You do need to remind it to take a step back and tidy after itself.

**Emojis**: I *hate* non ascii characters in code and documentation. Old fasioned? Perhaps. Anyway you can mention it in CLAUDE.md all you like but the AI will inevitably resort to adding emojis and other unecessary characters into code, commit messages, and documentation. A small thing perhaps but we all have our quirks.

## Deployment and Hosting

One of the important decision points was the deployment and hosting process. Previously I was using Github pages - which worked well. But having looked at the options we chose Cloudflare Pages for hosting. This seems to be a robust and reliable choice for a static Astro site. It also made sense because Cloudflare is also my DNS provider.

Cloudflare's dashboard interface had evolved since the claude training data, leading to some confusion. The AI was in the right direction but I had to resort to old fasioned mechanisms to get it fully right.

Once configured correctly, the deployment pipeline works seamlessly. Every push to the main branch triggers an automatic build and deployment, typically completing in under 2 minutes.

The hosting setup also provides a bunch of other things:
- Automatic HTTPS certificates
- Global CDN distribution
- Branch previews for testing
- Built-in analytics and performance monitoring

## Reflections

I am hooked. It was a great process and really pleased with the results. Working with Claude was like being the dev lead of an extreamly motivated but slightly over confident team of well informed but perhaps inexperienced developers. I was worried that I would feel removed from the code and process. That is a danger but to get best results you do need to be able to "oversee". 

To that extent I was encouraged - I have always believed there is a tacit send of rightness or fitness about software that doesn't depend on a deep syntactical understanding. I am sure the AI could come up with the references (yes I did check!). But a curiosity and skill in software development also requires an understanding of what doesn't "smell" right. That seems to be important in this process.

Perhaps I am kidding myself and with better prompt engineeering and developing models even this can be engineered out. But for the moment I like the idea that an old hand and enthusiastic AI developer make a good team.

The complete source code for this site is available on GitHub at [github.com/rjeans/jeansy.org](https://github.com/rjeans/jeansy.org).

The repository serves as a practical example of AI-assisted development, showing both the code structure and the documentation that emerged from the collaborative process. All errors are mine not the machine.

Enjoy 😊 (only joking)

