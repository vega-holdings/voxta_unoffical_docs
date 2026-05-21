---
id: gS9xGCePwXEBKqVvPAkag
slug: scenario-action-syntax-error-expecting-gS9xGC
type: troubleshooting
title: "Scenario Syntax Errors: Expecting ';' or ':'"
topics:
  - scripting
  - troubleshooting
  - configuration
keywords:
  - syntax error
  - semi-colon
  - colon
  - scenario
  - action
  - validation
  - insert effect
  - scenario_char
  - scenario configuration
confidence: 0.8
authority: 0.2
contributor: djsoapyknuckles
sources: []
created: 2025-12-23T00:06:28.528Z
updated: 2025-12-23T03:27:42.651Z
---

# Scenario Syntax Errors: Expecting ';' or ':'

> Diagnose and fix common syntax errors in scenario actions and configuration, such as missing semicolons before closing braces or missing colons after identifiers like scenario_char.

## Answer

## Introduction

When editing scenario actions or configuration, you may encounter syntax errors like `Expecting ';'` or `Expecting colon after scenario_char`. These errors indicate missing punctuation in your scenario script.

## Common Errors

### Missing Semicolon (`Expecting ';'`)

This error often appears in scenario action scripts, such as an **Insert Effect** action. It typically means a semicolon is missing before a closing brace (`}`) in the code.

### Missing Colon (`Expecting colon after scenario_char`)

This error indicates a misconfiguration in a character name, event, or action within a scenario. It usually means a required colon is missing after an identifier like `scenario_char`.

## Resolution Steps

1. **Review your scenario actions** for missing semicolons, especially before closing braces.
2. **Check your scenario configuration** for missing colons, particularly after fields like `scenario_char`.
3. **Use the scenario validation feature** to help flag syntax errors. Note that validation may not catch every instance, so manual review is still recommended.

## Additional Tips

- Pay close attention to the exact line and character indicated in the error message (if provided).
- Ensure all required punctuation is present according to the scenario language specification.
- For complex scripts, consider breaking them into smaller parts to isolate the error.

By carefully checking for missing semicolons and colons, you can resolve these common syntax issues and ensure your scenario runs correctly.

---

*Extracted from Discord. Primary contributor: djsoapyknuckles*