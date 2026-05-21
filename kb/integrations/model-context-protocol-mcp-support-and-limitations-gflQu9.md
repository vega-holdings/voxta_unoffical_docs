---
id: gflQu9pZSffGgTLeWKdlS
slug: model-context-protocol-mcp-support-and-limitations-gflQu9
type: reference
title: Model Context Protocol (MCP) Support and Limitations
topics:
  - integrations
  - scripting
keywords:
  - MCP
  - Model Context Protocol
  - external software
  - function calling
  - action inference
  - nested objects
confidence: 0.9
authority: 0.2
contributor: acidbubbles
sources:
  - messageId: "1395894907813756938"
    author: acidbubbles
    timestamp: 2025-12-22T23:08:05.175Z
    url: ""
  - messageId: "1395950399269109901"
    author: acidbubbles
    timestamp: 2025-12-22T23:08:05.175Z
    url: ""
created: 2025-12-22T23:08:05.175Z
updated: 2025-12-22T23:08:05.175Z
---

# Model Context Protocol (MCP) Support and Limitations

> Details on Voxta's current implementation of the Model Context Protocol (MCP), including supported types and known limitations.

## Answer

Voxta includes integration for the Model Context Protocol (MCP), which allows external software to communicate with the AI (similar to Action Inference). 

### Supported Features
* **Basic Types:** String, number, boolean, and arrays.
* **Functionality:** Function calling, text responses, and image responses.

### Current Limitations
* Does not fully support the entire MCP specification yet.
* **Unsupported:** Requests back to the user, nested objects in queries, and annotations.

The integration works by connecting to the MCP server, retrieving the list of available functions and descriptions, presenting them to the AI, and executing calls based on the AI's decisions.

---

*Extracted from Discord. Primary contributor: acidbubbles*