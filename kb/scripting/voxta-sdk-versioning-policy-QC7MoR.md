---
id: QC7MoRyF4g-huVrICmMEU
slug: voxta-sdk-versioning-policy-QC7MoR
type: qa
title: Voxta SDK Versioning and Updates
topics:
  - scripting
  - integrations
keywords:
  - SDK
  - .csproj
  - update
  - c#
  - version
  - API
  - NuGet
confidence: 0.9
authority: 0.2
contributor: acidbubbles
sources:
  - messageId: "1448132888137564191"
    author: acidbubbles
    timestamp: 2025-12-22T23:59:17.312Z
    url: ""
created: 2025-12-22T23:59:17.312Z
updated: 2025-12-23T13:58:34.097Z
---

# Voxta SDK Versioning and Updates

> Details the SDK versioning policy, noting that builds are released only when API changes occur, and provides instructions for updating the SDK version via the `.csproj` file.

## Answer

### Versioning Policy
The Voxta SDK is not updated with a new build unless there are actual API changes that require it. This ensures stability for existing integrations, meaning the version number remains static until functional modifications are necessary.

### How to Update
To update the Voxta SDK to a newer version, you must manually modify the version number specified in your project's `.csproj` file.

> **Note:** Version numbers change over time. While version 114 and version 152.3 have been referenced in different contexts, always verify the latest available version for your specific project requirements.

---

*Extracted from Discord. Primary contributor: acidbubbles*