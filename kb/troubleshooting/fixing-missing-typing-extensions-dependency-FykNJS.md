---
id: FykNJSKFf-U3Rr0e03u8z
slug: fixing-missing-typing-extensions-dependency-FykNJS
type: troubleshooting
title: Fixing missing typing_extensions dependency
topics:
  - troubleshooting
  - setup
keywords:
  - typing_extensions
  - pip install
  - dependency
  - python
  - error
confidence: 0.9
authority: 0.2
contributor: lapiro
sources:
  - messageId: "1448434735545323541"
    author: lapiro
    timestamp: 2025-12-22T23:59:15.978Z
    url: ""
  - messageId: "1448438235977220268"
    author: lapiro
    timestamp: 2025-12-22T23:59:15.978Z
    url: ""
created: 2025-12-22T23:59:15.978Z
updated: 2025-12-22T23:59:15.978Z
---

# Fixing missing typing_extensions dependency

> Steps to manually install the typing_extensions dependency using the embedded Python executable.

## Answer

If a dependency is missing after a fresh install, you can manually install it using the embedded Python environment.

1. Navigate to the Python folder in your Voxta directory: `Data\Python\python-3.12.9-amd64`
2. Open a Command Prompt in this location (click the address bar, type `cmd`, and press Enter).
3. Run the following command:
   `python.exe -m pip install typing_extensions`

---

*Extracted from Discord. Primary contributor: lapiro*