# LR-0001: 基础对称量化已建立

用户已理解量化的动机（减少显存占用以支持本地部署）和核心数学（对称量化的 scale/round/clamp 流程），并通过 PyTorch 练习实现了一个简单的对称 INT4 量化器。

**Prior knowledge established:**
- 理解 FP16/BF16 的基本概念
- 有 PyTorch 使用经验
- 知道 LLM 的"参数"概念和模型大小估算

**Implications:**
- 下节课可以直接进入 GPTQ 的 Hessian 矩阵思想，不需要再讲基础量化映射
- 后续课程可以引用本课作为"朴素量化"的 baseline 对比
