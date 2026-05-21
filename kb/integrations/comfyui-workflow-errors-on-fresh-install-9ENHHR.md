---
id: 9ENHHRAyNV3mCqGTVW6do
slug: comfyui-workflow-errors-on-fresh-install-9ENHHR
type: troubleshooting
title: "Troubleshooting ComfyUI Workflow Errors: Missing Nodes and Dependencies"
topics:
  - integrations
  - troubleshooting
keywords:
  - ComfyUI
  - workflow
  - missing nodes
  - dependencies
  - custom nodes
  - extensions
  - troubleshooting
  - debug
  - image generation
  - power lora
confidence: 0.8
authority: 0.2
contributor: reignmocap
sources:
  - messageId: "1424163447481831585"
    author: reignmocap
    timestamp: 2025-12-22T23:33:52.083Z
    url: ""
  - messageId: "1424166255346057228"
    author: reignmocap
    timestamp: 2025-12-22T23:33:52.083Z
    url: ""
created: 2025-12-22T23:33:52.083Z
updated: 2025-12-23T02:35:16.533Z
---

# Troubleshooting ComfyUI Workflow Errors: Missing Nodes and Dependencies

> When importing a ComfyUI workflow, errors often occur due to missing custom nodes or extensions. This guide shows how to identify and install the required dependencies.

## Answer

# Problem\n\nWhen you import a ComfyUI workflow (e.g., from a shared JSON file), you may encounter errors or see nodes highlighted in red. This typically happens because the workflow relies on custom nodes or extensions that are not installed in your ComfyUI environment, especially on a fresh installation.\n\n# Solution\n\nTo resolve these errors, you need to identify and install the missing dependencies.\n\n## Steps\n\n1. **Import the workflow** into the ComfyUI web interface. If you're using an integration that automatically loads a workflow, you can also manually import the JSON file via the ComfyUI UI.\n\n2. **Identify missing nodes**: After importing, any nodes that are missing will appear in red. Hover over them to see the node type name (e.g., \"Power Lora Loader\").\n\n3. **Install the required extensions**: For each missing node type, you need to install the corresponding custom node extension. The easiest way is to use the [ComfyUI Manager](https://github.com/ltdrdata/ComfyUI-Manager) to search for and install nodes. Alternatively, you can manually install from the node's repository.\n\n4. **Install specific dependencies**: Some nodes require additional files, such as LoRA models (e.g., \"power lora\" files). Ensure these are placed in the correct directories (e.g., `ComfyUI/models/loras/`). Refer to the node's documentation for details.\n\n5. **Restart ComfyUI**: After installing new nodes or models, restart ComfyUI to ensure they are loaded.\n\n6. **Reload the workflow**: Once all dependencies are installed, reload or re-import the workflow. The red nodes should now be normal, and the workflow should run without errors.\n\nIf you continue to have issues, check the ComfyUI console for error messages, which may provide more details about missing files or version mismatches.

---

*Extracted from Discord. Primary contributor: reignmocap*