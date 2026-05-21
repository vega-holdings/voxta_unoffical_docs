---
id: RVh4rLjlRAE3WKfv61AU9
slug: manually-updating-transformers-library-RVh4rL
type: tip
title: Manually Updating Transformers Library
topics:
  - scripting
  - troubleshooting
keywords:
  - transformers
  - pip
  - venv
  - update
  - python
  - dependencies
confidence: 0.8
authority: 0.2
contributor: mrdragonfox
sources: []
created: 2025-12-22T23:12:49.268Z
updated: 2025-12-22T23:12:49.268Z
---

# Manually Updating Transformers Library

> Command to manually update the transformers library in the Voxta venv.

## Answer

If you need to manually update the `transformers` library within the Voxta environment (e.g. to fix dependency issues), you can source the virtual environment (venv) and run the following command:

```bash
pip install -U transformers
```

This will attempt to update the package to the latest version.

---

*Extracted from Discord. Primary contributor: mrdragonfox*