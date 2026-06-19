# LR-0004: GGUF & K-Quants 已建立

用户已理解 GGUF 是文件格式（非量化算法），K-Quant 是其使用的层级量化方案（两层级 block + sub-block），以及如何根据硬件选择 Q4_K_M / Q5_K_M 等量化类型。

**Prior knowledge established:**
- 明确区分「量化算法」（GPTQ/AWQ）与「文件格式」（GGUF）的概念差异
- 理解 K-Quant 的混合精度分配策略（不同层不同 bit）
- 理解 GPU offloading 的概念和意义
- 知道 Q4_K_M 是本地部署的黄金标准

**Implications:**
- 下节课进入实战环节——动手跑通完整的量化流程
- 用户现在有足够知识来理解各种量化方案的适用场景
