---
id: g5wN5EfqFSCFj546fudlm
slug: fix-for-vam-character-talking-but-not-moving-g5wN5E
type: troubleshooting
title: "Voxta Integration with Virt-A-Mate (VaM): Complete Setup, Usage, and
  Maintenance Guide"
topics:
  - integrations
  - setup
  - configuration
  - troubleshooting
  - maintenance
  - resources
  - characters
keywords:
  - Voxta
  - Virt-A-Mate
  - VaM
  - plugin
  - scenes
  - apartment
  - Discord
  - Patreon
  - tiers
  - Companion Tier
  - Ultimate Tier
  - installation
  - setup
  - troubleshooting
  - missing assets
  - character card
  - import
  - dependencies
  - launch order
  - plugin conflicts
  - logs
  - debugging
  - 401 error
  - AcidBubbles
  - addonpackages
  - vammoan
  - F2
  - VAM Hub
  - Voxta Hub
  - custom scenes
  - VR
  - sandbox
  - MeshedVR
  - atom
  - character setup
  - character list
  - dropdown
  - sync
  - character selection
  - Voxta Desktop App
  - connection
  - home screen
  - active chat
  - keyboard input
  - text chat
  - chat window
  - ActionListManager
  - ALM
  - overlay
  - UI
  - update
  - clean installation
  - var files
  - cleanup
  - performance
  - conflict
  - dll
  - version
  - Voxta Server
  - Voxta Desktop
  - Voxta Cloud
confidence: 1
authority: 0.2
contributor: .vaan20
sources:
  - messageId: "1322733720901390406"
    author: .vaan20
    timestamp: 2025-12-19T03:29:24.055Z
    url: ""
  - messageId: "1322734843175637062"
    author: .vaan20
    timestamp: 2025-12-19T03:29:24.055Z
    url: ""
  - messageId: "1322735446639247432"
    author: .vaan20
    timestamp: 2025-12-19T03:29:24.055Z
    url: ""
  - messageId: "1322736111784693832"
    author: .vaan20
    timestamp: 2025-12-19T03:29:24.055Z
    url: ""
  - messageId: "1322737742785941524"
    author: .vaan20
    timestamp: 2025-12-19T03:29:24.055Z
    url: ""
created: 2025-12-19T03:29:24.055Z
updated: 2025-12-23T04:36:38.641Z
---

# Voxta Integration with Virt-A-Mate (VaM): Complete Setup, Usage, and Maintenance Guide

> Comprehensive guide to integrating Voxta with Virt-A-Mate, covering requirements, resource locations, installation, configuration, text chat, custom scenes, maintenance, and troubleshooting.

## Answer

# Voxta Integration with Virt-A-Mate (VaM)

Virt-A-Mate (VaM) is an adult sandbox application that allows users to create and interact with 3D models. Voxta integrates with VaM via a plugin, providing AI-driven conversations and interactions with characters.

## Requirements

- **Virt-A-Mate**: Purchase or subscribe via [MeshedVR's Patreon](https://www.patreon.com/meshedvr).
- **Voxta Patreon Subscription**:
  - **Companion Tier** (or higher): Grants access to the Voxta VaM Plugin, standard VaM Scenes, and Characters.
  - **Ultimate Tier**: Includes all Companion benefits **plus** the exclusive Voxta Apartment Scene.
- Link your Discord account to your Patreon subscription to access the restricted channels.

## Resource Locations

Voxta resources for VaM are distributed through Discord channels (for Patreon subscribers) and the Voxta Hub. After linking your accounts, download from:

- **Voxta VaM Plugin**: [Plugin Channel](https://discord.com/channels/1125594592180445284/1133193001334751302) (Companion+)
- **Voxta VaM Scenes** (standard scenes): [Scenes Channel](https://discord.com/channels/1125594592180445284/1239137115975979039) (Companion+)
- **Voxta Characters**: [Characters Channel](https://discord.com/channels/1125594592180445284/1239138507537125416) (Companion+)
- **Voxta Apartment Scene**: [Apartment Channel](https://discord.com/channels/1125594592180445284/1240424952306471033) (Ultimate only)

> **Note**: The Apartment Scene is a separate download and not included in the standard scenes package.

Alternatively, the plugin can be downloaded from the Voxta Hub.

## Installation

### Voxta Server

1. Download the latest Voxta Server from the official source.
2. For a clean update, extract the server to a new empty folder (do not overwrite the existing installation).
3. Copy the `Data` folder from your previous Voxta installation into the new folder to preserve settings, characters, and other user data.
4. Run the new Voxta Server. Test its functionality by chatting through the Voxta web interface to confirm it works before integrating with VaM.

### Voxta VaM Plugin

1. Download the latest plugin file (`AcidBubbles.Voxta.XX.var`) from the Discord channels or Voxta Hub.
2. Place the `.var` file in your VaM `addonpackages` folder.
3. **Delete all older Voxta `.var` files** from the `addonpackages` folder to prevent conflicts (e.g., 401 errors). Keep only the most recent version.
4. Ensure the plugin version matches the version of Voxta Server (and Voxta Desktop, if used). Mismatched versions can cause connection failures.

### Scenes and Characters

- Download the desired scenes and characters from the Discord channels or Voxta Hub.
- Place the files in the appropriate VaM directories (refer to VaM documentation).
- If you encounter missing assets (hair, clothing, etc.), use the **VaM Hub** (accessible from within VaM) to scan for and download the required dependencies.

## Adding Voxta to a Scene or Character

To enable Voxta for a specific character in a scene:

1. **Select the Person atom** – In your scene, choose the character you want to use.
2. **Open the Plugins tab** – In the atom's control panel, navigate to the **Plugins** tab.
3. **Add the Voxta plugin** – Click to add a new plugin and select **Voxta** from the list.
4. **Configure the plugin** – Once added, the Voxta plugin interface will appear. It includes a dropdown that lists the characters or scenarios available on your Voxta server (synced automatically when connected).
5. **Start the chat** – Click the **Start New Chat** button to initialize the connection.

For more details, see the official guide: [Adding Voxta to a Scene](https://doc.voxta.ai/vam/adding-voxta-to-a-scene/).

## Connecting Voxta to VaM

Proper launch order is critical:

- **First**, start Voxta Server (and if you are using Voxta Cloud, also start **Voxta Desktop**). Wait until Voxta is fully loaded and on the **Home Screen** (i.e., no active chat session). If a chat is already active, the VaM plugin may fail to connect.
- **Then**, launch VaM and load your scene.
- The Voxta plugin should automatically detect Voxta and establish a connection using default IP and port settings. No manual configuration is needed in most cases.
- Once connected, the Voxta Desktop app may offer an option to join the chat, allowing you to use keyboard input.

## Using Text Chat

You have several options for typing messages:

- **Voxta Desktop Application**: Run the Voxta app in the background and type directly into its chat interface. This works independently of VaM's UI.
- **Voxta Plugin UI**: Inside VaM, the Voxta plugin includes a checkbox to enable a built-in chat window. When enabled, the chat window appears in the VaM interface.
- **ActionListManager (ALM) Plugin**: ALM provides an inspector mode with a text input field. You can also assign plugins to separate Simple Image panels to keep the chat accessible, which is especially useful in VR.

*Note for VR users*: In VR, you may need to keep the inspector open or assign the relevant plugins to separate Simple Image panels to maintain accessibility.

## Custom Scenes

The Voxta plugin can be added to any custom VaM scene. After installing the plugin, follow the same steps as above to integrate Voxta's AI capabilities into your own environments.

## Maintenance and Updates

### Updating Voxta Server

1. Download the latest release.
2. Extract to a new empty folder.
3. Copy the `Data` folder from your previous installation into the new folder.
4. Run the new Voxta Server.

### Updating the Voxta VaM Plugin

1. Ensure you have the latest `.var` file that matches your Voxta Server version.
2. Delete all older Voxta `.var` files from the `addonpackages` folder.
3. Place the new `.var` file in the folder.

### Cleaning the Addonpackages Folder

- Periodically review the `addonpackages` folder and remove duplicate or outdated dependency packages (including but not limited to Voxta). Keeping only the latest versions reduces clutter, improves performance, and avoids conflicts.

## Troubleshooting

### Common Issues

- **401 errors, frozen interface, actions not triggering**: Usually caused by multiple versions of the Voxta plugin. Delete all old `AcidBubbles.Voxta.XX.var` files and keep only the latest.
- **Connection failures**: Ensure the correct launch order: Voxta must be running and on the Home Screen before launching VaM. Also verify that no firewall is blocking the connection.
- **Plugin conflicts**: Some VaM plugins (e.g., `vammoan`) can interfere with Voxta's voice processing. In the Voxta plugin configuration, disable conflicting plugins while the character is speaking, or temporarily disable them for testing.
- **Missing assets (hair, clothing, looks)**: Open **VaM Hub** from within VaM (not the Scene Browser), scan for missing dependencies, and download the required files. Reload the scene.
- **Missing character cards**: Errors like `Could not find a scene dependency of type Character` indicate the character is not imported in Voxta. Import the character card PNG (from Discord or the scene package) via Voxta's Import page or Characters section. Then reload the scene.
- **Plugin version warnings**: Warnings such as `Missing plugin version: voxta.32` can appear if the scene expects a specific version. As long as you have the latest plugin installed and only one version present, you can usually ignore the warning.

### Debugging Steps

- **Isolate the issue**: Test Voxta without VaM (using the web interface) to confirm basic functionality.
- **Check logs**:
  - In the Voxta server window, press **F2** to open the log viewer.
  - Examine VaM logs (located in the VaM installation folder) for errors.
- **Manage plugins**: Ensure only the latest Voxta plugin is present. Download the latest from the Hub or Discord if needed.

### Testing VaM Updates for Compatibility

- Before updating VaM to a new version, install the new version in a separate folder or drive.
- Copy your Voxta plugins and essential assets into the test installation.
- Launch the test instance to verify Voxta works correctly.

## Additional Tips

- Always use the latest Voxta plugin from the official sources (Discord or Voxta Hub).
- After making any changes, restart both Voxta and VaM.
- If problems persist, consult the [Voxta documentation](https://doc.voxta.ai/) or ask for help in the Voxta Discord server.

---

*Extracted from Discord. Primary contributor: .vaan20*