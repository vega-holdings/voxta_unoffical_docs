---
id: 2rIKb-ksk3klzmalrBbn6
slug: errors-loading-scenarios-after-upgrade-2rIKb-
type: troubleshooting
title: Errors Loading Scenarios After Upgrade
topics:
  - setup
  - troubleshooting
keywords:
  - upgrade
  - migration
  - formatters
  - resources
  - scenarios
  - formatting
confidence: 0.6
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T23:05:18.729Z
updated: 2025-12-22T23:05:18.729Z
---

# Errors Loading Scenarios After Upgrade

> When upgrading, ensure custom formatting templates in Voxta\Resources\Formatting\ are also migrated if scenarios fail to load.

## Answer

If you are encountering errors with scenarios or formatting after an upgrade, check the `Voxta\Resources\Formatting\` directory. While the standard upgrade process involves copying the `Data` folder, custom formatting templates stored in the Resources folder may also need to be migrated manually if they are missing in the new installation.

---

*Extracted from Discord. Primary contributor: sraura*