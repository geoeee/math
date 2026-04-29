# Week 1: 向量空间与线性变换

## 从一个具体问题开始

假设你在训练一个词嵌入模型,每个词被表示为一组数字:

$$
\text{"cat"} \to (0.2,\ 0.8,\ -0.1), \quad \text{"dog"} \to (0.3,\ 0.7,\ 0.0)
$$

你自然会问:
- "cat" 和 "dog" 的**中间点**是什么?→ 取平均 $\frac{1}{2}(\text{cat} + \text{dog})$
- "更极端的 cat" 是什么?→ 缩放 $2 \times \text{cat}$
- "cat 的对立面" 大概在哪?→ 取反 $-\text{cat}$

这些操作--**加法和缩放**--就是向量空间的全部核心。

一旦你发现某个集合上能自然地做这两件事,并且结果还留在集合内(不会"溢出"),那它就是一个向量空间。

**哪些东西是向量空间?** 不只是箭头!

| 例子 | 元素 | 加法 | 缩放 | AI 中对应 |
|------|------|------|------|----------|
| $\mathbb{R}^n$ | n 维数组 | 分量相加 | 分量乘标量 | Embedding 向量 |
| 函数空间 | $f: \mathbb{R} \to \mathbb{R}$ | $(f+g)(x) = f(x)+g(x)$ | $(cf)(x) = c \cdot f(x)$ | 激活函数的组合 |
| 矩阵空间 | $m \times n$ 矩阵 | 对应元素相加 | 每个元素乘标量 | 权重矩阵 |
| 多项式 | $a_0 + a_1 x + \cdots$ | 对应系数相加 | 所有系数乘标量 | 特征的多项式核 |

> 💡 **关键洞察:** 当我们说 "768维 Embedding 空间" 时,它就是 $\mathbb{R}^{768}$ 这个向量空间。词与词之间可以做加减和缩放,正是因为它们住在向量空间里。

---

## 核心概念

### 1. 向量空间的正式定义 (Vector Space)

上面的直觉用数学语言写出来,就是一个集合 $V$ 配上加法和标量乘法,满足以下公理:

**加法公理:**

| 性质 | 表达式 |
|------|--------|
| 封闭性 | $\mathbf{u} + \mathbf{v} \in V$ |
| 交换律 | $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$ |
| 结合律 | $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$ |
| 零向量 | $\exists\ \mathbf{0}\ \text{s.t.}\ \mathbf{v} + \mathbf{0} = \mathbf{v}$ |
| 逆元 | $\forall\ \mathbf{v},\ \exists\ {-\mathbf{v}}\ \text{s.t.}\ \mathbf{v} + (-\mathbf{v}) = \mathbf{0}$ |

**标量乘法公理:**

| 性质 | 表达式 |
|------|--------|
| 封闭性 | $c\mathbf{v} \in V$ |
| 分配律 | $c(\mathbf{u} + \mathbf{v}) = c\mathbf{u} + c\mathbf{v}$ |
| 分配律 | $(c + d)\mathbf{v} = c\mathbf{v} + d\mathbf{v}$ |
| 结合律 | $c(d\mathbf{v}) = (cd)\mathbf{v}$ |
| 单位元 | $1 \cdot \mathbf{v} = \mathbf{v}$ |

> **直觉回顾:** 这些公理只是在说"加法和缩放要像你期望的那样表现"。比如加法可以交换顺序、有零元、有负元。如果你觉得"当然应该这样"--恰好,向量空间就是把这个"当然"写成了数学。

**📝 示例:验证向量加法和缩放的封闭性**

> **题目:** 设 $\mathbf{u} = (1,2,3)$,$\mathbf{v} = (4,-1,2)$,计算 $\mathbf{u}+\mathbf{v}$ 和 $3\mathbf{u}$,验证结果仍在 $\mathbb{R}^3$ 中。

**解答:**

$$
\mathbf{u} + \mathbf{v} = (1+4,\ 2+(-1),\ 3+2) = (5, 1, 5) \in \mathbb{R}^3 \checkmark
$$
$$
3\mathbf{u} = (3,\ 6,\ 9) \in \mathbb{R}^3 \checkmark
$$

```python
u = [1, 2, 3]
v = [4, -1, 2]
add_result = [u[i]+v[i] for i in range(3)]
scale_result = [3*u[i] for i in range(3)]
print(f"u + v = {add_result}")   # [5, 1, 5]
print(f"3 * u = {scale_result}") # [3, 6, 9]
```

**输出:**
```
u + v = [5, 1, 5]  (仍在 R^3 中 ✓)
3 * u = [3, 6, 9]  (仍在 R^3 中 ✓)
```

---

### 2. 子空间 (Subspace)

**问题引入:** 在 768 维的词嵌入空间里,"所有动物词"的嵌入会不会占据某个"片区"?如果动物词之间做加减和缩放,结果还在这个片区内吗?

这就是"子空间"的直觉:大空间里的一块"自封闭"的区域--在里面做加法和缩放永远不会跑出去。

$V$ 的子集 $W$ 是子空间当且仅当 $W$ 对加法和标量乘法封闭。

**判定法(三合一):**

$$
W \leq V \iff \begin{cases} \mathbf{0} \in W \\ \mathbf{u}, \mathbf{v} \in W \Rightarrow \mathbf{u} + \mathbf{v} \in W \\ \mathbf{v} \in W,\ c \in F \Rightarrow c\mathbf{v} \in W \end{cases}
$$

**例子:**
- $\mathbb{R}^3$ 中过原点的平面 → ✅ 子空间
- $\mathbb{R}^3$ 中不过原点的平面 → ❌ 不是子空间(不含 $\mathbf{0}$)

**📝 示例:验证 $\lbrace(x,y): x+y=0\rbrace$ 是 $\mathbb{R}^2$ 的子空间**

> **题目:** 设 $W = \lbrace(x,y) \in \mathbb{R}^2 : x+y=0\rbrace$,证明 $W$ 是 $\mathbb{R}^2$ 的子空间。

**解答:** 验证三个条件:
1. $\mathbf{0} = (0,0)$,$0+0=0$ ✓
2. 取 $\mathbf{w}_1=(3,-3)$,$\mathbf{w}_2=(-1,1)$,$\mathbf{w}_1+\mathbf{w}_2=(2,-2)$,$2+(-2)=0$ ✓
3. $5\mathbf{w}_1=(15,-15)$,$15+(-15)=0$ ✓

```python
w1 = [3, -3]
w2 = [-1, 1]
w_sum = [w1[0]+w2[0], w1[1]+w2[1]]
w_scale = [5*w1[0], 5*w1[1]]
print(f"w1={w1}, x+y={sum(w1)}")
print(f"w2={w2}, x+y={sum(w2)}")
print(f"w1+w2={w_sum}, x+y={sum(w_sum)}")
print(f"5*w1={w_scale}, x+y={sum(w_scale)}")
```

**输出:**
```
w1=[3, -3], x+y=0
w2=[-1, 1], x+y=0
w1+w2=[2, -2], x+y=0  ✓
5*w1=[15, -15], x+y=0  ✓
```

---

### 3. 线性组合与张成 (Span)

**问题引入:** 你有 3 个基础情感向量:"快乐"、"悲伤"、"愤怒"。通过不同比例的混合,能否表达所有可能的情感?"70% 快乐 + 30% 悲伤" 就是一个线性组合。所有这种混合能达到的范围,就是这组向量的"张成"。

向量 $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n$ 的**线性组合**:

$$
c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots + c_n\mathbf{v}_n, \quad c_i \in F
$$

**张成:**

$$
\text{Span}\{\mathbf{v}_1, \ldots, \mathbf{v}_n\} = \lbrace \sum_{i=1}^{n} c_i \mathbf{v}_i \mid c_i \in F \rbrace
$$

> 这些向量"能到达"的所有位置。

**📝 示例:用线性组合到达目标向量**

> **题目:** 设 $\mathbf{v}_1=(1,0)$,$\mathbf{v}_2=(0,1)$,找系数 $c_1,c_2$ 使得 $c_1\mathbf{v}_1+c_2\mathbf{v}_2 = (3,7)$。

**解答:** $c_1=3, c_2=7$,即 $(3,7) \in \text{Span}\lbrace\mathbf{v}_1, \mathbf{v}_2\rbrace$。

```python
v1, v2 = [1, 0], [0, 1]
target = [3, 7]
c1, c2 = 3, 7
result = [c1*v1[0]+c2*v2[0], c1*v1[1]+c2*v2[1]]
print(f"{c1}*{v1} + {c2}*{v2} = {result}")
print(f"等于目标 {target}: {result == target}")
```

**输出:**
```
3*[1, 0] + 7*[0, 1] = [3, 7]
等于目标 [3, 7]: True
```

---

### 4. 线性无关 (Linear Independence)

**问题引入:** 你用 768 个维度表示词义,但真的需要这么多吗?如果某个维度可以由其他维度算出来,它就是"多余"的。线性无关 = 没有多余信息。

$$
\mathbf{v}_1, \ldots, \mathbf{v}_n \text{ 线性无关} \iff \left( \sum_{i=1}^n c_i \mathbf{v}_i = \mathbf{0} \implies c_1 = c_2 = \cdots = c_n = 0 \right)
$$

> **直觉:** 没有"多余的"向量--没有一个向量可以被其他向量线性表示。

**📝 示例:检验 $(1,2,3),(4,5,6),(7,8,9)$ 是否线性无关**

> **题目:** 判断 $\lbrace(1,2,3),(4,5,6),(7,8,9)\rbrace$ 是否线性无关。

**解答:** 尝试找非平凡解:$2\times(4,5,6)-(1,2,3) = (7,8,9)$,所以 $\mathbf{v}_3 = 2\mathbf{v}_2 - \mathbf{v}_1$,线性相关!

```python
v1, v2, v3 = [1,2,3], [4,5,6], [7,8,9]
check = [2*v2[i] - v1[i] for i in range(3)]
print(f"v1={v1}, v2={v2}, v3={v3}")
print(f"2*v2 - v1 = {check}")
print(f"等于 v3: {check == v3} → 线性相关!")
```

**输出:**
```
v1=[1, 2, 3], v2=[4, 5, 6], v3=[7, 8, 9]
2*v2 - v1 = [7, 8, 9]
等于 v3: True → 线性相关!
```

---

### 5. 基与维度 (Basis & Dimension)

**问题引入:** GPT 用 12288 维向量表示每个 token,BERT 用 768 维。这个数字是哪来的?它就是"基"的大小,也就是空间的维度--你需要多少个"方向"才能覆盖整个空间。

**基** = 既线性无关又张成整个空间的向量组。它是表示空间的"最小完备坐标系"。

$$
\mathbb{R}^2 \text{ 的标准基:} \lbrace \begin{pmatrix}1\\0\end{pmatrix},\ \begin{pmatrix}0\\1\end{pmatrix} \rbrace
$$

$$
\mathbb{R}^2 \text{ 的另一组基:} \lbrace \begin{pmatrix}1\\1\end{pmatrix},\ \begin{pmatrix}1\\-1\end{pmatrix} \rbrace
$$

**维度** $\dim(V)$ = 基中向量的个数。

> **关键定理:** 同一向量空间的任意两组基包含相同数量的向量。

**📝 示例:用不同的基表示同一个向量**

> **题目:** 设新基 $\mathbf{b}_1=(1,1)$,$\mathbf{b}_2=(1,-1)$,求向量 $\mathbf{v}=(3,1)$ 在新基下的坐标。

**解答:** 解 $c_1(1,1)+c_2(1,-1)=(3,1)$:$c_1+c_2=3$,$c_1-c_2=1$ → $c_1=2, c_2=1$。

```python
# 解方程组: c1+c2=3, c1-c2=1
c1 = (3 + 1) / 2  # = 2.0
c2 = (3 - 1) / 2  # = 1.0
print(f"向量 v = [3, 1]")
print(f"新基: b1=[1,1], b2=[1,-1]")
print(f"坐标: c1={c1}, c2={c2}")
print(f"验证: {c1}*[1,1] + {c2}*[1,-1] = [{c1+c2}, {c1-c2}]")
```

**输出:**
```
向量 v = [3, 1]
新基: b1=[1,1], b2=[1,-1]
坐标: c1=2.0, c2=1.0
验证: 2.0*[1,1] + 1.0*[1,-1] = [3.0, 1.0] ✓
```

---

### 6. 线性变换 (Linear Transformation)

**问题引入:** 神经网络每一层对输入向量做了什么?本质上就是一个线性变换(加上非线性激活函数)。线性变换 = "保持加法和缩放结构"的函数,它不会"扭曲"空间,只会拉伸、旋转、压缩。

$T: V \to W$ 是线性变换当且仅当:

$$
T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v}), \qquad T(c\mathbf{v}) = cT(\mathbf{v})
$$

> **直觉:** "直线变换后还是直线,原点不动"的变换。

**例子:**
- 旋转、缩放、投影、镜像 → ✅ 线性
- 平移 → ❌ **不是**线性的(原点移动了)

**📝 示例:验证 $T(x,y,z)=(x+y, y-z)$ 的线性性**

> **题目:** 验证 $T(\mathbf{a}+\mathbf{b}) = T(\mathbf{a}) + T(\mathbf{b})$ 和 $T(c\mathbf{a}) = cT(\mathbf{a})$。

**解答:** 取 $\mathbf{a}=(1,2,3)$,$\mathbf{b}=(4,-1,2)$,$c=5$:

```python
def T(v): return [v[0]+v[1], v[1]-v[2]]

a, b = [1,2,3], [4,-1,2]
ab = [a[i]+b[i] for i in range(3)]

print(f"T(a) = {T(a)}, T(b) = {T(b)}")
print(f"T(a+b) = {T(ab)}")
print(f"T(a)+T(b) = {[T(a)[i]+T(b)[i] for i in range(2)]}")
print(f"加法保持: {T(ab) == [T(a)[i]+T(b)[i] for i in range(2)]}")

c = 5
ca = [c*a[i] for i in range(3)]
print(f"T(5a) = {T(ca)}")
print(f"5*T(a) = {[c*T(a)[i] for i in range(2)]}")
print(f"缩放保持: {T(ca) == [c*T(a)[i] for i in range(2)]}")
```

**输出:**
```
T(a) = [3, -1], T(b) = [3, -3]
T(a+b) = [6, -4]
T(a)+T(b) = [6, -4]
加法保持: True  ✓
T(5a) = [15, -5]
5*T(a) = [15, -5]
缩放保持: True  ✓
```

---

### 7. 核与像 (Kernel & Image)

**问题引入:** 当你把 768 维的 Embedding 通过一个线性层压缩到 64 维时,丢失了什么?哪些信息保留了?
- **核 (Kernel)** = 被"压死"的向量--变换后变成 0 的那部分,就是丢失的信息
- **像 (Image)** = 输出能到达的范围,就是保留下来的信息

$$
\text{Ker}(T) = \{ \mathbf{v} \in V : T(\mathbf{v}) = \mathbf{0} \}
$$

$$
\text{Im}(T) = \{ T(\mathbf{v}) : \mathbf{v} \in V \}
$$

**维度定理(Rank-Nullity Theorem):**

$$
\boxed{\dim(V) = \dim(\text{Ker}(T)) + \dim(\text{Im}(T))}
$$

> 输入空间的维度 = 被压死的维度 + 输出能到达的维度

**📝 示例:求核并验证维度定理**

> **题目:** 对于 $T(x,y,z) = (x+y, y-z)$,求 $\text{Ker}(T)$ 并验证 Rank-Nullity 定理。

**解答:** 解 $x+y=0$ 且 $y-z=0$ → $x=-t, y=t, z=t$ → $\text{Ker}(T) = \text{Span}\lbrace(-1,1,1)\rbrace$

```python
def T(v): return [v[0]+v[1], v[1]-v[2]]

ker_vec = [-1, 1, 1]
print(f"Ker(T) = span{{(-1,1,1)}}")
print(f"T([-1,1,1]) = {T(ker_vec)}  (等于零向量 ✓)")
print(f"dim(Ker) = 1")
print(f"dim(Im) = 2  (因为 T 的矩阵秩为 2)")
print(f"Rank-Nullity: 1 + 2 = 3 = dim(R^3) ✓")
```

**输出:**
```
Ker(T) = span{(-1,1,1)}
T([-1,1,1]) = [0, 0]  (等于零向量 ✓)
dim(Ker) = 1
dim(Im) = 2
Rank-Nullity: 1 + 2 = 3 = dim(R^3) ✓
```

---

### 8. 矩阵表示

选定基 $\{\mathbf{e}_1, \ldots, \mathbf{e}_n\}$ 后,线性变换 $T$ 可用矩阵 $A$ 表示:

$$
T(\mathbf{v}) = A\mathbf{v}
$$

矩阵的**第 $j$ 列** = $T(\mathbf{e}_j)$（第 $j$ 个基向量的像）。

**📝 示例：写出线性变换的矩阵并验证**

> **题目：** 写出 $T(x,y,z)=(x+y, y-z)$ 的矩阵 $A$，验证 $A\mathbf{x} = T(\mathbf{x})$。

**解答：**
- $T(\mathbf{e}_1) = T(1,0,0) = (1,0)$ → 第1列
- $T(\mathbf{e}_2) = T(0,1,0) = (1,1)$ → 第2列
- $T(\mathbf{e}_3) = T(0,0,1) = (0,-1)$ → 第3列

$$
A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & -1 \end{pmatrix}
$$

```python
def T(v): return [v[0]+v[1], v[1]-v[2]]

# 矩阵 A = [[1,1,0],[0,1,-1]]
A = [[1,1,0],[0,1,-1]]
x = [2, 3, 1]

# 矩阵乘法 A@x
Ax = [sum(A[i][j]*x[j] for j in range(3)) for i in range(2)]

print(f"A = {A}")
print(f"x = {x}")
print(f"A@x = {Ax}")
print(f"T(x) = {T(x)}")
print(f"A@x == T(x): {Ax == T(x)}  ✓")
```

**输出：**
```
A = [[1, 1, 0], [0, 1, -1]]
x = [2, 3, 1]
A@x = [5, 2]
T(x) = [5, 2]
A@x == T(x): True  ✓
```

---

## 与 AI 的连接

| 数学概念 | AI 中的体现 |
|----------|------------|
| 向量空间 | Embedding 空间(词/句子 → 高维向量) |
| 线性变换 | 神经网络的线性层 $\mathbf{y} = W\mathbf{x} + \mathbf{b}$ |
| 基变换 | 不同表示空间之间的转换 |
| $\dim(V)$ | Embedding 维度(768, 1024, 4096 等) |
| $\text{Ker}(T)$ | 信息丢失(降维时被压缩的部分) |
| $\text{rank}(A)$ | LoRA 低秩适配的数学基础 |

---

## 对应材料

### 📖 Gallier & Quaintance

<script setup>
import YouTube from '../.vitepress/components/YouTube.vue'
import PDF from '../.vitepress/components/PDF.vue'
</script>

- **Chapter 2**: Vector Spaces, Bases, Linear Maps (p.41)
- **Chapter 3**: Matrices and Linear Maps (p.91)

<PDF src="https://www.cis.upenn.edu/~jean/math-deep.pdf" title="Gallier - Chapter 2: Vector Spaces" :page="41" height="700px" />

<PDF src="https://www.cis.upenn.edu/~jean/math-deep.pdf" title="Gallier - Chapter 3: Matrices and Linear Maps" :page="91" height="700px" />

### 🎬 3Blue1Brown - Essence of Linear Algebra

#### Ep 1: Vectors, what even are they?
<YouTube id="fNk_zzaMoSs" title="向量的多种理解" />

#### Ep 2: Linear combinations, span, and basis vectors
<YouTube id="k7RM-ot2NWY" title="线性组合、张成、基" />

#### Ep 3: Linear transformations and matrices
<YouTube id="kYB8IZa5AuE" title="线性变换 ↔ 矩阵" />

#### Ep 4: Matrix multiplication as composition
<YouTube id="XkY2DOUCWMU" title="矩阵乘法 = 变换复合" />

#### Ep 13: Change of basis
<YouTube id="P2LTAUO1TdA" title="基变换" />

---

## 练习题

### Part A - 基础题(确认概念理解)

**Q1.** 判断以下哪些是 $\mathbb{R}^2$ 的子空间,说明理由:

- (a) $\{(x, y) : x + y = 0\}$
- (b) $\{(x, y) : x + y = 1\}$
- (c) $\{(x, y) : x^2 + y^2 \leq 1\}$
- (d) $\{(x, y) : x = 2y\}$

---

**Q2.** 向量组 $\{(1, 2, 3),\ (4, 5, 6),\ (7, 8, 9)\}$ 是否线性无关?给出证明。

> 💡 提示:尝试写出一个非零线性组合等于零向量。

---

**Q3.** 设 $T: \mathbb{R}^3 \to \mathbb{R}^2$ 定义为 $T(x, y, z) = (x + y,\ y - z)$。

- (a) 验证 $T$ 是线性变换
- (b) 求 $\text{Ker}(T)$
- (c) 求 $\dim(\text{Im}(T))$
- (d) 写出 $T$ 在标准基下的矩阵

---

**Q4.** 证明:平移变换 $T(\mathbf{v}) = \mathbf{v} + \mathbf{a}$(其中 $\mathbf{a} \neq \mathbf{0}$)不是线性变换。

---

### Part B - 应用题(连接 AI)

**Q5.** 一个词嵌入模型把词映射到 $\mathbb{R}^4$:

$$
\text{king} \to \begin{pmatrix}1\\0\\1\\1\end{pmatrix}, \quad
\text{queen} \to \begin{pmatrix}1\\1\\1\\1\end{pmatrix}, \quad
\text{man} \to \begin{pmatrix}0\\0\\1\\0\end{pmatrix}, \quad
\text{woman} \to \begin{pmatrix}0\\1\\1\\0\end{pmatrix}
$$

验证 $\text{king} - \text{man} + \text{woman} = \text{queen}$。这个"向量类比"能工作的数学原因是什么?

---

**Q6.** 一个线性层的权重矩阵 $W \in \mathbb{R}^{512 \times 768}$:

- (a) 输入维度 = ?输出维度 = ?
- (b) 这个变换的几何意义?(升维 / 降维 / 等维)
- (c) LoRA 将 $W \approx BA$,其中 $B \in \mathbb{R}^{512 \times 16}$,$A \in \mathbb{R}^{16 \times 768}$。$BA$ 的秩最大是多少?相比原始 $W$ 省了多少参数?

---

### Part C - 证明题(加深理解)

**Q7.** 证明:若 $T: V \to W$ 和 $S: W \to U$ 都是线性变换,则 $S \circ T: V \to U$ 也是线性变换。

---

**Q8.** 证明:$\text{Ker}(T)$ 是 $V$ 的子空间。

---

## ✅ 自测 Checklist

完成以上练习后:

- [ ] 能不查资料判断子空间
- [ ] 能求线性变换的核和像
- [ ] 能把线性变换写成矩阵
- [ ] 能解释 AI 中线性层的数学本质
- [ ] 理解维度定理(Rank-Nullity)的含义

**全部 ✅ → 进入 Week 2: 矩阵分解**
