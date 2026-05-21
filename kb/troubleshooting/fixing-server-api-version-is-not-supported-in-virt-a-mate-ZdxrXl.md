---
id: ZdxrXlQtbfQrC0RnxPLTV
slug: fixing-server-api-version-is-not-supported-in-virt-a-mate-ZdxrXl
type: troubleshooting
title: How to Fix "Server API version is not supported" Error in Virt-A-Mate (VaM)
topics:
  - troubleshooting
  - integrations
  - setup
keywords:
  - Virt-A-Mate
  - VaM
  - Server API version is not supported
  - NullReferenceException
  - permissions
  - AddonPackages
  - moduleRuntimeInstances
  - version mismatch
  - update
  - plugin
confidence: 0.9
authority: 0.2
contributor: slowhand4338
sources: []
created: 2025-12-22T23:31:25.601Z
updated: 2025-12-23T02:28:41.103Z
---

# How to Fix "Server API version is not supported" Error in Virt-A-Mate (VaM)

> Resolve "Server API version is not supported" errors in Virt-A-Mate by ensuring proper folder permissions, removing conflicting plugins, and matching Voxta Server and plugin versions.

## Answer

# Fixing \"Server API version is not supported\" Error in Virt-A-Mate\n\nThis error indicates a mismatch between your Voxta Server version and the Voxta Plugin version installed in VaM, or it may be caused by file permission issues preventing the plugin from loading correctly.\n\n## Solutions\n\n### 1. Check Installation Location and Permissions\n\nEnsure your Virt-A-Mate folder is **not** in a directory with strict security permissions (such as `C:\\Program Files`). Moving the VaM installation to a neutral location (e.g., `C:\\Games\\VaM` or the root of a drive) can resolve issues where the plugin fails to initialize.\n\n### 2. Remove Old Plugin Versions\n\nNavigate to the `AddonPackages` folder in your VaM installation and ensure only the latest Voxta plugin file is present. Delete any older versions to avoid conflicts.\n\n### 3. Update Voxta Server\n\nDownload and install the latest Voxta Server version to match the plugin's requirements. This is the recommended approach to ensure compatibility.\n\n### 4. Downgrade the Plugin (Alternative)\n\nIf you cannot update the server, you can manually choose a specific plugin version in the VaM HUB that corresponds to your currently installed Voxta Server version.\n\n> **Note:** These steps are not mutually exclusive. It's often beneficial to perform steps 1 and 2 regardless, then ensure the server and plugin versions match (steps 3 or 4).\n\nIf the error persists, check the Voxta logs for more details or seek assistance in the community forums.

---

*Extracted from Discord. Primary contributor: slowhand4338*