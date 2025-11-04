---
title: "Testing the Skills of AI: What a Jet Ski Taught Me About the Limits of AI Coding"
description: "An exploration of how AI coding assistants perform on a classic Arduino microcontroller challenge — and what their limitations reveal about human intuition, learning, and problem-solving."
pubDate: 2025-11-04
tags: 
  - AI coding
  - large language models
  - Arduino
  - microcontroller
  - automation
  - AI tools
  - software development
  - machine learning
  - human creativity
  - coding with AI
keywords:
  - AI coding assistants
  - Jet Ski microcontroller project
  - Arduino ignition timing
  - Claude Code
  - GPT coding limitations
  - AI in software engineering
  - human vs AI problem solving
  - machine learning in development
  - AI productivity tools
  - lessons from AI coding
---
# Testing the Skills of AI: What a Jet Ski taught me about the limits of AI coding

<!--
**Hook:**  
[Open with a specific observation or moment.]
-->

When Tim sent the first video of the Jet Ski engine running, I realised that my AI coding assistant was out of its depth. Before that, I’d been spending spare time exploring AI coding platforms and agents. I’m a fan. The capabilities are astounding - they never sleep and are always polite, sometimes to the point of sycophancy.

But there are limits. In this piece, I wanted to talk about a problem that the AI struggled with and what that taught me about the limits of the current models. It also resonated with another key theme for me: The importance of the human side of the keyboard in the relationship.

Specifically, it was a problem from the Jet Ski that my brother is restoring. He asked me if I could look at the microcontroller code for the electronic ignition. ‘Sure,’ I thought, with a trusty army of AI assistants and a few Arduino projects behind me - this would be a breeze. 

<!--
**Context:**  
[Why this issue matters. What’s the common misconception?]
-->

AI coding agents promise to democratise development, and the hype is everywhere. But others remind us that the models don’t really ‘think’ at all - they are pattern machines, dependent on the data on which they have been trained. I stumbled across a fascinating Substack article by Gary Marcus entitled [Game Over. AGI is not imminent, and LLMs are not the royal road to getting there](https://open.substack.com/pub/garymarcus/p/the-last-few-months-have-been-devastating?r=35rlp&utm_medium=ios). It is a great antidote to the general hype.

<!--
**Insight:**  
[State your key idea clearly and early.]
->

The Jet Ski project was a perfect way to understand how far these tools can go - and where they begin to fall short.

Here’s what I learnt: AI can describe a problem in convincing detail and explain how to build the solution, but in implementation it remembers its mistakes without learning from them.

The Jet Ski ignition problem is a perfect test case. My brother, Tim, was using an Arduino microcontroller instead of a costly ignition unit. This is a great open-source microcontroller board that is coded in a language almost identical to C++.

Two sensors on the driveshaft send trigger pulses to the Arduino; as the engine accelerates, the pulse rate also goes up. The microcontroller has to trigger a spark along a timing curve. Each pulse occurs roughly 43 degrees before the piston reaches the top dead centre. The spark is fired just ahead of this position so the Jet Ski performs as it should.

To fire, the ignition coil needs about 3 milliseconds (ms) of charge for a strong spark. But if it is charging for more than 40 percent of the time it would overheat. At high speeds, there’s less time, so the system must balance charge and timing.

Other constraints: the 16-bit timer risks overflow; the code is interrupt-driven, so no floating-point maths; and it will accelerate quickly, so timing precision matters for a smooth ride. I told Tim it was the perfect AI challenge, complex but not rocket science. 

The results were... interesting. If you’d like to explore the project repo for your own Jet Ski, please do. I enjoyed working on this problem. I’ll write more on the solution if there is interest. The full repository is on [GitHub](https://github.com/rjeans/rotexign).

<!--
**Example / Evidence:**  
[Show the insight through a short example or story.]
-->

I used Claude Code inside Visual Studio and Claude and I got off to a great start. The project structure was created; we added an MCP for the simulation platform, [Wokwi](https://wokwi.com), and set up all the Arduino development plugins. 

Next, I took my brother’s notes through several rounds of refinement until Claude and GPT had produced a great explanation of the problem. This is a real sweet spot of the tools: synthesising and elaborating design documentation and roadmaps. 

By then, I was confident that AI understood the assignment. It generated the Arduino code. The simulator ran well, so I sent it to Tim for sea trials.

So far so good. But this is where the learning started.

The engine ran, but not well. If this had been a client project, the feedback would not have been so polite. 

Together with the AI, we developed a Python analysis script to take the output of the simulation and plot the timing curve and errors. For different simulation test cases, this gave us a quantifiable benchmark for how well the code was operating.

The AI diagnosed the errors and offered convincing summaries of what went wrong and how to resolve it. 

But we tried multiple iterations and each time there was a slightly different problem. The AI would be confident that the solution was good but every time, the results were not good enough. Each fix introduced a new fault; we were chasing problems, not improving the solution.

More than once, we came back to the same solution, clearly going around in circles. Despite asking the model to “take a step back” and “think deeply”, we didn’t make progress.

It became clear the system could remember mistakes but not learn from them.

Relying on AI distanced me from the problem. To guide it well, I had to understand the code and the engineering problem more deeply, and at some point, it became faster to just develop it manually.

Still, using the AI as an assistant had real benefits. For instance, I wanted to add a ring buffer to provide effective diagnostics - I simply had to ask and it was added. If I needed to refactor a namespace then I just asked. Keeping the documentation up to date was a single command. Interestingly, the AI could understand what I’d implemented and why - even if it didn’t understand how I’d arrived at the solution.

But when it came to refining the algorithm and structure, I had to take the lead. Iterating by understanding the diagnostics and measurements, being curious about the results, trying solutions based on my intuition of what was required, and then updating the code until the solution was watertight.

<!--
**Implication:**  
[Explain what this changes, or what to take away.]
-->

Here’s what I learnt. Large Language Models (LLMs) have real skills and knowledge. They’re a game-changer in productivity and ease of development. They are also hugely convincing in their ability to explain a problem and propose a solution.

But that power is mostly at the language level. For many problems where the outcome is clear and the solution is a variation on something known and decomposed, the models are impressive. 

When it comes to curiosity, intuition, and learning from failure, the models still struggle. They know what a mistake is, but they don’t learn from it. For me, that’s the key lesson.

<!--
**Closing reflection:**  
[Return to your opening tension or question — close with perspective.]
-->

AI is a tireless, knowledgeable, skilful, and articulate machine - not a curious, adaptive, and insightful apprentice. AI coding still needs a human hand on the throttle and help to feel its way through a problem. 

Perhaps that will be next. Organic intelligence has yet to be engineered out. 