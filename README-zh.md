<div align="center">

# Claude Code 水文研究指南

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey.svg)](https://claude.com/claude-code)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

**专为水文研究人员打造的 Claude Code 使用指南** *（或许适用于环境及相关领域）*

基于个人使用经验的实用指南，涵盖常见水文研究场景，包括数据分析、可视化、文献管理、水文建模、PPT 制作等。*说明：本指南并非全面教程，仅为作者个人研究过程中的经验总结。*

[English](README.md) | **简体中文**

</div>

---

## 简介

本项目是作者基于个人水文研究经验整理的 Claude Code 使用技巧集合（或许适用于环境及相关领域）。Claude Code 是 [Anthropic 官方推出的 AI 命令行助手](https://claude.com/claude-code)，可以帮助你更高效地进行数据分析、代码编写、文献管理等工作。

> **免责声明**：本指南反映的是作者个人经验，绝非水文研究的全部内容。水文研究领域博大精深——这里只涵盖了作者在自己的研究中遇到过的场景。欢迎根据你自己的需求进行调整和扩展。

### 目标读者

- 水文、环境及相关领域的研究人员和研究生
- 需要处理水文/环境数据、进行统计分析的研究者
- 希望借助 AI 提升研究效率的科研工作者

### 你将学到

- 如何使用 Claude Code 用自然语言完成各种任务
- 如何高效处理水文时间序列数据
- 如何快速生成科研可视化图表
- 如何管理文献和撰写论文

---

## 快速开始

安装 Claude Code 后，只需在命令行中输入 `claude` 即可启动。详细安装说明请参阅 [01-基础入门](docs/01-基础入门.md)。

---

## 文档目录

| 文档 | 描述 |
|------|------|
| [01-基础入门](docs/01-基础入门.md) | Claude Code 的基本概念和操作 |
| [02-常用功能](docs/02-常用功能.md) | 代码编写、文件操作、数据分析 |
| [03-水文场景案例](docs/03-水文场景案例.md) | 水文研究中的实际应用案例 |
| [04-进阶技巧](docs/04-进阶技巧.md) | 技能系统、文献管理、工作流优化 |

---

## 常见水文研究场景

- 数据处理与分析
- 时间序列分析
- 统计分析与频率分析
- 科研可视化
- 水文建模
- 汇报 PPT 制作
- 文献管理
- 论文写作辅助

---

## 项目结构

```
CC-Hydrology-Guide/
├── README.md                    # 英文版首页（默认）
├── README-zh.md                 # 中文版首页
├── CLAUDE.md                    # AI 助手配置（全局）
├── claude.md                    # AI 助手配置（项目级）
├── docs/                        # 详细文档目录
│   ├── 01-Getting-Started.md    # 英文版（默认）
│   ├── 01-基础入门.md
│   ├── 02-Common-Features.md   # 英文版（默认）
│   ├── 02-常用功能.md
│   ├── 03-Hydrology-Use-Cases.md  # 英文版（默认）
│   ├── 03-水文场景案例.md
│   ├── 04-Advanced-Tips.md     # 英文版（默认）
│   └── 04-进阶技巧.md
└── examples/                    # 示例代码和数据
    ├── data/                    # 示例数据文件
    └── scripts/                 # 示例脚本
```

---

## 📚 参考资源

- [Claude Code 官方文档](https://code.claude.com/docs/) - Anthropic 官方文档
- [Claude Code 中文文档](https://claudecode.tangshuang.net/) - 技术大佬的中文文档

---

## 🤝 贡献

欢迎提交问题、改进建议和贡献内容！

**提交 PR 前请：**
- ✅ 先检查是否有相关 issue
- ✅ 遵循现有文档风格
- ✅ 更新时保持中英文版本同步

---

## 📜 许可

MIT © [Weiwei Mao](https://github.com/Weiwei-Mao)

详见 [LICENSE](LICENSE)。
