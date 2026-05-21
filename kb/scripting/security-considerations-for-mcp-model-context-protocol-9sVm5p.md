---
id: 9sVm5pG8MTy4bK42f4qTb
slug: security-considerations-for-mcp-model-context-protocol-9sVm5p
type: tip
title: Security Considerations for MCP (Model Context Protocol)
topics:
  - scripting
  - llm
keywords:
  - MCP
  - Model Context Protocol
  - security
  - agent model
  - tools
confidence: 0.6
authority: 0.2
contributor: djsoapyknuckles
sources: []
created: 2025-12-23T00:07:53.480Z
updated: 2025-12-23T00:07:53.480Z
---

# Security Considerations for MCP (Model Context Protocol)

> Use capable models and user intervention when using MCP to prevent security risks.

## Answer

When utilizing the MCP (Model Context Protocol) module, performance and safety are highly dependent on using a capable agent model. Allowing a model to execute tools on a local desktop carries significant risk, particularly with lower-quality models. It is recommended to use a user-intervention layer rather than granting the LLM autonomous access to run tools.

---

*Extracted from Discord. Primary contributor: djsoapyknuckles*