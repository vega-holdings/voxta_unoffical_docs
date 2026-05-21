---
id: nO9l1aeJpf88wFA--yWXa
slug: regional-decimal-separator-configuration-issue-nO9l1a
type: troubleshooting
title: Regional Decimal Separator Configuration Issue
topics:
  - troubleshooting
  - configuration
keywords:
  - decimal separator
  - comma
  - regional settings
  - locale
  - parsing
  - parameters
confidence: 0.7
authority: 0.2
contributor: lapiro
sources: []
created: 2025-12-22T23:34:37.360Z
updated: 2025-12-22T23:34:37.360Z
---

# Regional Decimal Separator Configuration Issue

> Regional formats using commas as decimal separators can cause parameter parsing errors.

## Answer

If your computer's regional settings use a comma (`,`) as the decimal separator instead of a period (`.`), the application may fail to parse numerical parameters correctly. This is a known issue for users in certain regions. 

**Solution:**
Check your operating system's 'Region' or 'Language' settings and ensure the decimal separator is set to a period (`.`).

---

*Extracted from Discord. Primary contributor: lapiro*