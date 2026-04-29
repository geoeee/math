# Week 1 练习卷：向量空间与线性变换

<style>
@media print {
  .vp-doc { max-width: 100% !important; }
  .VPNav, .VPSidebar, .VPFooter, .VPLocalNav { display: none !important; }
  body { font-size: 12pt; }
  h1 { font-size: 18pt; text-align: center; border-bottom: 2px solid #000; padding-bottom: 8px; }
  h2 { font-size: 14pt; margin-top: 24pt; }
  .exam-header { text-align: center; margin-bottom: 24pt; border: 1px solid #000; padding: 12pt; }
  .answer-space { border: 1px dashed #ccc; min-height: 120px; margin: 12px 0; padding: 8px; }
  .answer-space-large { border: 1px dashed #ccc; min-height: 200px; margin: 12px 0; padding: 8px; }
}
.answer-space { border: 1px dashed #999; min-height: 120px; margin: 12px 0; padding: 8px; border-radius: 4px; }
.answer-space-large { border: 1px dashed #999; min-height: 200px; margin: 12px 0; padding: 8px; border-radius: 4px; }
.exam-header { text-align: center; margin-bottom: 24px; border: 1px solid #ddd; padding: 16px; border-radius: 8px; }
</style>

<div class="exam-header">

**AI Math Roadmap — 线性代数模块**

**Week 1 练习卷：向量空间与线性变换**

姓名：_________________ 日期：_________________

总分：100分 | 时间：90分钟

</div>

---

## Part A：基础概念（每题 10 分，共 40 分）

### 第 1 题

判断以下哪些是 $\mathbb{R}^2$ 的子空间，**说明理由**：

- (a) $S_1 = \lbrace (x, y) \mid x + y = 0 \rbrace$
- (b) $S_2 = \lbrace (x, y) \mid x + y = 1 \rbrace$
- (c) $S_3 = \lbrace (x, y) \mid x^2 + y^2 \leq 1 \rbrace$
- (d) $S_4 = \lbrace (x, y) \mid x = 2y \rbrace$

<div class="answer-space-large"></div>

---

### 第 2 题

向量组 $\lbrace (1, 2, 3),\ (4, 5, 6),\ (7, 8, 9) \rbrace$ 是否线性无关？给出完整证明。

<div class="answer-space-large"></div>

---

### 第 3 题

设 $T: \mathbb{R}^3 \to \mathbb{R}^2$ 定义为 $T(x, y, z) = (x + y,\ y - z)$。

**(a)** 验证 $T$ 是线性变换。

<div class="answer-space"></div>

**(b)** 求 $\text{Ker}(T)$。

<div class="answer-space"></div>

**(c)** 求 $\dim(\text{Im}(T))$。

<div class="answer-space"></div>

**(d)** 写出 $T$ 在标准基下的矩阵表示。

<div class="answer-space"></div>

---

### 第 4 题

证明：平移变换 $T(\mathbf{v}) = \mathbf{v} + \mathbf{a}$（其中 $\mathbf{a} \neq \mathbf{0}$）不是线性变换。

<div class="answer-space-large"></div>

---

## Part B：AI 应用（每题 15 分，共 30 分）

### 第 5 题

一个词嵌入模型将词映射到 $\mathbb{R}^4$：

$$
\text{king} = \begin{pmatrix}1\\0\\1\\1\end{pmatrix}, \quad
\text{queen} = \begin{pmatrix}1\\1\\1\\1\end{pmatrix}, \quad
\text{man} = \begin{pmatrix}0\\0\\1\\0\end{pmatrix}, \quad
\text{woman} = \begin{pmatrix}0\\1\\1\\0\end{pmatrix}
$$

**(a)** 计算 $\text{king} - \text{man} + \text{woman}$，验证是否等于 $\text{queen}$。

<div class="answer-space"></div>

**(b)** 从线性代数的角度解释：为什么词嵌入空间中的向量算术可以表达语义类比关系？

<div class="answer-space-large"></div>

---

### 第 6 题

一个神经网络线性层的权重矩阵 $W \in \mathbb{R}^{512 \times 768}$。

**(a)** 输入维度 = ____，输出维度 = ____。

**(b)** 这个变换是升维、降维还是等维？从 $\mathbb{R}^{?}$ 映射到 $\mathbb{R}^{?}$。

<div class="answer-space"></div>

**(c)** LoRA 将 $W$ 近似为 $W \approx BA$，其中 $B \in \mathbb{R}^{512 \times 16}$，$A \in \mathbb{R}^{16 \times 768}$。

- $BA$ 的秩最大是多少？
- 原始 $W$ 有多少参数？$B + A$ 有多少参数？参数压缩比是多少？

<div class="answer-space-large"></div>

---

## Part C：证明题（每题 15 分，共 30 分）

### 第 7 题

证明：若 $T: V \to W$ 和 $S: W \to U$ 都是线性变换，则复合 $S \circ T: V \to U$ 也是线性变换。

<div class="answer-space-large"></div>

---

### 第 8 题

证明：$\text{Ker}(T)$ 是 $V$ 的子空间。

（提示：验证子空间判定的三个条件）

<div class="answer-space-large"></div>

---

<div style="text-align: center; margin-top: 32px; padding: 16px; border-top: 1px solid #ddd;">

**— 试卷结束 —**

打印提示：使用浏览器 Ctrl+P / Cmd+P 打印，建议选择 A4 纸张。

</div>
