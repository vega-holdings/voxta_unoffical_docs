---
id: J-1Tf2wmAPoZ0FzWKWfql
slug: comfyui-workflow-model-path-errors-J-1Tf2
type: troubleshooting
title: Configuring and Troubleshooting ComfyUI Workflows for Voxta
topics:
  - integrations
  - configuration
  - troubleshooting
  - setup
keywords:
  - ComfyUI
  - Voxta
  - workflow
  - API format
  - JSON
  - checkpoint
  - LoRA
  - model
  - path
  - WorkflowsDirectory
  - prompt paths
  - image generation
  - troubleshooting
  - Flux
  - export
  - configuration
  - preset
confidence: 0.9
authority: 0.2
contributor: lapiro
sources:
  - messageId: "1424613240201154643"
    author: lapiro
    timestamp: 2025-12-22T23:34:41.271Z
    url: ""
  - messageId: "1424614171890159676"
    author: lapiro
    timestamp: 2025-12-22T23:34:41.271Z
    url: ""
  - messageId: "1424619363755098122"
    author: lapiro
    timestamp: 2025-12-22T23:34:41.271Z
    url: ""
created: 2025-12-22T23:34:41.271Z
updated: 2025-12-23T13:58:00.519Z
---

# Configuring and Troubleshooting ComfyUI Workflows for Voxta

> Comprehensive guide to integrating ComfyUI workflows with Voxta, covering workflow preparation, API export, directory setup, module configuration, prompt mapping, and resolving common errors.

## Answer

# Configuring and Troubleshooting ComfyUI Workflows for Voxta

Voxta uses ComfyUI workflows defined in JSON files to generate images from chat. To set this up, you must properly prepare the workflow, export it in API format, configure Voxta's ComfyUI module, and map the prompt input. This guide walks you through the entire process and provides solutions to common issues.

## Prerequisites

- ComfyUI installed and running with the local API enabled (usually default).
- Voxta installed and running.

## Step 1: Prepare Your ComfyUI Workflow

### Using Provided vs. Custom Workflows

- **Provided Workflows:** If you have received a workflow file specifically for Voxta (e.g., from a preset pack), **do not open it directly in the ComfyUI interface**. These files are intended to be placed directly into the Voxta directory (see Step 3).
- **Custom Workflows:** If you are building or modifying your own, follow the steps below to prepare it within ComfyUI.

### Download Required Models

Workflows often reference specific checkpoints, LoRAs, or other models. Download the necessary files from the sources provided (e.g., workflow description, video, or official repositories).

### Place Models in Correct Folders

- **Checkpoints**: `ComfyUI/models/checkpoints`
- **LoRAs**: `ComfyUI/models/loras`
- Other model types go into their respective folders (e.g., `VAE`, `upscale_models`). If the workflow expects models in subfolders (e.g., `sdxl/Illustrious/`), either recreate that structure or update the node paths later.

### Open and Configure Workflow in ComfyUI

1. Load the JSON file into ComfyUI (drag & drop or use **Load**). If you are using a packaged workflow (e.g., Visual Novel workflow), ensure you have the latest version.
2. Click the **Refresh** button in ComfyUI to make newly added models appear in dropdowns.
3. In each model node (Checkpoint Loader, LoRA Loader, etc.), select the exact file you want to use. Replace any placeholder or default selections.
4. If the workflow references subfolders, either place your models accordingly or edit the node to point to the correct path.

### Test Locally

Run a generation inside ComfyUI to verify the workflow works correctly. This confirms all models are accessible and nodes are properly configured.

### Optional: Flux Workflow Setup

If you wish to use the Flux Krea workflow:
1. In ComfyUI, go to **Workflow** → **Browse Templates**, select **Flux**, then **Flux Krea**.
2. Install any missing nodes or models as prompted.
3. Run the workflow once to ensure it works.
4. Save the workflow, restart ComfyUI (recommended), then reload it.

## Step 2: Export Workflow in API Format

Voxta requires the workflow in API-compatible JSON. **Do not use the standard save**; it includes extra metadata that can cause issues.

### Method 1: Using Dev Mode

- Enable Dev Mode: click the gear icon in ComfyUI and toggle **Enable Dev Mode Options**.
- Then use **Save (API Format)** from the file menu.

### Method 2: Export as API

- In the top menu, go to **Workflow** → **Export (API)** and save the JSON file.

Both methods produce the same API‑ready JSON.

## Step 3: Set Up Voxta Directory Structure

Voxta looks for workflow files in a designated directory. By default, this is `Data\ComfyUI\Workflows` inside your Voxta installation.

- Create the folder if it doesn't exist: `Voxta\Data\ComfyUI\Workflows`.
- Copy the exported JSON file (or the provided workflow file) into this folder.

### WorkflowsDirectory Setting

In Voxta's service settings, the `WorkflowsDirectory` parameter defines this path. Ensure it matches the location of your workflow files. If you encounter a *"Could not find a part of the path"* error, verify the setting or use an absolute path directly in the Workflow field (e.g., `C:/Voxta/Data/ComfyUI/Workflows/my_workflow.json`).

## Step 4: Configure the ComfyUI Module in Voxta

1. Open Voxta and go to **Modules**.
2. Find the **ComfyUI** module and open its configuration.
3. Set **Server URL** to your ComfyUI address (e.g., `http://localhost:8188` or `http://localhost:8000`).
4. Set **Workflow Path** to the directory containing your JSON files (e.g., `Data\ComfyUI\Workflows`).
5. Under **Preset for image generation**, select your workflow JSON file from the dropdown. (Note: The preset file is used specifically for the Voxta ComfyUI module configuration).
6. Set the desired **Image Dimensions** (e.g., 1024×1024).

## Step 5: Map Prompt Paths

Voxta needs to know where to inject the user's prompt into the workflow JSON. This is done by specifying the JSON path to the text input node.

- In the **Prompt Paths** section of the ComfyUI module configuration, define the path using the pattern `$.<NodeID>.inputs.<Field>`.
- To find the Node ID, open the exported JSON file and look for the node that accepts the prompt (e.g., a CLIP Text Encode node). The ID is the numeric value of the node's `id` field.
- Example: `$.45.inputs.text` maps the prompt to the `text` input of node with ID 45.
- You can also map additional parameters like negative prompt, seed, etc., using the same pattern.

## Step 6: Generate Images

Save the configuration and ensure the module is enabled. In chat, use the `/image` command followed by your prompt to generate an image.

## Troubleshooting Common Errors

### "Checkpoint not found" / "LoRA not found"

- Verify model files are in the correct folders (Step 1).
- In ComfyUI, check that model nodes point to the exact filenames (including extension).
- If the workflow expects subfolders, either recreate the subfolder structure or edit the node to use the root folder.
- Test the workflow locally; if it works in ComfyUI but fails in Voxta, re‑export using **Save (API Format)**.

### "Could not find a part of the path"

- Confirm the `WorkflowsDirectory` setting points to the correct folder and that the JSON file exists there.
- Alternatively, provide the full absolute path to the workflow file in the Workflow field.

### Workflow works in ComfyUI but fails in Voxta

- Always export using **API format** (Step 2). Standard saves cause compatibility issues.
- Ensure all model nodes are set to valid files; no placeholders.
- Check the ComfyUI console for detailed error messages; they often indicate missing files or incorrect paths.
- If you changed model selections, remember to re‑export and replace the JSON file.

### Other Issues

- Mismatched model types (e.g., using an SD1.5 checkpoint in an SDXL workflow) can cause errors; verify compatibility.
- For Flux workflows, ensure all dependencies are installed and the workflow runs correctly within ComfyUI before exporting.

## Additional Tips

- Keep your workflows up to date; updates may fix path issues or improve compatibility.
- After adding new models, click **Refresh** in ComfyUI to make them appear in dropdowns.
- If you modify the workflow (e.g., change model selections), re‑export and replace the JSON file in Voxta.
- For complex workflows, consider using the **Export as API** option from the Workflow menu to avoid missing metadata.

By following these steps, you can successfully integrate ComfyUI workflows with Voxta and resolve most common issues. For further assistance, consult the Voxta and ComfyUI documentation.

---

*Extracted from Discord. Primary contributor: lapiro*