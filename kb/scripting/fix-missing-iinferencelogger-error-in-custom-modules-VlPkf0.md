---
id: VlPkf0277DdM8Hk0aAvMN
slug: fix-missing-iinferencelogger-error-in-custom-modules-VlPkf0
type: troubleshooting
title: Fix missing IInferenceLogger error in custom modules
topics:
  - scripting
  - troubleshooting
keywords:
  - IInferenceLogger
  - CS0246
  - dotnet build
  - module
  - custom service
  - GenerateImageResult
  - Voxta.Abstractions
confidence: 0.9
authority: 0.2
contributor: a1os353
sources: []
created: 2025-12-22T23:33:40.079Z
updated: 2025-12-22T23:33:40.079Z
---

# Fix missing IInferenceLogger error in custom modules

> Resolve CS0246 errors for IInferenceLogger by adding the Voxta.Abstractions.Diagnostics namespace.

## Answer

This error indicates missing `using` statements in your C# code. `IInferenceLogger` is located in the Diagnostics namespace of the Abstractions package.

To resolve this, add the following directive to your file:
```csharp
using Voxta.Abstractions.Diagnostics;
```

---

*Extracted from Discord. Primary contributor: a1os353*