---
id: A6X_zYjmkF5SscAkaBIqz
slug: fixing-python-dll-path-on-arch-linux-A6X_zY
type: troubleshooting
title: Fixing Python DLL Path on Arch Linux
topics:
  - setup
  - configuration
  - troubleshooting
keywords:
  - linux
  - arch
  - pythonnet
  - dll
  - appsettings.json
  - path
  - virtualenv
confidence: 0.9
authority: 0.2
contributor: cinnabrad
sources: []
created: 2025-12-22T23:34:33.862Z
updated: 2025-12-22T23:34:33.862Z
---

# Fixing Python DLL Path on Arch Linux

> Correcting the PythonNet DLL path in appsettings.json for Arch Linux users.

## Answer

On Arch Linux (and potentially other distributions), the Python binary location may differ from the default expectation in `appsettings.json`. Arch often places binaries directly in `/usr/lib/` rather than a subfolder.

To fix this, update the `Dll` path in `appsettings.json` under the `Linux` -> `PythonNet` section:

```json
"PythonNet": {
  "Dll": "/usr/lib/libpython{version_minor}.so",
  "Mode": "VirtualEnv",
  "SitePackages": "{path}/lib/python{version_minor}/site-packages"
}
```

You can verify the correct path to your binary by activating your virtual environment and running:
```bash
python -c "import sysconfig,os;print(os.path.join(sysconfig.get_config_var('LIBDIR'), sysconfig.get_config_var('LDLIBRARY')))"
```

---

*Extracted from Discord. Primary contributor: cinnabrad*