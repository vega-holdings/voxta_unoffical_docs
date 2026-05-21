---
id: o6l9mt7vP_ebAiCPsqz-J
slug: whitelisting-voxta-in-virt-a-mate-vam-o6l9mt
type: tip
title: Whitelisting Voxta in Virt-a-Mate (VAM)
topics:
  - integrations
  - configuration
keywords:
  - VAM
  - Virt-a-Mate
  - whitelist
  - whitelist_domains.json
  - connection
  - "5384"
confidence: 0.6
authority: 0.2
contributor: .frond
sources: []
created: 2025-12-22T22:50:46.875Z
updated: 2025-12-22T22:50:46.875Z
---

# Whitelisting Voxta in Virt-a-Mate (VAM)

> Add 127.0.0.1:5384 to VAM's whitelist_domains.json to enable connection.

## Answer

To ensure Voxta can communicate with Virt-a-Mate (VAM), you must add the Voxta server address to VAM's security whitelist.

1. Locate the `whitelist_domains.json` file in your VAM installation directory.
2. Add `"127.0.0.1:5384"` to the file.

---

*Extracted from Discord. Primary contributor: .frond*