# 03 - 水文场景案例

[English](03-Hydrology-Use-Cases.md) | **简体中文**

[← 返回首页](../README-zh.md)

## 目录

1. [水文数据处理](#水文数据处理)
2. [时间序列分析](#时间序列分析)
3. [统计分析与频率分析](#统计分析与频率分析)
4. [水文可视化](#水文可视化)
5. [水质数据分析](#水质数据分析)
6. [完整案例：洪水分析](#完整案例洪水分析)

---

## 水文数据处理

### 案例1：读取和清洗降雨数据

**任务描述：**
```
我有一个降雨数据文件 rainfall.csv，格式如下：
Date,Precipitation
2023-01-01,0
2023-01-02,5.2
...

请帮我：
1. 读取数据
2. 将日期列转换为 datetime 格式
3. 检查并处理缺失值
4. 按月汇总降雨量
```

**Claude 会创建的代码结构：**
```python
import pandas as pd
import numpy as np

# 读取数据
df = pd.read_csv('rainfall.csv')

# 转换日期格式
df['Date'] = pd.to_datetime(df['Date'])

# 处理缺失值（删除或插值）
df = df.dropna()  # 或使用 df.fillna(method='ffill')

# 按月汇总
df['Month'] = df['Date'].dt.to_period('M')
monthly = df.groupby('Month')['Precipitation'].sum()
```

### 案例2：多站数据合并

**任务描述：**
```
我有三个水文站的 CSV 文件：
- station_A.csv
- station_B.csv
- station_C.csv

请将它们合并成一个文件，并添加站点标识列
```

**Claude 会创建的代码：**
```python
import pandas as pd

# 读取多个文件
files = ['station_A.csv', 'station_B.csv', 'station_C.csv']
dfs = []

for f in files:
    df = pd.read_csv(f)
    df['Station'] = f.replace('.csv', '')  # 添加站点标识
    dfs.append(df)

# 合并所有数据
combined = pd.concat(dfs, ignore_index=True)
combined.to_csv('all_stations.csv', index=False)
```

### 案例3：单位转换

**任务描述：**
```
将流量数据从立方英尺每秒转换为立方米每秒
1 cfs = 0.0283168 m³/s
```

---

## 时间序列分析

### 案例4：水文过程线绘制

**任务描述：**
```
绘制 2023 年的流量过程线图：
- X 轴：日期
- Y 轴：日平均流量（m³/s）
- 标注最大流量日期
- 添加平均流量参考线
- 使用蓝色线条
```

**Claude 会创建的代码：**
```python
import pandas as pd
import matplotlib.pyplot as plt

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False

# 读取数据
df = pd.read_csv('daily_flow_2023.csv')
df['Date'] = pd.to_datetime(df['Date'])

# 创建图表
fig, ax = plt.subplots(figsize=(12, 5))
ax.plot(df['Date'], df['Flow'], color='blue', linewidth=1)

# 标注最大值
max_idx = df['Flow'].idxmax()
max_date = df.loc[max_idx, 'Date']
max_flow = df.loc[max_idx, 'Flow']
ax.annotate(f'最大值: {max_flow:.1f} m³/s',
            xy=(max_date, max_flow),
            xytext=(10, 10), textcoords='offset points')

# 添加平均线
mean_flow = df['Flow'].mean()
ax.axhline(mean_flow, color='red', linestyle='--',
           label=f'平均值: {mean_flow:.1f} m³/s')

# 设置图表属性
ax.set_xlabel('日期')
ax.set_ylabel('流量 (m³/s)')
ax.set_title('2023年流量过程线')
ax.legend()
ax.grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('flow_hydrograph_2023.png', dpi=300)
plt.show()
```

### 案例5：降雨-径流关系分析

**任务描述：**
```
分析降雨和径流的关系：
1. 绘制散点图
2. 计算相关系数
3. 添加线性回归线
```

**Claude 会创建的代码：**
```python
import pandas as pd
import matplotlib.pyplot as plt
from scipy import stats

# 读取数据（假设已按日期合并）
df = pd.read_csv('rainfall_runoff.csv')

# 计算相关系数
corr = df['Rainfall'].corr(df['Runoff'])
print(f"降雨-径流相关系数: {corr:.3f}")

# 线性回归
slope, intercept, r_value, p_value, std_err = stats.linregress(
    df['Rainfall'], df['Runoff'])

# 绘图
fig, ax = plt.subplots(figsize=(8, 6))
ax.scatter(df['Rainfall'], df['Runoff'], alpha=0.5)

# 添加回归线
x_line = np.linspace(df['Rainfall'].min(), df['Rainfall'].max(), 100)
y_line = slope * x_line + intercept
ax.plot(x_line, y_line, 'r-',
        label=f'y = {slope:.2f}x + {intercept:.2f}\nR² = {r_value**2:.3f}')

ax.set_xlabel('降雨量 (mm)')
ax.set_ylabel('径流量 (mm)')
ax.set_title('降雨-径流关系')
ax.legend()
ax.grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('rainfall_runoff_correlation.png', dpi=300)
```

---

## 统计分析与频率分析

### 案例6：洪水频率分析

**任务描述：**
```
对年最大流量序列进行频率分析：
1. 计算 2年、5年、10年、20年、50年、100年一遇洪水
2. 使用皮尔逊III型分布拟合
```

**Claude 会创建的代码：**
```python
import pandas as pd
import numpy as np
from scipy import stats

# 读取年最大流量数据
df = pd.read_csv('annual_max_flow.csv')

# 排序并计算经验频率
sorted_flow = df['MaxFlow'].sort_values(ascending=False)
n = len(sorted_flow)
exceedance_prob = np.arange(1, n+1) / (n + 1)  # Weibull 公式
return_period = 1 / exceedance_prob

# 计算理论频率分布（使用对数正态分布作为示例）
params = stats.lognorm.fit(sorted_flow)
dist = stats.lognorm(*params)

# 计算不同重现期的设计值
return_periods = [2, 5, 10, 20, 50, 100]
design_flows = []
for rp in return_periods:
    p = 1 / rp
    flow = dist.ppf(1 - p)
    design_flows.append(flow)

# 输出结果
print("重现期\t设计流量 (m³/s)")
for rp, flow in zip(return_periods, design_flows):
    print(f"{rp}\t{flow:.1f}")
```

### 案例7：趋势分析（Mann-Kendall 检验）

**任务描述：**
```
分析过去 30 年的年降雨量是否有显著变化趋势
使用 Mann-Kendall 趋势检验
```

**Claude 会创建的代码：**
```python
import pandas as pd
import numpy as np
from scipy import stats

def mann_kendall_test(data):
    """Mann-Kendall 趋势检验"""
    n = len(data)
    S = 0

    for i in range(n-1):
        for j in range(i+1, n):
            S += np.sign(data[j] - data[i])

    # 计算方差
    var_S = n * (n - 1) * (2 * n + 5) / 18

    # 计算检验统计量
    if S > 0:
        Z = (S - 1) / np.sqrt(var_S)
    elif S < 0:
        Z = (S + 1) / np.sqrt(var_S)
    else:
        Z = 0

    # 计算p值
    p_value = 2 * (1 - stats.norm.cdf(abs(Z)))

    return Z, p_value

# 读取数据
df = pd.read_csv('annual_rainfall.csv')
rainfall = df['AnnualRainfall'].values

# 执行检验
Z, p_value = mann_kendall_test(rainfall)

print(f"Mann-Kendall 检验结果：")
print(f"统计量 Z = {Z:.3f}")
print(f"p 值 = {p_value:.4f}")

if p_value < 0.05:
    if Z > 0:
        print("结论：存在显著上升趋势 (p < 0.05)")
    else:
        print("结论：存在显著下降趋势 (p < 0.05)")
else:
    print("结论：无显著趋势 (p >= 0.05)")
```

---

## 水文可视化

### 案例8：水位-流量关系曲线

**任务描述：**
```
绘制水位-流量关系曲线：
1. 散点图显示实测数据
2. 添加幂函数拟合曲线
3. 显示公式和 R²
```

**Claude 会创建的代码：**
```python
import pandas as pd
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit
from sklearn.metrics import r2_score

# 幂函数模型
def power_law(x, a, b):
    return a * (x ** b)

# 读取数据
df = pd.read_csv('stage_discharge.csv')

# 曲线拟合
popt, _ = curve_fit(power_law, df['Stage'], df['Flow'])
a, b = popt

# 计算预测值和 R²
flow_pred = power_law(df['Stage'], *popt)
r2 = r2_score(df['Flow'], flow_pred)

# 绘图
fig, ax = plt.subplots(figsize=(8, 6))
ax.scatter(df['Stage'], df['Flow'], alpha=0.6, label='实测数据')

# 绘制拟合曲线
stage_range = np.linspace(df['Stage'].min(), df['Stage'].max(), 100)
flow_fit = power_law(stage_range, *popt)
ax.plot(stage_range, flow_fit, 'r-',
        label=f'拟合曲线: Q = {a:.2f} × H^{b:.2f}\nR² = {r2:.3f}')

ax.set_xlabel('水位 (m)')
ax.set_ylabel('流量 (m³/s)')
ax.set_title('水位-流量关系曲线')
ax.legend()
ax.grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('stage_discharge_curve.png', dpi=300)
```

### 案例9：多站对比图

**任务描述：**
```
在同一张图上对比三个水文站的流量过程：
- 使用不同颜色和线型
- 添加图例
- 使用子图布局
```

---

## 水质数据分析

### 案例10：水质指标统计

**任务描述：**
```
分析水质监测数据：
1. 计算各指标的平均值、标准差
2. 判断是否超过水质标准
3. 生成统计报表
```

**Claude 会创建的代码：**
```python
import pandas as pd

# 读取水质数据
df = pd.read_csv('water_quality.csv')

# 定义水质标准（以地表水III类标准为例）
standards = {
    'pH': (6, 9),
    'DO': 5,        # 溶解氧 >= 5
    'CODcr': 20,    # 化学需氧量 <= 20
    'NH3_N': 1.0,   # 氨氮 <= 1.0
    'TP': 0.2       # 总磷 <= 0.2
}

# 计算统计量
stats_df = df[['pH', 'DO', 'CODcr', 'NH3_N', 'TP']].agg(['mean', 'std', 'min', 'max'])
print("水质指标统计：")
print(stats_df.round(2))

# 判断超标情况
print("\n超标情况分析：")
for param in ['DO', 'CODcr', 'NH3_N', 'TP']:
    standard = standards[param]
    if param == 'DO':
        exceed_rate = (df[param] < standard).mean() * 100
        print(f"{param}: {exceed_rate:.1f}% 样次低于标准 ({standard} mg/L)")
    else:
        exceed_rate = (df[param] > standard).mean() * 100
        print(f"{param}: {exceed_rate:.1f}% 样次超过标准 ({standard} mg/L)")
```

---

## 完整案例：洪水分析

### 案例11：完整的洪水事件分析

**任务描述：**
```
对 2023 年的一次洪水事件进行完整分析：
1. 读取洪水期间的水位和流量数据
2. 绘制洪水过程线
3. 计算洪水总量
4. 分析洪水特征（洪峰流量、涨水历时、落水历时）
5. 与历史洪水对比
```

**你可以这样告诉 Claude：**
```
请帮我创建一个完整的洪水分析脚本，包括以下步骤：

1. 数据准备：
   - 读取 flood_2023.csv（包含 Date, WaterLevel, Flow 三列）
   - 数据时间范围：2023-07-01 到 2023-08-31

2. 洪水特征计算：
   - 洪峰流量及出现时间
   - 洪水总量（积分计算）
   - 涨水段平均涨水率
   - 落水段平均落水率

3. 可视化：
   - 上图：水位过程线（标注洪峰）
   - 下图：流量过程线（填充总量区域）
   - 使用 2 子图垂直布局

4. 输出：
   - 打印洪水特征报告
   - 保存图表为 flood_analysis_2023.png

请创建一个完整的 Python 脚本
```

**Claude 会创建完整的脚本文件**，包含：
- 所有必要的导入
- 完整的数据处理流程
- 详细的注释
- 结果输出和可视化

---

## 实用提示

### 1. 提供数据示例

让 Claude 更好地理解你的数据格式：

```
我的数据格式如下：
Date,Station,Rainfall,Flow,WaterLevel
2023-01-01,A,0,120,2.5
2023-01-02,A,5.2,135,2.6
...
```

### 2. 说明数据特点

```
注意事项：
- 数据有缺失值，用 -999 表示
- 降雨量为 0 的天可能是缺测
- 流量单位是立方英尺每秒，需要转换
```

### 3. 指定输出格式

```
请生成：
1. Python 脚本文件
2. Markdown 格式的分析报告
3. 高分辨率图表（至少 300 dpi）
```

---

## 下一步

现在你已经了解了水文研究中的各种应用场景，接下来可以：

- 阅读 [04-进阶技巧](04-进阶技巧.md) 了解更多高级功能
- 尝试用自己的数据，让 Claude 帮你分析
- 探索 Claude 的专业技能（skills），如统计分析和可视化

---

[← 上一章：02-常用功能](02-常用功能.md) | [下一章：04-进阶技巧 →](04-进阶技巧.md)
