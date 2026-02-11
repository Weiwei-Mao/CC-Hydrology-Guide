# 04 - Advanced Tips

**English** | [简体中文](04-进阶技巧.md)

[← Back to Home](../README.md)

## Table of Contents

1. [Professional Skills System](#professional-skills-system)
2. [Literature Management and Research Assistance](#literature-management-and-research-assistance)
3. [Efficient Workflows](#efficient-workflows)
4. [Common Troubleshooting](#common-troubleshooting)
5. [Best Practices](#best-practices)

---

## Professional Skills System

Claude Code has hundreds of professional skills (Skills) for handling complex tasks in specific domains. Use `/skill` command or simply describe your needs to invoke them.

### Data Analysis and Visualization

#### csv-data-summarizer (CSV Data Analysis)

**Function**: Quickly analyze CSV files, generate statistical summaries and visualizations

```
Use csv-data-summarizer skill to analyze rainfall.csv
```

Or simply:
```
Analyze rainfall.csv file, generate statistical summary and charts
```

**Claude will automatically**:
- Calculate basic statistics (mean, std, quantiles, etc.)
- Detect outliers
- Generate distribution plots, time series plots, etc.

#### scientific-visualization (Scientific Visualization)

**Function**: Create publication-quality charts

```
Create a publication-quality hydrograph:
- Use publication-quality style
- Suitable for paper layout (consider font size, line width, etc.)
- Save as vector format
```

#### statistical-analysis (Statistical Analysis)

**Function**: Select appropriate statistical methods and execute analysis

```
I want to analyze if two groups of water quality data have significant differences
```

**Claude will**:
- Select appropriate test method based on data characteristics (t-test, Mann-Whitney U test, etc.)
- Execute analysis
- Interpret results and generate report

### Academic Research Assistance

#### literature-review (Literature Review)

**Function**: Systematic literature retrieval and management

```
Search for recent literature on "urban flood risk"
```

```
Create a literature review outline about sponge city effectiveness
```

#### citation-management (Citation Management)

**Function**: Manage references and citations

```
Format these citations in APA style
```

```
Help me generate a reference list in GB/T 7714 format
```

#### scientific-writing (Scientific Writing)

**Function**: Academic paper writing assistance

```
Help me polish this abstract to be more academic
```

```
Write a discussion section draft based on my research results
```

### Professional Computing Tools

#### statsmodels (Statistical Models)

**Function**: Advanced statistical modeling

```
Build an ARIMA time series model using statsmodels
```

#### pymc (Bayesian Analysis)

**Function**: Bayesian statistics and MCMC sampling

```
Use Bayesian method to estimate uncertainty of flood frequency curve
```

---

## Literature Management and Research Assistance

### Literature Search

#### Using citation-management Skill

```
Search for literature on "precipitation trend analysis", limited to last 5 years
```

```
Search for "water quality" related papers in PubMed
```

### Citation Format Conversion

```
Convert these citations from APA format to Chicago format
```

Then paste your citation list.

### Reference Management

```
Create a BibTeX file with the following literature information:
- Author: Zhang, San
- Title: Hydrological response to climate change
- Journal: Journal of Hydrology
- Year: 2023
- Volume: 600
- Pages: 123-145
```

### Paper Writing Assistance

#### Structure Optimization

```
Help me optimize my paper structure to ensure logical coherence
```

Then provide your paper outline or content.

#### Language Polishing

```
Polish this English abstract to be more fluent and professional
```

```
Check if this discussion section has grammatical issues
```

#### Figure Caption Generation

```
Generate a detailed figure caption based on this chart's characteristics
```

---

## Efficient Workflows

### 1. Create Project Templates

Create reusable templates for your research type:

```
Create a hydrological data analysis project template, including:
1. data/ folder for raw data
2. scripts/ folder for analysis scripts
3. figures/ folder for charts
4. results/ folder for result files
5. main.py as main analysis script
6. README.md for project description
```

### 2. Batch Processing Workflow

```
Create an automated workflow:
1. Scan all CSV files in data/ folder
2. Perform same data processing steps on each file
3. Generate summary report
4. Save all charts to figures/ folder
```

### 3. Incremental Development

When collaborating with Claude, incremental approach is more efficient:

**Step 1**:
```
Create a function to read data
```

**Step 2** (after reviewing code):
```
Add data cleaning steps to this function
```

**Step 3** (continue improving):
```
Add outlier detection functionality
```

### 4. Version Control Integration

```
Help me initialize a Git repository
```

```
Generate a Git commit message summarizing my recent changes
```

```
Create a .gitignore file excluding Python-related files
```

### 5. Automatic Documentation Generation

```
Generate a usage document based on this Python script
```

```
Generate detailed docstrings for all Python functions
```

---

## Common Troubleshooting

### Problem 1: How to Handle Code Errors

**Don't**: Only paste error code

**Do**:
```
My code has an error, error message as follows:
[paste complete error message]

This code is meant to: [describe your goal]

Code content is:
[paste relevant code]
```

### Problem 2: Performance Issues

```
This script takes a long time to process 100MB data, please help optimize
```

```
How to speed up this pandas operation?
```

Claude can suggest:
- Use vectorized operations instead of loops
- Use more efficient data types
- Parallel processing
- Use Dask for large data

### Problem 3: Out of Memory

```
Running out of memory when processing large files, any solutions?
```

Claude will suggest:
- Read and process in chunks
- Use generators
- Use Dask or Vaex
- Only keep necessary columns

### Problem 4: Chart Doesn't Meet Requirements

```
This chart doesn't meet journal requirements, needs:
- Legend outside plot
- Sans-serif font
- Line width at least 1.5pt
- Legend font size 9pt
- Save as EPS format
```

---

## Best Practices

### 1. Clear Communication

**Good prompt**:
```
I have daily discharge data from a hydrological station (2020-2023), want to analyze:
1. Interannual trend
2. Seasonal distribution
3. Extreme value frequency

Data format: Date, Flow(m³/s)
Please help create analysis script
```

**Not so good prompt**:
```
Analyze this data
```

### 2. Provide Context

Tell Claude more background information:

```
This is data from a tributary of Yangtze River hydrological station,
Research objective is to analyze climate change impact on runoff.
Data has undergone quality control, no outliers.
```

### 3. Step-by-Step Verification

For complex tasks, ask for step-by-step execution:

```
Please complete this task in three steps:
Step 1: First write code to read data, I'll confirm before continuing
Step 2: Add data processing code
Step 3: Add visualization and output
```

### 4. Code Reuse

```
I previously wrote a function to read hydrological data in process_data.py
Please base on this function to add new analysis functionality
```

### 5. Specify Output Format

```
Please output:
1. Complete Python script (can run independently)
2. Markdown format analysis report
3. All charts in PNG and PDF versions
```

---

## Advanced Techniques

### 1. Customize Behavior with CLAUDE.md

Create `CLAUDE.md` file in project directory to customize Claude's behavior:

```markdown
# Project Description

This is a hydrological data analysis project.

## Coding Standards
- Use Chinese comments
- Variable names in English
- Functions must have docstrings

## Data Standards
- All data files in data/ directory
- Processed data in results/ directory
- Charts in figures/ directory

## Common Libraries
- pandas: data processing
- numpy: numerical computation
- matplotlib: basic plotting
- scipy: statistical analysis
```

### 2. Create Function Library

```
Create a hydrology analysis utility library hydro_utils.py, including:
1. read_hydro_data() - read hydrological data
2. calc_flood_stats() - calculate flood statistics
3. plot_hydrograph() - plot hydrograph
4. detect_flood_events() - detect flood events
```

### 3. Automated Report Generation

```
Create a script to automatically generate research report containing:
1. Data overview
2. Statistical summary tables
3. All charts
4. Analysis conclusions
5. Markdown format, easy to convert to PDF
```

### 4. Data Quality Control Workflow

```
Create a data quality control workflow, including:
1. Missing value check
2. Outlier detection (3σ rule)
3. Physical consistency check (e.g., stage-discharge relationship)
4. Generate quality control report
```

### 5. Batch Scenario Analysis

```
Analyze hydrological responses for multiple climate scenarios:
- Read input data for multiple scenarios
- Run hydrological model
- Compare output results
- Generate comparison charts and reports
```

---

## Command Quick Reference

| Need | Example Command |
|------|-----------------|
| Read file | Read data.csv, tell me what columns it has |
| Create script | Create a Python script to analyze hydrological data |
| Debug code | This code has error: [error message], help fix |
| Optimize performance | Optimize this code to run faster |
| Plot chart | Plot discharge hydrograph with title and legend |
| Statistical analysis | Perform t-test on this data |
| Literature search | Search for recent literature on flood risk |
| Format conversion | Convert this R code to Python |
| Document generation | Add detailed docstring for this function |
| Code explanation | Explain what this code does |

---

## Summary

Claude Code is a powerful research assistant. Mastering these advanced techniques allows you to:

1. **Improve Efficiency**: Quickly complete professional tasks through skills system
2. **Ensure Quality**: Use AI for code review and optimization
3. **Reduce Errors**: Let AI help debug and verify
4. **Accelerate Learning**: Quickly understand new methods through code explanation

### Continuous Learning

- **Try More**: Try different phrasing to find most effective prompts
- **Verify More**: Always verify AI-generated code results
- **Accumulate More**: Accumulate common code templates and workflows
- **Share More**: Share usage experience with colleagues

Happy researching!

---

[← Previous: 03-Hydrology Use Cases](03-Hydrology-Use-Cases.md) | [Back to Home](../README-en.md)

1. **Improve Efficiency**: Quickly complete professional tasks through skills system
2. **Ensure Quality**: Use AI for code review and optimization
3. **Reduce Errors**: Let AI help debug and verify
4. **Accelerate Learning**: Quickly understand new methods through code explanation

### Continuous Learning

- **Try More**: Try different phrasing to find most effective prompts
- **Verify More**: Always verify AI-generated code results
- **Accumulate More**: Accumulate common code templates and workflows
- **Share More**: Share usage experience with colleagues

Happy researching!
