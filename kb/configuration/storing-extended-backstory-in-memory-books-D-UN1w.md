---
id: D-UN1wagnC4QHGbSi-K8Q
slug: storing-extended-backstory-in-memory-books-D-UN1w
type: qa
title: Optimizing LLM Memory and Context to Handle Large Backstories and Prevent
  Forgetting/Hallucinations
topics:
  - configuration
  - llm
  - troubleshooting
keywords:
  - memory book
  - backstory
  - context
  - context tokens
  - hallucination
  - temperature
  - forgetting
  - max memory window entries
  - active context
  - chromadb
  - token limits
  - "8192"
  - long-term memory
confidence: 1
authority: 0.2
contributor: try4ce
sources: []
created: 2025-12-22T21:07:39.697Z
updated: 2025-12-23T13:32:21.178Z
---

# Optimizing LLM Memory and Context to Handle Large Backstories and Prevent Forgetting/Hallucinations

> Learn how to use Memory Books for extensive backstory, adjust max context tokens and temperature to prevent forgetting and hallucinations, and configure Max Memory Window Entries to balance memory recall with token limits.

## Answer

# Optimizing LLM Memory and Context

When interacting with large language models (LLMs) in character-based applications, managing the limited context window is crucial. This guide covers key strategies: using Memory Books to store extensive backstory, adjusting context token limits and temperature to prevent forgetting and hallucinations, and configuring Max Memory Window Entries to control how many memories are loaded into the active context.

## Memory Books for Extended Backstory

Memory Books serve as a supplemental memory system that allows the AI to retain and reference information beyond the immediate active context limits. By storing large amounts of backstory or context in a Memory Book, you ensure the LLM can access this information on-demand when relevant topics arise, preventing it from being lost or overwhelming the active context window.

- Memory Books are especially useful for novels, long-term memory, or detailed character backgrounds.
- The LLM retrieves entries from the Memory Book automatically based on conversation relevance.

## Context Token Limits and Temperature

Forgetting context or hallucinating responses often stems from configuration settings related to context limits and randomness.

### Max Context Tokens

The `Max Context Tokens` setting (in the Text Generation preset) defines the maximum number of tokens the model can process in a single request. If this value is too low, the context window fills up quickly—especially with large character cards or scenarios—triggering automatic summarization and causing data loss. A recommended starting value is `8192`, provided your model supports it. Always check your model's maximum context length and set accordingly.

### Temperature

Temperature controls the randomness of the LLM's output. Higher values (e.g., above 1.0) increase creativity but also raise the risk of hallucinations and nonsensical replies. Lower values (e.g., 0.7) make the model more deterministic and focused. If you experience hallucinations, try lowering the temperature.

### Model Quality

The specific LLM you use also matters. Some models are better suited for roleplay and logical consistency. If issues persist, consider switching to a model known for stable performance in conversational contexts.

## Max Memory Window Entries

The `Max Memory Window Entries` setting limits how many specific memory items (from ChromaDB or Memory Books) are loaded into the AI's active context at any given time.

### Key Concepts

- **Active Context:** The AI has a limited capacity (context window, e.g., 4096 or 8192 tokens) to hold information. This space is shared by the character card, scenario, chat history, and retrieved memories.
- **Resource Management:** Each memory entry consumes tokens. Setting this value too high can consume space needed for conversation history, potentially slowing generation or causing the model to crash/hallucinate if the token limit is exceeded.
- **Default and Adaptation:** The default is typically `12`, but the system may load fewer entries if they are long and would exceed the memory token window. Adjust this number based on the average length of your memory entries and the available context tokens.

## Best Practices

- Use Memory Books for extensive backstory to keep the active context lean.
- Set `Max Context Tokens` to the highest value your model can handle without performance degradation.
- Keep `Temperature` moderate (around 0.7) unless you need more creativity.
- Adjust `Max Memory Window Entries` to balance recall and token usage; start with the default and increase only if necessary, monitoring token consumption.
- Regularly test your configuration to ensure the AI remains coherent and context-aware.

---

*Extracted from Discord. Primary contributor: try4ce*