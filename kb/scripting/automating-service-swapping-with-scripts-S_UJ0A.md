---
id: S_UJ0AIoWaYCRUOIvvBp7
slug: automating-service-swapping-with-scripts-S_UJ0A
type: tip
title: Automating Service Swapping with Scripts
topics:
  - scripting
  - configuration
keywords:
  - automation
  - service swapping
  - profiles
  - userscripts
  - python
  - voxta_tools
confidence: 0.8
authority: 0.2
contributor: daisukearamaki
sources:
  - messageId: "1336820840599126026"
    author: daisukearamaki
    timestamp: 2025-12-22T20:25:12.511Z
    url: ""
created: 2025-12-22T20:25:12.511Z
updated: 2025-12-22T20:25:12.511Z
---

# Automating Service Swapping with Scripts

> Use community scripts to automatically swap Voxta services and settings when loading specific characters.

## Answer

Community scripts can be used to automate changing Voxta settings and services based on the loaded character or specific triggers.

* **Auto-Service Swapping**: The script `voxta_auto-service.js` uses userscripts to automatically swap services when a chat loads. You define the service IDs and character IDs within the script to map specific configurations to characters.
* **Load Defaults**: The script `voxta_load_defaults.py` swaps all settings to a specific configuration. It can be triggered by external tools (like Noxy) when a character is loaded.

Scripts are available in the [vega-holdings/voxta_tools](https://github.com/vega-holdings/voxta_tools) repository.

---

*Extracted from Discord. Primary contributor: daisukearamaki*