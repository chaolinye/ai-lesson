# llama.cpp Resources

## Knowledge

- [llama.cpp README — ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)
  官方项目入口。Use for: 了解 llama.cpp 定位、支持平台、GGUF 模型获取、`llama-cli` 与 `llama-server` 的基本用法。
- [Install pre-built llama.cpp — official docs/install.md](https://github.com/ggml-org/llama.cpp/blob/master/docs/install.md)
  官方预构建安装文档。Use for: Windows 上通过 Winget 快速安装 llama.cpp。
- [Build llama.cpp — official docs/build.md](https://github.com/ggml-org/llama.cpp/blob/master/docs/build.md)
  官方构建文档。Use for: Windows、CUDA、CMake、不同后端的构建方法与 CUDA 相关选项。
- [llama-server README — official tools/server/README.md](https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md)
  官方 HTTP server 文档。Use for: OpenAI-compatible API、并发、endpoint、server 参数。
- [Tensor Encoding Schemes — llama.cpp Wiki](https://github.com/ggml-org/llama.cpp/wiki/Tensor-Encoding-Schemes)
  GGML/GGUF 量化张量编码说明。Use for: 理解 Q4/Q5/Q8、K-quants 等量化格式不是“魔法压缩”，而是权重编码方案。
- [llama-quantize README — official tools/quantize](https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md)
  官方量化工具文档。Use for: 理解从高精度 GGUF 到 Q4_K_M 等量化 GGUF 的转换流程。
- [Hugging Face model hub GGUF search](https://huggingface.co/models?search=GGUF)
  GGUF 模型主要来源。Use for: 查找适合 llama.cpp 的模型文件与量化版本。

## Wisdom (Communities)

- [llama.cpp GitHub Discussions](https://github.com/ggml-org/llama.cpp/discussions)
  官方社区讨论。Use for: 新 GPU、性能异常、参数变化、bug 与实践经验。
- [Hugging Face model discussions](https://huggingface.co/models)
  具体模型页面的讨论区。Use for: 某个 GGUF 模型是否可用、chat template 是否正确、量化质量反馈。

## Gaps

- 需要后续根据你实际选择的模型，补充具体模型卡、license、上下文长度和推荐量化版本来源。
