# Mission: llama.cpp 本地推理、API 服务与参数原理

## Why
你想在 Windows + NVIDIA 5060 Ti 16GB 的本地环境中，用 llama.cpp 跑起大语言模型，并把它作为 OpenAI-compatible API 提供给 Agent 使用。学习重点不是只复制命令，而是理解安装路径、GGUF/量化选择、显存与上下文限制，以及关键运行参数背后的原理。

## Success looks like
- 能在 Windows 上安装或构建带 CUDA 加速的 llama.cpp。
- 能选择合适的 GGUF 模型与量化版本，并解释为什么选它。
- 能启动 `llama-server`，让 Agent 通过 `/v1/chat/completions` 调用本地模型。
- 能解释并调节常用参数：`-m`、`-ngl`、`-c`、`-b`、`-ub`、`-t`、`--temp`、`--top-p`、`--ctx-size`、`--parallel`/`-np` 等。
- 能建立 llama.cpp 推理的核心心智模型：模型权重、KV cache、prompt prefill、token decode、GPU offload、量化之间的关系。

## Constraints
- 系统：Windows。
- 硬件：NVIDIA 5060 Ti 16GB。
- 用户会命令行和 C/C++，了解 Transformer 基本概念。
- 教学偏好：原理优先，再进入实操和调参。

## Out of scope
- 暂不以深入修改 llama.cpp 源码为主线。
- 暂不覆盖云端生产级集群部署、vLLM/TensorRT-LLM 等替代推理框架的系统比较。
