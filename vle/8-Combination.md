#### 08 | 组合：如何让计算机安排世界杯的赛程？
世界杯足球引出概念：组合

#### 组合定义
组合是指，从 n 个不同元素中取出 m（1≤m≤n）个不同的元素

对于所有 m 取值的组合之全集合，我们可以叫作全组合（All Combination）。例如对于集合{1, 2, 3}而言，全组合就是{空集, {1}, {2}, {3}, {1, 2}, {1,3} {2, 3}, {1, 2, 3}}。

* n 个元素里取出 m 个的组合，可能性数量就是 n 个里取 m 个的排列数量，除以 m 个全排列的数量，也就是 (n! / (n-m)!) / m!
* 对于全组合而言，可能性为 2^n 种。例如，当 n=3 的时候，全组合包括了 8 种情况

#### 如何让计算机来组合队伍？
如何使用递归从 3 个元素中选取 2 个元素的组合
* 先实现排列的代码，输出所有的排列。例如{t1, t2}, {t2, t1}；
* 针对每种排列，对其中的元素按照一定的规则排序。那么上述两种排列经过排序后，就是{t1, t2}, {t1, t2}
* 对排序后的排列，去掉重复的那些。上述两种排列最终只保留一个{t1, t2}

```asm
export const combine = (teams: string[], result: string[], m: any) => {
    if (result.length === m) {
        console.log(result)
        return
    }
    let newResult = [];
    let rest_teams = [];
    for (let i = 0; i < teams.length; i++) {
        newResult.push(teams[i])
        rest_teams = teams.slice(i + 1, teams.length)
        combine(rest_teams, newResult, m);
    }
}
let arr = ["t1", "t2", "t3"];
console.log(combine(arr, [], 2));

```

#### 组合的应用：如何高效地处理词组？
组合在计算机领域中也有很多的应用场景。比如大型比赛中赛程的自动安排、多维度的数据分析以及自然语言处理的优化等等

组合和排列有相似之处，都是从 n 个元素中取出若干个元素。不过，排列考虑了取出的元素它们之间的顺序，而组合无需考虑这种顺序。这是排列和组合最大的区别。因此，组合适合找到多个元素之间的联系而并不在意它们之间的先后顺序，例如多元文法中的多元组，这有利于避免不必要的数据保存或操作。具体到编程，组合和排列两者的实现非常类似。区别在于，组合并不考虑挑选出来的元素之间，是如何排序的。所以，在递归的时候，传入下一个嵌套调用函数的剩余元素，只需要包含当前被选元素之后的那些，以避免重复的组合。
```asm
// JavaScript实现
var arr = [1, 2, 3, 4, 5, 6];

function genGroup(arr, result, count) {
  if (result.length === count) {
    console.log(result);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    let new_arr = [...arr];
    let new_result = [...result];
    new_result.push(arr[i]);
    new_arr.splice(0, i + 1);
    genGroup(new_arr, new_result, count);
  }
}

genGroup(arr, [], 3);
```
