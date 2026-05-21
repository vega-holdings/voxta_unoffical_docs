---
id: jdKrp2Z9pS8VxHNNFJ6un
slug: recovering-local-data-after-drive-failure-jdKrp2
type: qa
title: Recovering local data after drive failure
topics:
  - troubleshooting
  - configuration
keywords:
  - backup
  - restore
  - Voxta.db
  - database
  - lost data
  - hard drive failure
confidence: 1
authority: 0.2
contributor: futurestorm
sources:
  - messageId: "1390112288890949755"
    author: futurestorm
    timestamp: 2025-12-22T23:06:12.099Z
    url: ""
created: 2025-12-22T23:06:12.099Z
updated: 2025-12-22T23:06:12.099Z
---

# Recovering local data after drive failure

> Explains that user data is stored locally in Voxta.db and cannot be recovered via subscription if the file is lost.

## Answer

No, your subscription level does not affect data recovery for local files. User-created characters, chat history, and settings are stored locally in the `Data/Voxta.db` file within your Voxta installation folder.

If this file is lost (e.g., due to a hard drive failure) and you do not have a backup, the data is permanently lost. You can re-download the Voxta Server and official assets (like scenes or plugins) from the portal based on your tier, but your personal characters and chats will be gone.

---

*Extracted from Discord. Primary contributor: futurestorm*