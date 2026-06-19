# 掌握了显存优化工具集：Flash Attention、KV cache 量化、场景决策树

用户完成了显存优化课程，理解了 Flash Attention 省的是注意力中间结果而非权重显存、KV cache 量化到 q8_0 可省 50% 且几乎无损、OOM 排查顺序（-ub → -fa → -ngl → -c → -np → -ctk/-ctv → 更低量化 → 更小模型）。

## Implications
- 用户可以独立估算 16GB 显存上不同模型+上下文+并发的可行性。
- 下一阶段可进入实操：启动 server 并验证各参数的实际显存效果。
- 下一步教学内容可转向：Agent 对接（API key、JSON schema、并发控制）。
