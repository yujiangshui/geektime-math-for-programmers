# 02 | 余数：原来取余操作本身就是个哈希函数

**余数总是在一个固定的范围内。**

整数是没有边界的，它可能是正无穷，也可能是负无穷。但是余数却可以通过某一种关系，让整数处于一个确定的边界内。

同余定理：给定一个正整数 m，如果两个整数 a 和 b 满足 a-b 能够被 m 整除，即 (a-b)/m 得到一个整数，那么就称整数 a 与 b 对模 m 同余，记作 a≡b(mod m)。对模 m 同余是整数的一个等价关系。

简单来说，就是两个整数 a 和 b，如果它们除以正整数 m 得到的余数相等，我们就可以说 a 和 b 对于模 m 同余。

**同余定理可以用来分类。**

## Hash 应用

将任意长度的输入，通过哈希算法，压缩为固定长度的输出。就是利用了余数的运算。

比如 100W 条记录，希望查询的时候减少查询，就可以先将其做 hash 运算然后分类并提供一个列表。之后查找数据的时候，就可以先做 hash 拿到一个列表，再进行遍历：

比如数据的 id 为数字，我们设计 100 个列表：

计算：id mod 100 = 0-100 的一个值，加入到列表中。

- 0: xx-xxx-xxx-xxxx
- 1: xx-x-xx-x-xxx
- ...

之后获取的 id 就可以先拿到对应序号的列表，再进行遍历。原本需要遍历 100W 次，现在需要一次 hash 计算 + 1W 次遍历，拿着内存空间换时间。

如果你想让数据更随机，可以添加一个随机数比如 `(x + Max) mod size` 这样就适合数据重新洗牌的应用场景，比如加密算法（secret）、MapReduce 的数据分发、记录的高速查询和定位等。

此外做数据库中间件分库分表也是基于 hash 运算，将数据分发到多个数据库中。

课程密码的简易实现：

```
max = 590127
mod = 7

function encode() {
  return [6,2,5].map(num => {
    return [(num + max) % mod, Math.floor((num + max) / mod)];
  })
}

value = encode()
console.log(encode());

function decode() {
  return value.map(item => {
    const [num, quotient] = item;
    return num + quotient * mod - max
  })
}

console.log(decode())
```
