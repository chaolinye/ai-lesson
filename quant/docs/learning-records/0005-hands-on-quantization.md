# LR-0005: 动手量化实战已完成

用户已完成使用 llama.cpp 量化真实模型的完整流程：下载 F16 GGUF → llama-quantize → 多类型对比 → 推理验证。理解了量化在真实世界中的效果（文件大小变化、推理质量差异）。

**Prior knowledge established:**
- 能独立完成从 HuggingFace 下载模型到量化的全流程
- 理解各种 K-Quant 类型的实际压缩比
- 知道如何用 llama-cli 进行推理测试
- 知道 GPU offloading (-ngl) 的实际用法
- 理解 bitsandbytes 的"加载时即时量化"概念（作为对比方案）

**Implications:**
- 用户现在可以自主量化任意 GGUF 模型
- 后续可以探索更大模型的量化部署（7B/13B）
- 可以进入 Ollama、llama-server 等部署工具的学习
