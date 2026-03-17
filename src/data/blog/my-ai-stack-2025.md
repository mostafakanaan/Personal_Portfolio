---
title: "My AI Stack in 2025: Tools I Actually Use Every Day"
date: "2025-12-15"
excerpt: "I've tried every AI tool under the sun. Here's what survived my ruthless curation process — and why these specific tools made the cut."
coverImage: "/img/myaistack.png"
tags: ["AI", "Productivity", "Tools", "LLM", "Workflow"]
---

# My AI Stack in 2025: Tools I Actually Use Every Day

Everyone has an AI stack now. Most people's "stack" is just ChatGPT with a fancy wrapper. Mine is different — because I actually built parts of it.

## The Principle: Depth Over Breadth

I don't use 30 AI tools. I use 5-6 deeply, and I've integrated them into my actual workflows. The criteria for inclusion:

- **Saves me >30 minutes/week** on a real task
- **Works offline or self-hosted** (privacy matters)
- **Composable** — plays well with other tools

## The Stack

### 1. Claude (Anthropic)

My primary reasoning model. Claude's context window is enormous and its instruction-following is precise. I use it for:

- Code review and architecture discussions
- Writing first drafts that actually sound like me
- Complex multi-step reasoning tasks

```python
import anthropic
client = anthropic.Anthropic()
msg = client.messages.create(
    model="claude-opus-4-5",
    max_tokens=2048,
    messages=[{"role": "user", "content": "Review this architecture decision..."}]
)
```

### 2. Local LLMs via Ollama

For sensitive tasks (client data, personal notes), I run models locally:

```bash
ollama pull llama3.2
ollama run llama3.2
```

The quality gap between local and cloud models has closed dramatically. For most summarization and extraction tasks, a 8B parameter model running on my MacBook is now good enough.

### 3. OpenClaw (Autonomous Agent)

This is my personal AI assistant — running as a persistent agent with memory, file access, and tool use. It handles:

- Heartbeat checks (email, calendar)
- Background research tasks
- Code generation and git operations

### 4. Whisper for Voice Notes

I record voice memos constantly. Whisper transcribes them with near-perfect accuracy, even with my Syrian-German-English accent mix:

```python
import openai
with open("note.m4a", "rb") as f:
    result = client.audio.transcriptions.create(model="whisper-1", file=f)
print(result.text)
```

## What I Dropped

- **GitHub Copilot** — Claude in my editor is better for my workflow
- **Notion AI** — too tightly coupled to Notion's UX
- **Midjourney** — beautiful but I rarely need images in my work

## The Bottom Line

The ROI on AI tools is real, but only if you invest time in *integration* — not just trying them. The tools that stuck are the ones I spent a week truly embedding into how I work.
