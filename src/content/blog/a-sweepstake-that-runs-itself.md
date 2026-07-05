---
title: "A Sweepstake That Runs Itself"
description: "A concrete follow-up to my first Claude Code post: a self-updating World Cup 2026 sweepstake site built with Astro, a Python data pipeline and Monte Carlo odds, with an AI doing the typing while I supply the opinions."
pubDate: 2026-07-05
categories:
  - AI Development
  - Web Development
tags:
  - Claude Code
  - Astro
  - Cloudflare
  - Python
  - Monte Carlo
  - static site
  - GitHub Actions
  - Tailscale
keywords:
  - Claude Code
  - building with AI
  - Astro static site
  - Cloudflare Pages
  - Monte Carlo simulation
  - GitHub Actions pipeline
  - self-updating website
  - AI coding assistant
  - World Cup sweepstake
  - Python data pipeline
  - Tailscale development preview
  - human AI collaboration
draft: false
---

A while ago I wrote about [rebuilding this site with Claude Code](/blog/building-with-claude-code), and how the hardest part was not the code but the writing. This is a follow-up of sorts, and a more concrete one. For the last few weeks I have been running a live World Cup sweepstake for my family, and the whole thing - the table, the odds, a short write-up each morning - is a small website that updates itself. You can see it at [wc26.jeansy.org](https://wc26.jeansy.org).

I want to describe how it is put together, because it turned out to be a good, small example of the pattern I keep coming back to: I bring the ideas and the judgment, and the AI does the actual building.

## The idea

Eight of us, six teams each, all 48 nations of the 2026 World Cup dealt out so that everyone gets a comparable spread of strength. A single league table, points for wins and for progressing through the rounds, and the owner of the eventual champions as the strong favourite. Simple enough to explain across a dinner table, which was the point.

The interesting part is that it is live. As results come in the table moves, the odds re-calculate, and a recap appears each morning. Nobody has to touch it.

## How it runs itself

There is no server and no database, which I say with a straight face as though it were a grand architectural decision rather than a preference for things that cannot fall over at two in the morning.

It is a static website built with Astro. The data - who owns which teams, the scores, the table, the odds - lives in a handful of text files, CSV and JSON, committed straight into the git repository. Storing live data as files in git is either elegant or slightly alarming depending on your taste, but it gives me a complete history for free and nothing to back up.

The moving parts are a few small Python scripts, all standard library, nothing to install:

- one pulls the scores and fixtures from a public feed
- one grabs each team's current strength rating
- one turns results into the league table
- one runs fifty thousand simulated tournaments and writes out the odds

A scheduled job on GitHub wakes up every half hour, runs those scripts in order, commits any changed data back to the repository, rebuilds the site and deploys it to Cloudflare Pages. Every step is deliberately dull. If the feed is down it shrugs and tries again in thirty minutes.

## The part worth admitting

I did not write most of this. I described what I wanted, usually in plain English and often from my phone, and Claude Code did the typing. It uses the same tools I would - git and the GitHub command line for version control, Cloudflare's Wrangler for deploys - so there is no special magic, just an assistant running ordinary commands faster and without the typos. Every change lands as a normal git commit with a message, which means I can always see exactly what it did and undo it when it did something daft. It occasionally did something daft.

The whole thing lives on a Mac mini at home. When I want to check a change before it reaches the family I do not need a laptop: the mini runs a development copy of the site, and Tailscale, a private network that quietly stitches my devices together, lets me open that copy from my phone wherever I am. So the loop is: ask for a change, watch it get built, open a link to check it looks right, and only then let it go live. I have approved more than one fix from a train.

## Where it needed a firm hand

This is the part that matches what I wrote last time. The AI is a brilliant builder and a slightly over-confident one, and most of the value I added was judgment about what was actually right.

Two examples. For about two weeks the odds were quietly wrong. The script that fetches team strength had failed once and overwritten its own data with an empty file, so everything silently fell back to a worse estimate. Nobody noticed until someone asked why France were not the favourites. The fix was obvious once found - refuse to overwrite good data with rubbish - but it is exactly the guardrail you should insist on up front, and I did not.

The other was penalties. A knockout tie that finishes level and goes to a shootout looks like a draw in the raw data, so for a day nobody's team advanced. Neither the AI nor I spotted it until the results stopped making sense.

Both were caught not by cleverness but by paying attention to whether the output felt right. Martin Fowler's "code smells" have a cousin in data: results that do not smell right. Noticing that is still the human's job.

## Why I keep doing it this way

I remain of the view I landed on last time. Knowing the syntax of a language, or the flags of a tool, is a competency and a useful one, but it is not the important thing. The important thing is a tacit sense of what good looks like - simple, robust, fit for purpose - and the patience to challenge a confident answer until it earns its place.

This little sweepstake is a trivial project. But it is a fair miniature of how I now expect to build most things: an old hand with clear requirements and firm opinions, and a tireless, enthusiastic assistant doing the work. I take responsibility for the result and, as before, very little of the credit.

If you want to poke at the code it is on GitHub, and the site itself is at [wc26.jeansy.org](https://wc26.jeansy.org).

---

*The sweepstake toolkit is open source at [github.com/rjeans/wc2026-sweepstake](https://github.com/rjeans/wc2026-sweepstake), and this site's source is at [github.com/rjeans/jeansy.org](https://github.com/rjeans/jeansy.org).*
