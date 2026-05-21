---
id: bpsTXPiXsVWVPu1enfeBv
slug: azure-speech-service-error-log-bpsTXP
type: troubleshooting
title: Azure Speech Service Error Log
topics:
  - troubleshooting
  - integrations
  - configuration
keywords:
  - Azure Speech Service
  - subscription key
  - API key
  - error log
  - manage modules
  - region
confidence: 0.9
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-19T05:39:49.803Z
updated: 2025-12-19T05:39:49.803Z
---

# Azure Speech Service Error Log

> Clarifies that Azure Speech Service errors are usually due to missing API keys/configuration, not Voxta Portal issues.

## Answer

An error log mentioning **Azure Speech Service** typically indicates a missing or invalid **Subscription Key** (API Key) or configuration issue within the Azure module, rather than an issue with the Voxta Portal.

**Resolution Steps:**
1. Ensure the Azure Speech Service module is installed and enabled in **Manage Modules** (or Services).
2. Verify you have entered a valid **API Key** and **Region** (e.g., `eastus`) in the service settings.
3. If using the Free (F0) tier, check if you have exceeded your quota.

---

*Extracted from Discord. Primary contributor: sraura*