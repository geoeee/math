# Week 1: 向量空间与线性变换

## 核心概念

### 1. 向量空间 (Vector Space)

一个集合 V 配上加法和标量乘法，满足 8 条公理：

**加法公理：**
- 封闭性：u + v ∈ V
- 交换律：u + v = v + u
- 结合律：(u + v) + w = u + (v + w)
- 零向量：存在 0 使得 v + 0 = v
- 逆元：对每个 v 存在 -v 使得 v + (-v) = 0

**标量乘法公理：**
- 封闭性：cv ∈ V
- 分配律：c(u + v) = cu + cv，(c + d)v = cv + dv
- 结合律：c(dv) = (cd)v
- 单位元：1·v = v

**直觉：** 向量空间就是"可以做加法和缩放的空间"。不一定是箭头，函数、矩阵、多项式都可以构成向量空间。

### 2. 子空间 (Subspace)

V 的子集 W 是子空间 ⟺ W 对加法和标量乘法封闭（且包含零向量）。

**判定法（三合一）：**
1. 0 ∈ W
2. u, v ∈ W → u + v ∈ W
3. v ∈ W, c ∈ F → cv ∈ W

**例子：**
- R³ 中过原点的平面是 R³ 的子空间
- R³ 中不过原点的平面**不是**子空间（没有零向量）

### 3. 线性组合与张成 (Span)

向量 v₁, v₂, ..., vₙ 的**线性组合**：c₁v₁ + c₂v₂ + ... + cₙvₙ

**张成 Span{v₁, ..., vₙ}** = 所有线性组合的集合 = 这些向量"能到达"的所有位置

### 4. 线性无关 (Linear Independence)

v₁, ..., vₙ 线性无关 ⟺ c₁v₁ + c₂v₂ + ... + cₙvₙ = 0 只有平凡解（所有 cᵢ = 0）

**直觉：** 没有"多余的"向量——没有一个向量可以被其他向量表示出来。

### 5. 基与维度 (Basis & Dimension)

**基：** 既线性无关又张成整个空间的向量组

- R² 的标准基：{(1,0), (0,1)}
- R² 的另一组基：{(1,1), (1,-1)}

**维度：** 基中向量的个数。dim(Rⁿ) = n

**关键定理：** 任何两组基包含相同数量的向量。

### 6. 线性变换 (Linear Transformation)

T: V → W 是线性变换 ⟺
- T(u + v) = T(u) + T(v)
- T(cv) = cT(v)

**直觉：** 保持"直线还是直线、原点不动"的变换。

**例子：**
- 旋转、缩放、投影、镜像 → 线性
- 平移 → **不是**线性的（原点移动了）

### 7. 核与像 (Kernel & Image)

- **核 Ker(T)** = {v ∈ V : T(v) = 0} — 被"压死"的向量
- **像 Im(T)** = {T(v) : v ∈ V} — 输出能到达的范围

**维度定理（秩-零度定理）：**
> dim(V) = dim(Ker(T)) + dim(Im(T))

### 8. 矩阵表示

选定基之后，任何线性变换都可以用矩阵表示：

T(v) = Av

矩阵的每一列 = 基向量的像。

---

## 与 AI 的连接

| 概念 | 在 AI 中的体现 |
|------|--------------|
| 向量空间 | Embedding 空间（词/句子 → 高维向量） |
| 线性变换 | 神经网络的线性层 y = Wx + b |
| 基变换 | 不同表示之间的转换 |
| 维度 | Embedding 维度（768, 1024 等） |
| 核 | 信息丢失（降维时被压缩的部分） |
| 秩 | LoRA 低秩适配的数学基础 |

---

## 对应材料

### 📖 Gallier & Quaintance
- **Chapter 2**: Vector Spaces, Bases, Linear Maps
- **Chapter 3**: Matrices and Linear Maps
- PDF: https://www.cis.upenn.edu/~jean/math-deep.pdf

### 🎬 3Blue1Brown — Essence of Linear Algebra
| 集数 | 标题 | 对应本节内容 |
|------|------|------------|
| Ep 1 | [Vectors, what even are they?](https://www.youtube.com/watch?v=fNk_zzaMoSs) | 向量的多种理解 |
| Ep 2 | [Linear combinations, span, and basis vectors](https://www.youtube.com/watch?v=k7RM-ot2NWY) | 线性组合、张成、基 |
| Ep 3 | [Linear transformations and matrices](https://www.youtube.com/watch?v=kYB8IZa5AuE) | 线性变换与矩阵 |
| Ep 4 | [Matrix multiplication as composition](https://www.youtube.com/watch?v=XkY2DOUCWMU) | 矩阵乘法 |
| Ep 13 | [Change of basis](https://www.youtube.com/watch?v=P2LTAUO1TdA) | 基变换 |

---

## 练习题

### 基础题（确认概念理解）

**Q1.** 判断以下哪些是 R² 的子空间：
- (a) {(x, y) : x + y = 0}
- (b) {(x, y) : x + y = 1}
- (c) {(x, y) : x² + y² ≤ 1}
- (d) {(x, y) : x = 2y}

**Q2.** 向量组 {(1, 2, 3), (4, 5, 6), (7, 8, 9)} 是否线性无关？为什么？

**Q3.** 设 T: R³ → R² 定义为 T(x, y, z) = (x + y, y - z)。
- (a) 验证 T 是线性变换
- (b) 求 Ker(T)
- (c) 求 dim(Im(T))
- (d) 写出 T 对应的矩阵

**Q4.** 为什么平移不是线性变换？用定义证明。

### 应用题（连接 AI）

**Q5.** 一个词嵌入模型把词映射到 R⁴：
- "king" → (1, 0, 1, 1)
- "queen" → (1, 1, 1, 1)
- "man" → (0, 0, 1, 0)
- "woman" → (0, 1, 1, 0)

验证 king - man + woman ≈ queen。这个"类比推理"能工作的数学原因是什么？

**Q6.** 一个线性层的权重矩阵 W 是 512×768：
- (a) 输入和输出的维度分别是多少？
- (b) 这个变换的几何意义是什么？（升维/降维/等维）
- (c) 如果用 LoRA 把 W 分解为 W = BA，其中 B 是 512×16，A 是 16×768，秩最大是多少？省了多少参数？

### 证明题（加深理解）

**Q7.** 证明：两个线性变换的复合仍然是线性变换。

**Q8.** 证明：Ker(T) 是 V 的子空间。

---

## 自测标准

完成以上练习后，检查：
- [ ] 能不用查资料判断子空间
- [ ] 能求线性变换的核和像
- [ ] 能把线性变换写成矩阵
- [ ] 能解释 AI 中线性层在做什么
- [ ] 理解维度定理的含义

全部打勾 → 进入 Week 2（矩阵分解）。
