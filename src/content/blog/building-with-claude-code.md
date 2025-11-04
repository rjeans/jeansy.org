---
title: "Building This Site with Claude Code: An Introduction"
description: "Hands-on lessons from using Claude Code to build a personal blog with Astro — exploring how AI coding assistants collaborate, where human judgment still matters, and how emerging standards like MCP reshape development."
pubDate: 2025-10-09
categories:
  - AI Development
  - Web Development
tags:
  - Claude Code
  - Astro
  - MCP
  - software engineering
  - coding assistants
  - Tailwind CSS
keywords:
  - Claude Code
  - building a blog with AI
  - Astro static site generator
  - AI web development
  - MCP protocol
  - Model Context Protocol
  - AI coding assistants
  - collaborative software development
  - AI developer workflow
  - large language model coding
  - human vs AI creativity
  - VS Code AI integration
  - Tailwind CSS and Astro
  - GitHub project automation
  - writing with AI support
  - AI-powered web design
  - reflective software engineering
  - agentic AI tools
  - AI development process
  - lessons from Claude Code
---

A confession. I built this site using Claude Code, then let it write the first post. The post was accurate, effective but instantly recognizable as AI. So I rewrote the content and this has been the most difficult part of the process of re-launching my website.

I have had many different sites at [jeansy.org](https://jeansy.org) over the years. Wordpress, static HTML, Drupal. I suspect there were others. With all of them there was a common pattern, I loved playing with the hosting technology but hated writing anything. 

The technology motivation is still there. Rebuilding the site was an opportunity to use Claude Code and understand AI coding hands-on better. Certainly this task should be right up the street of an AI coding assistant? The experience was a great one. 

I learned something about development but more profound was having an insight into how things could change. I remain of the opinion that experience and judgment - the tacit sense of what good looks like - is crucial in this partnership. Perhaps that is hubris but I will keep an open mind.

Second motivation was to start afresh and create some meaningful content. I have been journaling on and off over the last few years and have really enjoyed it. Don't worry, I don't plan to share my journal, but perhaps I could develop a style and some better skill at writing.

So even if the AI has helped build the technology - the writing is all mine. Be kind.

## The Technology

Claude was really effective at helping choose the technology stack. I think it really helped that I knew what sort of site and technology I wanted. It really helps to ask Claude to "think carefully" about the technology and then for you (as the boss) to question and challenge the selection. 

This was my recurring experience with Claude, the need to challenge and ensure that the decisions had been thought through. You don't need to know all the details of Hugo, TypeScript, Astro, Node, JavaScript. But you do need to know what you want and how the technology supports it.

So it was a joint effort and my requirements were clear. I wanted:

- Minimalistic design (reflecting a preference for clean, functional interfaces)
- Markdown-based content (because I am learning to like Markdown)
- Static generation (for performance and simplicity)
- Future extensibility (knowing requirements *always* evolve)

The recommendation was Astro with Tailwind CSS. We (I will refer to Claude and I as "we" from now on) tested the choices against the requirements. Also a good trick is to ask Claude to write down the roadmap and then play that into a different LLM. So ask Gemini or GPT what they think and iterate. 

I left the initial planning feeling okay that the direction we had was a good one. My advice is don't skip this. Take time to make sure you both know what you want and the direction it should take. It serves as a reference to come back to. You can of course always evolve but it lays some rails to follow.

The technology and architecture details are available in the [GitHub repository](https://github.com/rjeans/jeansy.org). Feel free to explore the codebase and documentation there. Rather than describing the standard setup here, I want to focus on what I found most interesting: the process itself.

## The Development Process

The process of developing with Claude was a fascinating one. After getting used to the tools (I use the Claude Code extension for Visual Studio Code), the workflow felt natural. Certainly I built confidence that the software was being written in a careful way. Claude would run the software and review errors, then fix bugs. 

It took time to get used to being "hands off". Something that comes easier in a professional role rather than when I am in development mode. It was a memory of being in a dev lead role.

The development process worked well when it was collaborative. Claude Code operates like a well informed, expert machine, but is overly confident and just a little too obliging. It definitely needs a strong hand to ensure that things remain well focused and architected. Of course it didn't just write code - it provided the structure of the project, created documentation, and suggested a development roadmap. 

But overall it needed to be reminded to take a step back and keep it simple. Test before declaring success. All the normal pitfalls in software development. There are other criteria for success than just the result.

## Playwright

From an agentic AI coding perspective, the process relied on Visual Studio Code, GitHub, and of course Claude. Part way through, I became more interested in Model Context Protocol (MCP). This is a standard to allow AI models to connect and interact with tools and data sources in a context-aware way. Simply put, it is a way to dramatically upskill the AI process. 

The MCP server I was interested in is Playwright. This allows the AI model to interact with a website using a real browser. So instead of guessing how the website looks, the AI can "look" at it like a normal user. Well, "look" might be a stretch but certainly this really helped refine the look and feel. 

When I complained about the contrast of a font, the AI would kindly open a browser, navigate to the page, take a snapshot and refine the code. This really felt like a collaboration - looking at the same view and making adjustments. Almost like the AI was the other side of the glass. 

## The Human Role

The question I asked myself with this process is: What role do I have to play? Beyond providing the need, am I actually required in the process? Before I provide my opinion, the process did let me think more about some of my beliefs about software development.

Syntactical understanding of software languages and knowing how to use tools and platforms is of course important. It can be measured as a competency and skill. But it is not the most important thing. After all, my earliest development experience was Basic, 6502 machine code and then Fortran. Clever stuff but of a different generation. Nonetheless I believe there are skills developed then that remain valuable.

I believe that there is a tacit sense of rightness or fitness about software that doesn't depend on a deep syntactical understanding. Martin Fowler wrote about Code "smells" (Refactoring, 1999) and that sums it up well. There is skill and understanding in crafting a solution that is simple, elegant, robust and feels right.

I don't believe this is somehow innate to human intelligence and not available to AI - but I don't see it yet and it requires training beyond reading and consuming written knowledge. It requires experience of problem solving, curiosity, and matching patterns across different disciplines.

This "rightness" of a solution is common across many different areas of creative and technical endeavours. The elegance of simplicity and necessity of the solution is the principle of Occam's Razor - and Occam didn't write any software.

So I am hooked. It was a great process and I am pleased with the results. Working with Claude was like being the dev lead of an extremely motivated but slightly over confident team of well informed but perhaps inexperienced developers. I was worried that I would feel removed from the code and process. For writing the code, I wasn't needed. I take responsibility for the result but none of the credit. But my role in the process seemed important and definitely improved the outcome. 

It's a bit like being a good dev lead. Perhaps with better prompt engineering and the pace at which models are developing, even this role can be engineered out. But for the moment I like the idea that an old hand and enthusiastic AI developer make a good team.

---

*The complete source code for this site is available on GitHub at [github.com/rjeans/jeansy.org](https://github.com/rjeans/jeansy.org).*

---
