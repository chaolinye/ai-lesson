# LR-0002: GPTQ 核心思想已建立

用户已理解 GPTQ 的核心创新——利用 Hessian 矩阵（二阶梯度信息）来指导量化，每量化一个权重后通过调整剩余权重来补偿误差，而非独立舍入。

**Prior knowledge established:**
- 理解朴素量化（round-to-nearest）的局限性
- 理解 Hessian 矩阵的直觉含义（敏感度 + 权重间耦合）
- 理解"量化 + 补偿"的循环机制
- 知道 group_size 是精度控制的关键参数

**Implications:**
- 下节课进入 AWQ——从不同角度（激活值感知 + per-channel scaling）解决相同问题
- 后续可以做 GPTQ vs AWQ 的对比
