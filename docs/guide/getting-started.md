# 01 - Getting Started

**English** | [简体中文](01-基础入门.md)

[← Back to Home](../README.md)

## What is Claude Code?

Claude Code is an AI assistant developed by Anthropic, specifically designed to help software developers and researchers complete programming tasks. Unlike traditional chatbots, Claude Code can:

- **Directly operate your files**: Read, edit, create any file in your project
- **Run code**: Execute Python, R, MATLAB and other code and view results
- **Manage projects**: Search code, understand project structure, assist with debugging
- **Use professional tools**: Call hundreds of specialized skills for complex tasks

### Difference from Regular AI Chat

| Regular Chat AI | Claude Code |
|-----------------|-------------|
| Can only talk, cannot operate files | Can directly read and write your files |
| Code needs to be copy-pasted | Automatically writes to files and runs |
| Doesn't know your project | Understands entire project structure |
| Generic answers | Gives suggestions specific to your code |

## Installation and Configuration

### Installation Steps

1. **Visit official website**: Go to [Claude Code website](https://claude.com/claude-code)
2. **Download installer**: Download the appropriate version for your OS (Windows/Mac/Linux)
3. **Install**: Run the installer and follow prompts
4. **Login**: First run requires logging into Anthropic account

### Verify Installation

Open command line (terminal) and enter:

```bash
claude --version
```

If version number is displayed, installation is successful.

## Basic Operations

### Starting Claude Code

Enter in command line:

```bash
claude
```

Or open Claude Code extension in VSCode.

### First Conversation

After starting, you can talk to Claude in natural language:

```
Hello! I'm a hydrology and environmental researcher
```

Claude will understand your background and provide more relevant help in future conversations.

### Getting Claude to Do Things

Claude's most powerful feature is its ability to **execute tasks**, not just answer questions. For example:

```
Please help me create a Python script to read hydrological data CSV files
```

Claude will:
1. Understand your requirements
2. Create corresponding Python file
3. Write the code
4. Tell you how to use it

## Conversation Tips

### 1. Be Clear About Your Goals

Good prompt:
```
Help me analyze rainfall.csv file, calculate average and maximum rainfall
```

Not so good prompt:
```
Look at this data
```

### 2. Provide Context

Tell Claude more information for better answers:

```
I have a hydrological station data file with three columns: date, water level, and discharge.
Please help me plot the stage-discharge relationship curve. The data file name is station_001.csv
```

### 3. Break Down Complex Tasks

For complex tasks, describe in steps:

```
I want to do the following analysis:
1. Read hydrological data file
2. Filter flood season (June-September) data
3. Calculate average flood season discharge
4. Plot time series graph
```

### 4. Use Specific File Names

When mentioning files, try to use full file names or paths:

```
Analyze C:\data\rainfall_2023.csv file
```

## Project Workspace

### Using Claude Code in a Project

It's recommended to put each research project in a separate folder, then start Claude Code in the project directory:

```bash
cd C:\Users\YourName\research\hydrology_project
claude
```

This way Claude can:
- See all files in the project
- Understand project structure
- Create new files in correct locations

### Common Commands

In Claude Code, you can use some special commands:

- `/clear` - Clear conversation history
- `/help` - Display help information
- `/exit` - Exit Claude Code

## Common Questions

### Q: Can Claude read all my files?

A: By default, Claude can only access files you explicitly tell it about. But if you start in a project directory, it can view all files in the project.

### Q: Will my code be sent to the cloud?

A: Yes, Claude needs to send code to Anthropic's servers for analysis. Please ensure you comply with your institution's data security policies.

### Q: What programming languages does Claude support?

A: Claude supports almost all mainstream programming languages, including Python, R, MATLAB, Julia, JavaScript, etc. Python and R commonly used in hydrology research both have good support.

### Q: Will Claude directly modify my files?

A: Claude will first tell you what it plans to do and wait for your confirmation before modifying files. You are always in control of your code.

### Q: What if the code Claude gives has errors?

A: Just tell Claude it's reporting an error, paste the error message, and it will help you debug and fix it.

## Next Steps

Now you understand the basics of Claude Code, next you can:

- Read [02-Common Features](02-Common-Features.md) to learn more features
- View [03-Hydrology Use Cases](03-Hydrology-Use-Cases.md) for practical applications
- Read [04-Advanced Tips](04-Advanced-Tips.md) for advanced techniques

---

[← Back to Home](../README.md) | [Next: 02-Common Features →](02-Common-Features.md)
