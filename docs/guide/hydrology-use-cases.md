# 03 - Hydrology Use Cases

**English** | [简体中文](03-水文场景案例.md)

[← Back to Home](../README.md)

## Table of Contents

1. [Hydrological Data Processing](#hydrological-data-processing)
2. [Time Series Analysis](#time-series-analysis)
3. [Statistical and Frequency Analysis](#statistical-and-frequency-analysis)
4. [Hydrological Visualization](#hydrological-visualization)
5. [Water Quality Data Analysis](#water-quality-data-analysis)
6. [Complete Case: Flood Analysis](#complete-case-flood-analysis)

---

## Hydrological Data Processing

### Case 1: Reading and Cleaning Rainfall Data

**Task Description:**
```
I have a rainfall data file rainfall.csv with format:
Date,Precipitation
2023-01-01,0
2023-01-02,5.2
...

Please help me:
1. Read the data
2. Convert date column to datetime format
3. Check and handle missing values
4. Aggregate rainfall by month
```

**Code structure Claude will create:**
```python
import pandas as pd
import numpy as np

# Read data
df = pd.read_csv('rainfall.csv')

# Convert date format
df['Date'] = pd.to_datetime(df['Date'])

# Handle missing values (delete or interpolate)
df = df.dropna()  # Or use df.fillna(method='ffill')

# Aggregate by month
df['Month'] = df['Date'].dt.to_period('M')
monthly = df.groupby('Month')['Precipitation'].sum()
```

### Case 2: Multi-station Data Merging

**Task Description:**
```
I have three hydrological station CSV files:
- station_A.csv
- station_B.csv
- station_C.csv

Please merge them into one file and add station identifier column
```

**Code Claude will create:**
```python
import pandas as pd

# Read multiple files
files = ['station_A.csv', 'station_B.csv', 'station_C.csv']
dfs = []

for f in files:
    df = pd.read_csv(f)
    df['Station'] = f.replace('.csv', '')  # Add station identifier
    dfs.append(df)

# Merge all data
combined = pd.concat(dfs, ignore_index=True)
combined.to_csv('all_stations.csv', index=False)
```

### Case 3: Unit Conversion

**Task Description:**
```
Convert discharge data from cubic feet per second to cubic meters per second
1 cfs = 0.0283168 m³/s
```

---

## Time Series Analysis

### Case 4: Hydrograph Plotting

**Task Description:**
```
Plot discharge hydrograph for 2023:
- X-axis: Date
- Y-axis: Daily mean discharge (m³/s)
- Mark maximum discharge date
- Add mean discharge reference line
- Use blue line
```

**Code Claude will create:**
```python
import pandas as pd
import matplotlib.pyplot as plt

# Set Chinese font
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False

# Read data
df = pd.read_csv('daily_flow_2023.csv')
df['Date'] = pd.to_datetime(df['Date'])

# Create chart
fig, ax = plt.subplots(figsize=(12, 5))
ax.plot(df['Date'], df['Flow'], color='blue', linewidth=1)

# Mark maximum value
max_idx = df['Flow'].idxmax()
max_date = df.loc[max_idx, 'Date']
max_flow = df.loc[max_idx, 'Flow']
ax.annotate(f'Max: {max_flow:.1f} m³/s',
            xy=(max_date, max_flow),
            xytext=(10, 10), textcoords='offset points')

# Add mean line
mean_flow = df['Flow'].mean()
ax.axhline(mean_flow, color='red', linestyle='--',
           label=f'Mean: {mean_flow:.1f} m³/s')

# Set chart properties
ax.set_xlabel('Date')
ax.set_ylabel('Discharge (m³/s)')
ax.set_title('2023 Discharge Hydrograph')
ax.legend()
ax.grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('flow_hydrograph_2023.png', dpi=300)
plt.show()
```

### Case 5: Rainfall-Runoff Relationship Analysis

**Task Description:**
```
Analyze relationship between rainfall and runoff:
1. Plot scatter plot
2. Calculate correlation coefficient
3. Add linear regression line
```

**Code Claude will create:**
```python
import pandas as pd
import matplotlib.pyplot as plt
from scipy import stats

# Read data (assume already merged by date)
df = pd.read_csv('rainfall_runoff.csv')

# Calculate correlation coefficient
corr = df['Rainfall'].corr(df['Runoff'])
print(f"Rainfall-Runoff correlation coefficient: {corr:.3f}")

# Linear regression
slope, intercept, r_value, p_value, std_err = stats.linregress(
    df['Rainfall'], df['Runoff'])

# Plot
fig, ax = plt.subplots(figsize=(8, 6))
ax.scatter(df['Rainfall'], df['Runoff'], alpha=0.5)

# Add regression line
x_line = np.linspace(df['Rainfall'].min(), df['Rainfall'].max(), 100)
y_line = slope * x_line + intercept
ax.plot(x_line, y_line, 'r-',
        label=f'y = {slope:.2f}x + {intercept:.2f}\nR² = {r_value**2:.3f}')

ax.set_xlabel('Rainfall (mm)')
ax.set_ylabel('Runoff (mm)')
ax.set_title('Rainfall-Runoff Relationship')
ax.legend()
ax.grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('rainfall_runoff_correlation.png', dpi=300)
```

---

## Statistical and Frequency Analysis

### Case 6: Flood Frequency Analysis

**Task Description:**
```
Perform frequency analysis on annual maximum discharge series:
1. Calculate 2, 5, 10, 20, 50, 100-year return period floods
2. Fit using Pearson Type III distribution
```

**Code Claude will create:**
```python
import pandas as pd
import numpy as np
from scipy import stats

# Read annual maximum discharge data
df = pd.read_csv('annual_max_flow.csv')

# Sort and calculate empirical frequency
sorted_flow = df['MaxFlow'].sort_values(ascending=False)
n = len(sorted_flow)
exceedance_prob = np.arange(1, n+1) / (n + 1)  # Weibull formula
return_period = 1 / exceedance_prob

# Calculate theoretical frequency distribution (using log-normal as example)
params = stats.lognorm.fit(sorted_flow)
dist = stats.lognorm(*params)

# Calculate design values for different return periods
return_periods = [2, 5, 10, 20, 50, 100]
design_flows = []
for rp in return_periods:
    p = 1 / rp
    flow = dist.ppf(1 - p)
    design_flows.append(flow)

# Output results
print("Return Period\tDesign Flow (m³/s)")
for rp, flow in zip(return_periods, design_flows):
    print(f"{rp}\t{flow:.1f}")
```

### Case 7: Trend Analysis (Mann-Kendall Test)

**Task Description:**
```
Analyze if annual rainfall has significant trend over past 30 years
Use Mann-Kendall trend test
```

**Code Claude will create:**
```python
import pandas as pd
import numpy as np
from scipy import stats

def mann_kendall_test(data):
    """Mann-Kendall trend test"""
    n = len(data)
    S = 0

    for i in range(n-1):
        for j in range(i+1, n):
            S += np.sign(data[j] - data[i])

    # Calculate variance
    var_S = n * (n - 1) * (2 * n + 5) / 18

    # Calculate test statistic
    if S > 0:
        Z = (S - 1) / np.sqrt(var_S)
    elif S < 0:
        Z = (S + 1) / np.sqrt(var_S)
    else:
        Z = 0

    # Calculate p-value
    p_value = 2 * (1 - stats.norm.cdf(abs(Z)))

    return Z, p_value

# Read data
df = pd.read_csv('annual_rainfall.csv')
rainfall = df['AnnualRainfall'].values

# Perform test
Z, p_value = mann_kendall_test(rainfall)

print(f"Mann-Kendall test results:")
print(f"Statistic Z = {Z:.3f}")
print(f"p-value = {p_value:.4f}")

if p_value < 0.05:
    if Z > 0:
        print("Conclusion: Significant upward trend (p < 0.05)")
    else:
        print("Conclusion: Significant downward trend (p < 0.05)")
else:
    print("Conclusion: No significant trend (p >= 0.05)")
```

---

## Hydrological Visualization

### Case 8: Stage-Discharge Relationship Curve

**Task Description:**
```
Plot stage-discharge relationship curve:
1. Scatter plot showing measured data
2. Add power function fitting curve
3. Display equation and R²
```

**Code Claude will create:**
```python
import pandas as pd
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit
from sklearn.metrics import r2_score

# Power function model
def power_law(x, a, b):
    return a * (x ** b)

# Read data
df = pd.read_csv('stage_discharge.csv')

# Curve fitting
popt, _ = curve_fit(power_law, df['Stage'], df['Flow'])
a, b = popt

# Calculate predicted values and R²
flow_pred = power_law(df['Stage'], *popt)
r2 = r2_score(df['Flow'], flow_pred)

# Plot
fig, ax = plt.subplots(figsize=(8, 6))
ax.scatter(df['Stage'], df['Flow'], alpha=0.6, label='Measured data')

# Plot fitted curve
stage_range = np.linspace(df['Stage'].min(), df['Stage'].max(), 100)
flow_fit = power_law(stage_range, *popt)
ax.plot(stage_range, flow_fit, 'r-',
        label=f'Fitted curve: Q = {a:.2f} × H^{b:.2f}\nR² = {r2:.3f}')

ax.set_xlabel('Stage (m)')
ax.set_ylabel('Discharge (m³/s)')
ax.set_title('Stage-Discharge Relationship Curve')
ax.legend()
ax.grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('stage_discharge_curve.png', dpi=300)
```

### Case 9: Multi-station Comparison Chart

**Task Description:**
```
Compare discharge hydrographs of three stations on same chart:
- Use different colors and line types
- Add legend
- Use subplot layout
```

---

## Water Quality Data Analysis

### Case 10: Water Quality Indicator Statistics

**Task Description:**
```
Analyze water quality monitoring data:
1. Calculate mean and standard deviation of each indicator
2. Determine if water quality standards are exceeded
3. Generate statistical report
```

**Code Claude will create:**
```python
import pandas as pd

# Read water quality data
df = pd.read_csv('water_quality.csv')

# Define water quality standards (using Surface Water Class III as example)
standards = {
    'pH': (6, 9),
    'DO': 5,        # Dissolved oxygen >= 5
    'CODcr': 20,    # Chemical oxygen demand <= 20
    'NH3_N': 1.0,   # Ammonia nitrogen <= 1.0
    'TP': 0.2       # Total phosphorus <= 0.2
}

# Calculate statistics
stats_df = df[['pH', 'DO', 'CODcr', 'NH3_N', 'TP']].agg(['mean', 'std', 'min', 'max'])
print("Water quality indicator statistics:")
print(stats_df.round(2))

# Check exceedance
print("\nExceedance analysis:")
for param in ['DO', 'CODcr', 'NH3_N', 'TP']:
    standard = standards[param]
    if param == 'DO':
        exceed_rate = (df[param] < standard).mean() * 100
        print(f"{param}: {exceed_rate:.1f}% samples below standard ({standard} mg/L)")
    else:
        exceed_rate = (df[param] > standard).mean() * 100
        print(f"{param}: {exceed_rate:.1f}% samples exceed standard ({standard} mg/L)")
```

---

## Complete Case: Flood Analysis

### Case 11: Complete Flood Event Analysis

**Task Description:**
```
Perform complete analysis of a 2023 flood event:
1. Read water level and discharge data during flood
2. Plot flood hydrograph
3. Calculate flood volume
4. Analyze flood characteristics (peak discharge, rising duration, recession duration)
5. Compare with historical floods
```

**You can tell Claude:**
```
Please help me create a complete flood analysis script, including following steps:

1. Data preparation:
   - Read flood_2023.csv (containing Date, WaterLevel, Flow columns)
   - Data time range: 2023-07-01 to 2023-08-31

2. Flood characteristic calculation:
   - Peak discharge and occurrence time
   - Total flood volume (integral calculation)
   - Average rising rate during rising limb
   - Average recession rate during recession limb

3. Visualization:
   - Top: Water level hydrograph (mark peak)
   - Bottom: Discharge hydrograph (fill volume area)
   - Use 2 subplots in vertical layout

4. Output:
   - Print flood characteristic report
   - Save chart as flood_analysis_2023.png

Please create a complete Python script
```

**Claude will create a complete script file** including:
- All necessary imports
- Complete data processing workflow
- Detailed comments
- Result output and visualization

---

## Practical Tips

### 1. Provide Data Examples

Help Claude better understand your data format:

```
My data format is as follows:
Date,Station,Rainfall,Flow,WaterLevel
2023-01-01,A,0,120,2.5
2023-01-02,A,5.2,135,2.6
...
```

### 2. Describe Data Characteristics

```
Notes:
- Data has missing values, represented by -999
- Days with zero rainfall may be missing measurements
- Discharge unit is cubic feet per second, needs conversion
```

### 3. Specify Output Format

```
Please generate:
1. Python script file
2. Markdown format analysis report
3. High-resolution charts (at least 300 dpi)
```

---

## Next Steps

Now you've understood various applications in hydrology research, next you can:

- Read [04-Advanced Tips](04-Advanced-Tips.md) for more advanced features
- Try analyzing with your own data, let Claude help you
- Explore Claude's professional skills like statistical analysis and visualization

---

[← Previous: 02-Common Features](02-Common-Features.md) | [Next: 04-Advanced Tips →](04-Advanced-Tips.md)
