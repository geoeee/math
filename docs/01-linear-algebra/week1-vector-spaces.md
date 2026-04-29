# Week 1: 向量空间与线性变换

## 核心概念

### 1. 向量空间 (Vector Space)

一个集合 $V$ 配上加法和标量乘法，满足 8 条公理：

**加法公理：**

| 性质 | 表达式 |
|------|--------|
| 封闭性 | $\mathbf{u} + \mathbf{v} \in V$ |
| 交换律 | $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$ |
| 结合律 | $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$ |
| 零向量 | $\exists\ \mathbf{0}\ \text{s.t.}\ \mathbf{v} + \mathbf{0} = \mathbf{v}$ |
| 逆元 | $\forall\ \mathbf{v},\ \exists\ {-\mathbf{v}}\ \text{s.t.}\ \mathbf{v} + (-\mathbf{v}) = \mathbf{0}$ |

**标量乘法公理：**

| 性质 | 表达式 |
|------|--------|
| 封闭性 | $c\mathbf{v} \in V$ |
| 分配律 | $c(\mathbf{u} + \mathbf{v}) = c\mathbf{u} + c\mathbf{v}$ |
| 分配律 | $(c + d)\mathbf{v} = c\mathbf{v} + d\mathbf{v}$ |
| 结合律 | $c(d\mathbf{v}) = (cd)\mathbf{v}$ |
| 单位元 | $1 \cdot \mathbf{v} = \mathbf{v}$ |

> **直觉：** 向量空间就是"可以做加法和缩放的空间"。不一定是箭头——函数、矩阵、多项式都可以构成向量空间。

---

### 2. 子空间 (Subspace)

$V$ 的子集 $W$ 是子空间当且仅当 $W$ 对加法和标量乘法封闭。

**判定法（三合一）：**

$$
W \leq V \iff \begin{cases} \mathbf{0} \in W \\ \mathbf{u}, \mathbf{v} \in W \Rightarrow \mathbf{u} + \mathbf{v} \in W \\ \mathbf{v} \in W,\ c \in F \Rightarrow c\mathbf{v} \in W \end{cases}
$$

**例子：**
- $\mathbb{R}^3$ 中过原点的平面 → ✅ 子空间
- $\mathbb{R}^3$ 中不过原点的平面 → ❌ 不是子空间（不含 $\mathbf{0}$）

---

### 3. 线性组合与张成 (Span)

向量 $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n$ 的**线性组合**：

$$
c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots + c_n\mathbf{v}_n, \quad c_i \in F
$$

**张成：**

$$
\text{Span}\{\mathbf{v}_1, \ldots, \mathbf{v}_n\} = \Big\{ \sum_{i=1}^{n} c_i \mathbf{v}_i \;\Big|\; c_i \in F \Big\}
$$

> 这些向量"能到达"的所有位置。

---

### 4. 线性无关 (Linear Independence)

$$
\mathbf{v}_1, \ldots, \mathbf{v}_n \text{ 线性无关} \iff \left( \sum_{i=1}^n c_i \mathbf{v}_i = \mathbf{0} \implies c_1 = c_2 = \cdots = c_n = 0 \right)
$$

> **直觉：** 没有"多余的"向量——没有一个向量可以被其他向量线性表示。

---

### 5. 基与维度 (Basis & Dimension)

**基** = 既线性无关又张成整个空间的向量组。

$$
\mathbb{R}^2 \text{ 的标准基：} \left\{ \begin{pmatrix}1\\0\end{pmatrix},\ \begin{pmatrix}0\\1\end{pmatrix} \right\}
$$

$$
\mathbb{R}^2 \text{ 的另一组基：} \left\{ \begin{pmatrix}1\\1\end{pmatrix},\ \begin{pmatrix}1\\-1\end{pmatrix} \right\}
$$

**维度** $\dim(V)$ = 基中向量的个数。

> **关键定理：** 同一向量空间的任意两组基包含相同数量的向量。

---

### 6. 线性变换 (Linear Transformation)

$T: V \to W$ 是线性变换当且仅当：

$$
T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v}), \qquad T(c\mathbf{v}) = cT(\mathbf{v})
$$

> **直觉：** "直线变换后还是直线，原点不动"的变换。

**例子：**
- 旋转、缩放、投影、镜像 → ✅ 线性
- 平移 → ❌ **不是**线性的（原点移动了）

---

### 7. 核与像 (Kernel & Image)

$$
\text{Ker}(T) = \{ \mathbf{v} \in V : T(\mathbf{v}) = \mathbf{0} \}
$$

$$
\text{Im}(T) = \{ T(\mathbf{v}) : \mathbf{v} \in V \}
$$

**维度定理（Rank-Nullity Theorem）：**

$$
\boxed{\dim(V) = \dim(\text{Ker}(T)) + \dim(\text{Im}(T))}
$$

> 输入空间的维度 = 被压死的维度 + 输出能到达的维度

---

### 8. 矩阵表示

选定基 $\{\mathbf{e}_1, \ldots, \mathbf{e}_n\}$ 后，线性变换 $T$ 可用矩阵 $A$ 表示：

$$
T(\mathbf{v}) = A\mathbf{v}
$$

矩阵的**第 $j$ 列** = $T(\mathbf{e}_j)$（第 $j$ 个基向量的像）。

---

## 与 AI 的连接

| 数学概念 | AI 中的体现 |
|----------|------------|
| 向量空间 | Embedding 空间（词/句子 → 高维向量） |
| 线性变换 | 神经网络的线性层 $\mathbf{y} = W\mathbf{x} + \mathbf{b}$ |
| 基变换 | 不同表示空间之间的转换 |
| $\dim(V)$ | Embedding 维度（768, 1024, 4096 等） |
| $\text{Ker}(T)$ | 信息丢失（降维时被压缩的部分） |
| $\text{rank}(A)$ | LoRA 低秩适配的数学基础 |

---

## 对应材料

### 📖 Gallier & Quaintance

- **Chapter 2**: Vector Spaces, Bases, Linear Maps
- **Chapter 3**: Matrices and Linear Maps
- 📥 [PDF 下载](https://www.cis.upenn.edu/~jean/math-deep.pdf)

### 🎬 3Blue1Brown — Essence of Linear Algebra

| 集数 | 标题 | 对应内容 |
|:----:|------|----------|
| 1 | [Vectors, what even are they?](https://www.youtube.com/watch?v=fNk_zzaMoSs) | 向量的多种理解 |
| 2 | [Linear combinations, span, and basis vectors](https://www.youtube.com/watch?v=k7RM-ot2NWY) | 线性组合、张成、基 |
| 3 | [Linear transformations and matrices](https://www.youtube.com/watch?v=kYB8IZa5AuE) | 线性变换 ↔ 矩阵 |
| 4 | [Matrix multiplication as composition](https://www.youtube.com/watch?v=XkY2DOUCWMU) | 矩阵乘法 = 变换复合 |
| 13 | [Change of basis](https://www.youtube.com/watch?v=P2LTAUO1TdA) | 基变换 |

---

## 练习题

### Part A — 基础题（确认概念理解）

**Q1.** 判断以下哪些是 $\mathbb{R}^2$ 的子空间，说明理由：

- (a) $\{(x, y) : x + y = 0\}$
- (b) $\{(x, y) : x + y = 1\}$
- (c) $\{(x, y) : x^2 + y^2 \leq 1\}$
- (d) $\{(x, y) : x = 2y\}$

---

**Q2.** 向量组 $\{(1, 2, 3),\ (4, 5, 6),\ (7, 8, 9)\}$ 是否线性无关？给出证明。

> 💡 提示：尝试写出一个非零线性组合等于零向量。

---

**Q3.** 设 $T: \mathbb{R}^3 \to \mathbb{R}^2$ 定义为 $T(x, y, z) = (x + y,\ y - z)$。

- (a) 验证 $T$ 是线性变换
- (b) 求 $\text{Ker}(T)$
- (c) 求 $\dim(\text{Im}(T))$
- (d) 写出 $T$ 在标准基下的矩阵

---

**Q4.** 证明：平移变换 $T(\mathbf{v}) = \mathbf{v} + \mathbf{a}$（其中 $\mathbf{a} \neq \mathbf{0}$）不是线性变换。

---

### Part B — 应用题（连接 AI）

**Q5.** 一个词嵌入模型把词映射到 $\mathbb{R}^4$：

$$
\text{king} \to \begin{pmatrix}1\\0\\1\\1\end{pmatrix}, \quad
\text{queen} \to \begin{pmatrix}1\\1\\1\\1\end{pmatrix}, \quad
\text{man} \to \begin{pmatrix}0\\0\\1\\0\end{pmatrix}, \quad
\text{woman} \to \begin{pmatrix}0\\1\\1\\0\end{pmatrix}
$$

验证 $\text{king} - \text{man} + \text{woman} = \text{queen}$。这个"向量类比"能工作的数学原因是什么？

---

**Q6.** 一个线性层的权重矩阵 $W \in \mathbb{R}^{512 \times 768}$：

- (a) 输入维度 = ？输出维度 = ？
- (b) 这个变换的几何意义？（升维 / 降维 / 等维）
- (c) LoRA 将 $W \approx BA$，其中 $B \in \mathbb{R}^{512 \times 16}$，$A \in \mathbb{R}^{16 \times 768}$。$BA$ 的秩最大是多少？相比原始 $W$ 省了多少参数？

---

### Part C — 证明题（加深理解）

**Q7.** 证明：若 $T: V \to W$ 和 $S: W \to U$ 都是线性变换，则 $S \circ T: V \to U$ 也是线性变换。

---

**Q8.** 证明：$\text{Ker}(T)$ 是 $V$ 的子空间。

---

## ✅ 自测 Checklist

完成以上练习后：

- [ ] 能不查资料判断子空间
- [ ] 能求线性变换的核和像
- [ ] 能把线性变换写成矩阵
- [ ] 能解释 AI 中线性层的数学本质
- [ ] 理解维度定理（Rank-Nullity）的含义

**全部 ✅ → 进入 [Week 2: 矩阵分解](./week2-matrix-decomposition.md)**
