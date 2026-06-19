# LR-0003: AWQ 核心思想已建立

用户已理解 AWQ 的核心创新——利用激活值统计识别 salient channels（~1%），通过 per-channel scaling 在量化前保护重要权重，并将缩放因子吸收到上一层权重中实现零开销推理。

**Prior knowledge established:**
- 理解 LLM 激活值 outlier 现象及其对量化的影响
- 理解 AWQ 与 GPTQ 的哲学差异（保护 vs 补偿）
- 理解 per-channel scaling 和 folding into previous layer 的技巧
- 知道 AWQ 是 GPU-only、vLLM 原生支持的格式

**Implications:**
- 下节课进入 GGUF & K-Quants——CPU/GPU 混合推理的王者
- Lesson 5 可以做一个 GPTQ vs AWQ vs GGUF 的横向对比总结
