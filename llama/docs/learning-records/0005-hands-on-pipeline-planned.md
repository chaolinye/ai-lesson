# 完成了实操链路规划：从下载模型到 Agent 调用的完整步骤

用户已有 llama-server b9611 CUDA build、5060 Ti 16GB、Python 3.13。Lesson 0007 设计了 8 个操作步骤：下载模型（-hf 或手动）→ 启动 server → curl 测试 → Python SDK → JSON schema → 流式 → function calling → 关闭。用户实际执行时会获得真实操作经验。

## Implications
- 用户实际执行后可进入进阶主题：embedding、speculative decoding、多模态。
- 如果用户在操作中遇到问题，可以根据具体报错诊断。
