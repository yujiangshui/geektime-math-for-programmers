#### 03 | 迭代法：不用编程语言的自带函数，你会如何计算平方根？

什么是迭代法？迭代法，简单来说，其实就是不断地用旧的变量值，递推计算新的变量值。

迭代法的思想，很容易通过计算机语言中的循环语言来实现。你知道，计算机本身就适合做重复性的工作，我们可以通过循环语句，让计算机重复执行迭代中的递推步骤，然后推导出变量的最终值

数麦粒
```asm
rust版本

#[warn(unused_assignments)]
fn main() {
    let mut sum: u128 = 0;
    let mut number_grid: u128 = 1; // 当前格子里麦粒的数量
    for i in 1..63{
        number_grid *= 2;// 当前格子里麦粒的数量是前一格的2倍
        sum += number_grid; // 累计麦粒总数
        println!("{}", i);
    }
    println!("arr value = {}", sum);// 9223372036854775806
}
```
```asm
js版本
function total(n: number) {
    let sum: number = 0; // 麦粒子总数
    let numberOfWheatInGrid: number = 1; // 当前格子里麦粒的数量
    for (let i = 2; i <= n; i++) {
        numberOfWheatInGrid *= 2;// 当前格子里麦粒的数量是前一格的2倍
        sum += numberOfWheatInGrid; // 累计麦粒总数
    }
    return sum;
}

console.log(total(63)) // 9223372036854776000

```

#### 迭代法有什么具体应用？

*求数值的精确或者近似解。典型的方法包括二分法（Bisection method）和牛顿迭代法（Newton’s method）。
*在一定范围内查找目标值。典型的方法包括二分查找。机器学习算法中的迭代。
*相关的算法或者模型有很多，比如 K- 均值算法（K-means clustering）、PageRank 的马尔科夫链（Markov chain）、梯度下降法（Gradient descent）等等。迭代法之所以在机器学习中有广泛的应用，是因为很多时候机器学习的过程，就是根据已知的数据和一定的假设，求一个局部最优解。而迭代法可以帮助学习算法逐步搜索，直至发现这种解
