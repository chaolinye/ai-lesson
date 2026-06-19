# 掌握了 Agent 对接：OpenAI API、JSON schema 约束、Function calling

用户完成了 Agent 对接课程，理解了 llama.cpp server 暴露的 OpenAI-compatible 端点（/v1/chat/completions、/v1/embeddings 等）、API key 认证、JSON schema 强制约束输出格式（编译为 GBNF grammar）、以及 Function calling 的完整工作流（模型返回 tool_calls → Agent 执行工具 → 结果回传）。

## Implications
- 用户可以启动一个带 API key 的 server 并用 OpenAI Python SDK 连接。
- JSON schema 约束可保证 Agent 获得结构化输出，减少解析失败。
- Function calling 允许模型自主决定调用工具，适合 Agent 工作流。
- 下一阶段可进入实操：完整链路从下载模型到 Agent 调用。
