### 动态规划
- 通过不断分解问题，将复杂的问题简化为小问题，从而在局部解中找到最优解
- 子问题间的转移关系
- 两个字符串间的编辑距离

> 案例计算总额为100，给定【2，3，7】面额的纸币，求出最小数量纸币的组合（这是一个最优解）
>> 思路的话
- 先列出 金额为  1-5的组合 及其最小的数量   c(2) c(3) c(i) 为总额为i的时候，所需钱币的最小数量，一旦说到做小，那么就是需要比较取最小值
- 通过列出的图标 可以总结出一个 动态规划方程 v[j] 为钱币种类的某一个面值 c(i) = c(i - v[j]) + 1
- 得出结果呢 ，就是要在在一个金额的时候得出一个最小的值，在此基础上求取下一个金额的最小值
> 循环


      function countMin(total, currency) {
        let totalArr = new Array(total).fill(0);
        let tempCounts = new Array(currency.length).fill(0);
        for (let i=0; i < totalArr.length; i++) {
          for (let j=0; j < currency.length; j++) {
            if(i - currency[j] >= 0) {
              // 总额大于当前钱币的面值的情况下，去修改 对应的钱币的数量，因为是从小到大，所以肯定数量会从1开始
              tempCounts[j] = totalArr[i - currency[j]] + 1;
              // 为什么每次都+1呢， totalArr[i - currency[j]]代表的是上一个金额总和所需钱币的数量，+当前面值 （1张）
            }
            if(tempCounts[j] === 0) {
              m++;
            }
          }
          // 在tempCounts中0的组合是不存在的，比大小的时候要排除掉
          // 排除了0的干扰  但是还存在 totalArr[8 - 7]  这样的不符合常理的组合
          let filterTotalArr = tempCounts.filter(x=> x!==0 );
          if(filterTotalArr.length <= 0){
            totalArr[i] = 0;
          }else {
            totalArr[i] = Math.min(...filterTotalArr);
          }
         
            console.log('----', tempCounts, tempCounts.filter(x=> x!==0 ), totalArr[i], i );
      }



      // 这里为什么要+1呢, 上面的i总是比 total小1，这个答案好像不怎么合理，因为你把totalArr 初始化为ew Array(total+1).fill(0);后结果不对
      // 
      return totalArr[totalArr.length - 1]
    }


> 递归

    function recursion() {}
  