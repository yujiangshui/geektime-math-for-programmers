# 03 | 迭代法：不用编程语言的自带函数，你会如何计算平方根？

在计算数学中，**迭代**是通过从一个[初始](https://zh.wikipedia.org/wiki/初始)[估计](https://zh.wikipedia.org/w/index.php?title=估计&action=edit&redlink=1)出发寻找一系列[近似解](https://zh.wikipedia.org/w/index.php?title=近似解&action=edit&redlink=1)来解决问题（一般是解[方程](https://zh.wikipedia.org/wiki/方程)或者[方程组](https://zh.wikipedia.org/wiki/方程组)）的[数学](https://zh.wikipedia.org/wiki/数学)过程，为实现这一过程所使用的方法统称。

迭代法，简单来说，其实就是不断地用旧的变量值，递推计算新的变量值。

## 迭代法应用场景

- 求数值的精确或者近似解。典型的方法包括二分法（Bisection method）和牛顿迭代法（Newton’s method）。
- 在一定范围内查找目标值。典型的方法包括二分查找。
- 机器学习算法中的迭代。

### 二分法

> 二分法中很关键的前提条件是，所查找的区间是有序的。这样才能在每次折半的时候，确定被查找的对象属于左半边还是右半边。
