---
id: RasRW8qPJOtyqnfV_d4xv
slug: dockerfile-example-for-voxta-server-linux-cuda-RasRW8
type: reference
title: Dockerfile Example for Voxta Server (Linux/CUDA)
topics:
  - setup
  - configuration
keywords:
  - docker
  - linux
  - ubuntu
  - cuda
  - llama-cpp-python
  - ffmpeg
  - python 3.12
confidence: 0.8
authority: 0.2
contributor: mrdragonfox
sources: []
created: 2025-12-22T23:12:13.143Z
updated: 2025-12-22T23:12:13.143Z
---

# Dockerfile Example for Voxta Server (Linux/CUDA)

> Example Dockerfile for deploying Voxta Server on Linux with NVIDIA GPU support.

## Answer

The following `Dockerfile` example can be used to set up Voxta Server on Linux using an NVIDIA CUDA base image (Ubuntu 24.04). It installs necessary system dependencies (Python 3.12, FFmpeg, OpenAL) and Python packages including `llama-cpp-python` with CUDA support.

```dockerfile
FROM nvidia/cuda:12.9.0-cudnn-devel-ubuntu24.04

COPY ./Voxta/. /app/

RUN apt update && apt install -y software-properties-common
RUN apt-add-repository ppa:deadsnakes/ppa -y
RUN apt update
RUN apt upgrade -y
RUN DEBIAN_FRONTEND=noninteractive apt install python3.12 python3.12-dev python3.12-venv python3-pip -y
RUN apt install ffmpeg libopenal-dev git -y
RUN python3.12 -m venv /app/Data/Python/python-3.12-venv
RUN . /app/Data/Python/python-3.12-venv/bin/activate && pip install snac tokenizers soundfile librosa transformers ffmpeg
RUN . /app/Data/Python/python-3.12-venv/bin/activate && CMAKE_ARGS="-DGGML_CUDA=on" pip install llama-cpp-python

WORKDIR /app
```

---

*Extracted from Discord. Primary contributor: mrdragonfox*