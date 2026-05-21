---
id: dGFEjef9755g6rWDTy4UD
slug: editing-scenario-scripts-externally-dGFEje
type: qa
title: Editing Scenario Scripts Externally
topics:
  - scripting
  - configuration
keywords:
  - scenarios
  - scripts
  - external editing
  - export scenario
  - json
  - js files
confidence: 0.8
authority: 0.2
contributor: _kinkyk9
sources: []
created: 2025-12-22T23:36:50.481Z
updated: 2025-12-23T04:41:41.093Z
---

# Editing Scenario Scripts Externally

> Export scenarios to edit their JavaScript code externally; scripts are embedded in the scenario JSON, not stored as separate files. Use the Voxta UI for editing to avoid JSON complexity.

## Answer

# Editing Scenario Scripts Externally

Scenario scripts (JavaScript code) are not stored as separate `.js` files on your disk. Instead, they are embedded within the scenario's data structure, which is saved in the Voxta database (`Voxta.db`). This means you cannot directly locate and edit a script file in the installation folder.

## Exporting a Scenario

To work with a scenario's scripts outside Voxta, you must first export the scenario:

1. Open Voxta and navigate to the Scenarios section.
2. Select the scenario you wish to edit.
3. Click the **Export** button (or similar) to download a JSON file containing the complete scenario data, including all scripts.

The exported JSON file is portable and can be opened in any text editor.

## Editing Scripts in the JSON File

Inside the JSON file, scripts appear as string values under appropriate keys (e.g., `"script"`, `"onStart"`, etc.). You can modify these strings to change the JavaScript code. However, you must be careful to:

- Keep the JSON syntax valid (e.g., escape double quotes and newlines properly).
- Not alter the surrounding JSON structure unintentionally.

Because of these complexities, manually editing the raw JSON is error‑prone and generally not recommended unless you are comfortable with JSON formatting.

## Recommendations

- **Use the Voxta UI** for editing scripts whenever possible. The built‑in script editor handles JSON encoding automatically and provides a safer environment.
- If you need to use an external editor (e.g., for version control or bulk changes), export the scenario, edit the JSON carefully, and then re‑import the updated scenario into Voxta.

Remember: scenario scripts are not stored as standalone `.js` files, so exporting is the only way to access them outside the application.

---

*Extracted from Discord. Primary contributor: _kinkyk9*