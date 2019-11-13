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
