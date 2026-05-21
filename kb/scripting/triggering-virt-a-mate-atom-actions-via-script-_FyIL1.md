---
id: _FyIL1ZuYPZhZrICF_Ia6
slug: triggering-virt-a-mate-atom-actions-via-script-_FyIL1
type: tip
title: Triggering Virt-A-Mate Atom Actions via Script
topics:
  - scripting
  - integrations
keywords:
  - VaM
  - Virt-A-Mate
  - appTrigger
  - AtomControl
  - ToggleOn
  - Action
confidence: 0.9
authority: 0.2
contributor: azrafox
sources: []
created: 2025-12-23T00:07:59.135Z
updated: 2025-12-23T00:07:59.135Z
---

# Triggering Virt-A-Mate Atom Actions via Script

> How to map Virt-A-Mate UI actions to Voxta `chat.appTrigger` commands.

## Answer

To trigger Virt-A-Mate (VaM) actions from Voxta scripts, use `chat.appTrigger` with the `'Action'` event. The arguments correspond to the hierarchy found in VaM's Action triggers.

### Discovery Method
To find the correct arguments for a specific action:
1. Create a **UIButton** in VaM.
2. Select the target Atom.
3. Browse the dropdown menus to identify the **Storable** (e.g., `AtomControl`) and the **Method** (e.g., `ToggleOn`).

### Example: Toggling an Atom
To toggle an object (like a CustomUnityAsset) on or off, target the `AtomControl` storable:

```javascript
// Syntax: chat.appTrigger('Action', 'AtomName', 'StorableName', 'MethodName');
chat.appTrigger('Action', 'CustomUnityAsset#3', 'AtomControl', 'ToggleOn');
```

---

*Extracted from Discord. Primary contributor: azrafox*