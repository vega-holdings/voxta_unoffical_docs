---
id: OFu7CUl6vTcLyPGqrVZ0x
slug: voxta-service-architecture-and-local-execution-OFu7CU
type: qa
title: Voxta Service Architecture and Local Execution
topics:
  - setup
  - llm
  - configuration
keywords:
  - architecture
  - llama.cpp
  - service bus
  - local
  - cloud
  - hardware resources
confidence: 0.9
authority: 0.2
contributor: daisukearamaki
sources:
  - messageId: "1448863613376004261"
    author: daisukearamaki
    timestamp: 2025-12-23T00:00:04.549Z
    url: ""
  - messageId: "1448872343110942782"
    author: daisukearamaki
    timestamp: 2025-12-23T00:00:04.549Z
    url: ""
created: 2025-12-23T00:00:04.549Z
updated: 2025-12-23T00:00:04.549Z
---

# Voxta Service Architecture and Local Execution

> Voxta orchestrates services like llama.cpp or cloud providers rather than running models directly, allowing multiple concurrent services if hardware permits.

## Answer

Voxta acts as the "glue and bus" for various services, managing the backend and connections rather than running the heavy AI models directly. You can use local backends like **llama.cpp** or cloud services to handle the workload. Additionally, you can install and run multiple services simultaneously provided your hardware has sufficient power.

---

*Extracted from Discord. Primary contributor: daisukearamaki*