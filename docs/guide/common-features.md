# 02 - Common Features

**English** | [简体中文](02-常用功能.md)

[← Back to Home](../README.md)

## Table of Contents

1. [Code Writing and Debugging](#code-writing-and-debugging)
2. [File Operations](#file-operations)
3. [Data Analysis Basics](#data-analysis-basics)
4. [Visualization and Plotting](#visualization-and-plotting)
5. [Code Understanding and Refactoring](#code-understanding-and-refactoring)

---

## Code Writing and Debugging

### Let AI Write Code

Claude Code's core function is helping you write code. Just describe your requirements in natural language:

```
Please write a function in Python to calculate Pearson correlation coefficient
```

Claude will:
1. Write complete function code
2. Add necessary comments
3. May include usage examples

### Code Debugging

When code has problems, just tell Claude the error message:

```
My code has an error: NameError: name 'pd' is not defined
```

Claude will help you:
- Analyze the error cause
- Provide fix
- Explain why the error occurred

### Code Optimization

If you have existing code but think it's not good enough:

```
Help me optimize this code to make it run faster
```

Then paste your code, Claude will provide optimization suggestions.

### Complete Example

**Your input:**
```
I need to analyze daily discharge data from a hydrological station. Please help me:
1. Read file named daily_flow.csv
2. Calculate annual average discharge
3. Find dates of maximum and minimum discharge
4. Plot discharge hydrograph
```

**What Claude will do:**
1. Create a Python script file (e.g., `analyze_flow.py`)
2. Write complete analysis code
3. Tell you how to run this script

---

## File Operations

### Reading Files

You can ask Claude to read and analyze file contents:

```
Please read data.csv file and tell me what columns it contains
```

Or more specific:

```
Read rainfall.csv and tell me:
1. Time range of data
2. How many rows of data
3. Meaning of each column
```

### Creating Files

```
Create a new Python script named process_data.py
```

```
Create a Markdown file to record today's analysis results
```

### Editing Files

```
Please add a function in analyze.py to calculate standard deviation
```

```
Modify chart title in plot.py to "2023 Water Level Variation"
```

### Searching Code

```
Search all code containing "correlation" in the project
```

```
Find all locations where CSV files are read
```

---

## Data Analysis Basics

### Reading Data Files

Hydrology research commonly uses CSV, Excel format data. Let Claude help you read:

```
Read hydro_data.csv using pandas, first column is date
```

```
Read Excel file water_quality.xlsx, only read "2023" worksheet
```

### Data Cleaning

```
Check if data has missing values, if so remove them
```

```
Convert date column to datetime format and set as index
```

```
Remove anomalous data with negative discharge values
```

### Basic Statistics

```
Calculate mean, standard deviation, maximum, minimum of rainfall
```

```
Calculate total annual runoff for each year
```

```
Calculate average water level for each month
```

### Data Filtering

```
Filter flood season (June-September) data
```

```
Find all dates when discharge exceeds 1000 m³/s
```

```
Get complete data for year 2023
```

---

## Visualization and Plotting

### Basic Plotting

```
Plot water level variation over time using matplotlib
```

```
Plot rainfall-runoff scatter plot
```

### Chart Beautification

```
Optimize this chart:
- Add Chinese title
- Set appropriate font
- Adjust axis labels
- Add legend
```

### Multi-chart Layout

```
Create a 2x2 subplot layout:
Top-left: Rainfall hyetograph
Top-right: Water level hydrograph
Bottom-left: Discharge hydrograph
Bottom-right: Stage-discharge relationship curve
```

### Saving Charts

```
Save current chart as high-resolution PNG for paper
```

```
Save as PDF format, 300 dpi resolution
```

### Complete Example

```
Create a hydrological process chart, requirements:
1. X-axis as date (2023-01-01 to 2023-12-31)
2. Left Y-axis as rainfall (bar chart, blue)
3. Right Y-axis as discharge (line chart, red)
4. Add legend, title, axis labels
5. Use Chinese font
6. Save as rainfall_runoff_2023.png
```

---

## Code Understanding and Refactoring

### Understanding Others' Code

When you get someone else's code and don't understand it:

```
Please explain what this code does
```

Then paste the code, Claude will:
- Explain code function line by line
- Explain overall logic
- Point out key parts

### Code Refactoring

```
This code is long and hard to maintain, please help refactor it to be clearer
```

Claude will:
- Break long functions into smaller functions
- Add meaningful variable names
- Add explanatory comments
- Follow best practices

### Adding Documentation

```
Add detailed docstring for this function, including:
- Function description
- Parameter description
- Return value description
- Usage example
```

### Code Conversion

```
Convert this MATLAB code to Python code
```

```
Convert R language ggplot code to Python matplotlib
```

---

## Practical Tips

### 1. Save Common Code Snippets

If you often do certain types of analysis, let Claude create templates:

```
Create a Python template containing common data analysis steps:
1. Import necessary libraries
2. Read CSV data
3. Basic statistical information
4. Time series visualization
Save as analysis_template.py
```

### 2. Batch Processing

```
Help me write a script to batch process all CSV files in data folder,
calculate statistics for each file, and save results to a summary file
```

### 3. Create Reports

```
Generate a Markdown format analysis report based on analysis results,
including data overview, statistical summary, chart descriptions
```

### 4. Code Version Control

```
Help me create a .gitignore file excluding common Python files
```

```
Generate a Git commit message describing my recent changes
```

---

## Common Error Handling

### Import Errors

```
ModuleNotFoundError: No module named 'pandas'
```

**Solution**: Tell Claude, it will give you installation command:
```bash
pip install pandas
```

### File Path Errors

```
FileNotFoundError: data.csv
```

**Solution**: Check if filename and path are correct, or use absolute path.

### Encoding Issues

Chinese data often encounters encoding issues:

```
Got encoding error when reading CSV
```

**Solution**: Claude will suggest trying different encodings (e.g., `encoding='gbk'` or `encoding='utf-8'`)

---

## Next Steps

Now you've mastered common features of Claude Code, next you can:

- Read [03-Hydrology Use Cases](03-Hydrology-Use-Cases.md) to learn specific applications in hydrology research
- Read [04-Advanced Tips](04-Advanced-Tips.md) for more advanced features
- Try practicing with your own data

---

[← Previous: 01-Getting Started](01-Getting-Started.md) | [Next: 03-Hydrology Use Cases →](03-Hydrology-Use-Cases.md)
