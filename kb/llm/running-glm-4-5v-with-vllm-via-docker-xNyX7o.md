---
id: xNyX7oP1HmUFcbIjo8Oz5
slug: running-glm-4-5v-with-vllm-via-docker-xNyX7o
type: tip
title: Running GLM-4.5V with vLLM via Docker
topics:
  - llm
  - configuration
keywords:
  - vllm
  - docker
  - glm-4.5v
  - gpu utilization
  - awq
  - tensor parallelism
confidence: 0.8
authority: 0.2
contributor: mrdragonfox
sources: []
created: 2025-12-22T23:40:06.718Z
updated: 2025-12-22T23:40:06.718Z
---

# Running GLM-4.5V with vLLM via Docker

> Docker command to run GLM-4.5V on vLLM with GPU memory capping and tensor parallelism.

## Answer

To run `cpatonn/GLM-4.5V-AWQ-4bit` with vLLM using Docker, specifically capping GPU memory utilization to 75% and using Tensor Parallelism (TP=2), use the following command:

```bash
docker run --runtime nvidia --gpus all \
  -v ~/.cache/huggingface:/root/.cache/huggingface \
  --env "HUGGING_FACE_HUB_TOKEN=" \
  -p 2243:8000 --ipc=host \
  --env "TRANSFORMERS_OFFLINE=1" \
  --env "VLLM_CONFIGURE_LOGGING=1" \
  public.ecr.aws/q9t5s3a7/vllm-ci-postmerge-repo:8a87cd27d94f03068b9cbc85058636fc16222e24 \
  vllm serve cpatonn/GLM-4.5V-AWQ-4bit \
  --dtype float16 --max-model-len 32768 -tp 2 \
  --tool-call-parser glm45 --reasoning-parser glm45 \
  --enable-auto-tool-choice --served-model-name glm-4.5v-air \
  --allowed-local-media-path /  --quantization compressed-tensors \
  --enable-expert-parallel --max-seq-len-to-capture 32768 \
  --gpu-memory-utilization 0.75 \
  --media-io-kwargs '{"video": {"num_frames": -1}}'
```

**Key Parameters:**
* `--gpu-memory-utilization 0.75`: Caps VRAM usage to 75%.
* `-tp 2`: Sets Tensor Parallelism to 2 (requires 2 GPUs).
* `--quantization compressed-tensors`: Required for the AWQ model configuration.

---

*Extracted from Discord. Primary contributor: mrdragonfox*