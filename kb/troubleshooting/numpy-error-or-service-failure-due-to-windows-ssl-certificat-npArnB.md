---
id: npArnBifPkSiuFKYeuCwB
slug: numpy-error-or-service-failure-due-to-windows-ssl-certificat-npArnB
type: troubleshooting
title: Numpy Error or Service Failure due to Windows SSL Certificates
topics:
  - troubleshooting
  - setup
keywords:
  - numpy
  - ssl
  - certificates
  - windows
  - python
  - whisper
  - llama
  - dependencies
confidence: 0.8
authority: 0.2
contributor: jmurdoch
sources:
  - messageId: "1327029739415797872"
    author: jmurdoch
    timestamp: 2025-12-19T05:12:15.191Z
    url: ""
created: 2025-12-19T05:12:15.191Z
updated: 2025-12-19T05:12:15.191Z
---

# Numpy Error or Service Failure due to Windows SSL Certificates

> Fix for Numpy errors caused by Python module installation failures related to Windows SSL certificates.

## Answer

This issue may occur if Python fails to install all required modules due to Windows SSL certificate errors preventing dependencies from downloading.

**Symptoms:**
- Services report as installed but fail during dialogue.
- 'Numpy' errors appear in logs.

**Solution:**
One user resolved this by addressing the SSL certificate handling in Python. They referenced a fix involving `ssl.py` found in this discussion: [Sygil-Dev Discussion #1325](https://github.com/Sygil-Dev/sygil-webui/discussions/1325).

Ensure your Windows root certificates are up to date and that Python can access them to download dependencies correctly.

---

*Extracted from Discord. Primary contributor: jmurdoch*