# 06 | 递归（下）：分而治之，从归并排序到MapReduce

## 分而治之

降一个复杂的问题，分解成两个甚至多个规模相同或类似的子问题，然后对这些子问题再进一步细分，直到最后的子问题变得很简单，很容易就能求解出来，这样这个复杂的问题就求解出来了。

## 归并排序


**时间复杂度**： O(nlogn)

```javascript
//递归的时间复杂度计算其实也可以写成递归
T(1) = C // C 代表一个常量

T(n) = 2*T(n/2) + n
     = 2*(2*T(n/4) + n/2) + n = 4*T(n/4) + 2*n
     = 4*(2*T(n/8) + n/4) + 2*n = 8*T(n/8) + 3*n
     = 8*(2*T(n/16) + n/8) + 3*n = 16*T(n/16) + 4*n
     ......
     = 2^k * T(n/2^k) + k * n
     ......

//当 T(n/2^k)=T(1) 时，也就是 n/2^k=1，我们得到 k=log2n 。
```

**空间复杂度**: O(n)；尽管每次合并操作都需要申请额外的内存空间，但在合并完成之后，临时开辟的内存空间就被释放掉了。在任意时刻，CPU 只会有一个函数在执行，也就只会有一个临时的内存空间在使用。临时内存空间最大也不会超过 n 个数据的大小，所以空间复杂度是 O(n)。
