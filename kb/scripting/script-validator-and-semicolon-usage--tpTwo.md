---
id: -tpTwogS75yDn_chKfjnP
slug: script-validator-and-semicolon-usage--tpTwo
type: tip
title: Script Validator and Semicolon Usage
topics:
  - scripting
  - troubleshooting
keywords:
  - javascript
  - syntax
  - semicolon
  - validator
  - error
confidence: 0.6
authority: 0.2
contributor: djsoapyknuckles
sources: []
created: 2025-12-23T00:06:33.505Z
updated: 2025-12-23T00:06:33.505Z
---

# Script Validator and Semicolon Usage

> Ensure statements in scripts end with semi-colons as the validator might miss them.

## Answer

The Voxta script validator may not catch all missing semi-colons. It is recommended to manually verify that all statements end with a semi-colon (`;`), especially lines within `if/else` blocks and the main `trigger` function body. Although JavaScript is lenient, missing semi-colons can cause script failures that the validator does not flag.

---

*Extracted from Discord. Primary contributor: djsoapyknuckles*