# LLM Quantization Resources

## Knowledge

### 核心论文
- [GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers (Frantar et al., 2023)](https://arxiv.org/abs/2210.17323)
  量化领域的里程碑论文。用 Hessian 矩阵做逐列误差补偿。理解 GPTQ = 理解现代 LLM 量化的根基。

- [AWQ: Activation-aware Weight Quantization for LLM Compression and Acceleration (Lin et al., MLSys 2024 Best Paper)](https://arxiv.org/abs/2306.00978)
  核心 insight：不是所有权重一样重要，激活值大的通道更重要。用 scaling 保护关键权重，不破坏均匀存储格式。

- [QLoRA: Efficient Finetuning of Quantized LLMs (Dettmers et al., 2023)](https://arxiv.org/abs/2305.14314)
  提出了 NF4 数据类型和双重量化，让 4-bit 微调变得可行。使用场景：量化 + 微调。

### 教程 / 指南
- [Hugging Face Quantization Guide](https://huggingface.co/docs/transformers/en/quantization/overview)
  官方文档，涵盖 AWQ、GPTQ、bitsandbytes 的完整用法。代码即文档。

- [A Visual Guide to Quantization — Maarten Grootendorst](https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-quantization)
  用可视化方式解释量化的数学基础。适合第一次接触量化概念。

- [Quantization Fundamentals with Hugging Face — DeepLearning.AI 免费课程](https://learn.deeplearning.ai/courses/quantization-fundamentals)
  动手实操课程，会用到实际模型做量化实验。

- [GGUF Format and K-Quants Explained](https://zeroentropy.dev/concepts/gguf/)
  深入讲解 GGUF 文件格式和 k-quant 的层级量化方案。适合理解 llama.cpp 生态。

- [LLM Quantization Guide — Systems Explained](https://systeminternals.dev/llm/quantization/)
  从系统角度讲 int8/int4/fp8/GPTQ/AWQ/BitNet，偏工程实践。

### 代码仓库
- [llama.cpp](https://github.com/ggml-org/llama.cpp) — GGUF 格式的参考实现，CPU/GPU 混合推理引擎
- [bitsandbytes](https://github.com/bitsandbytes-foundation/bitsandbytes) — 加载时即时量化的 PyTorch 库
- [AutoAWQ](https://github.com/casper-hansen/AutoAWQ) — AWQ 量化的 Python 实现
- [GPTQModel](https://github.com/ModelCloud/GPTQModel) — GPTQ 量化的活跃维护后端（AutoGPTQ 的继任者）
- [vLLM](https://github.com/vllm-project/vllm) — 生产级推理引擎，原生支持 AWQ/GPTQ

### 对比评测
- [Which Quantization Should I Use? (arXiv 2026)](https://arxiv.org/pdf/2601.14277) — llama.cpp 量化方法的统一评测
- [GGUF vs GPTQ vs AWQ vs EXL2: 量化格式对比](https://www.local-llm.net/compare/gguf-vs-gptq-vs-awq-vs-exl2/) — 2026 年的量化格式对比数据

## Wisdom (Communities)

- [r/LocalLLaMA](https://reddit.com/r/LocalLLaMA) — 本地 LLM 社区，讨论量化方案、部署经验、模型推荐
- [Hugging Face 论坛 — Quantization 标签](https://discuss.huggingface.co/c/quantization/) — 技术问题求助
- llama.cpp GitHub Issues/Discussions — 遇到 GGUF 相关问题时的最佳求助地
