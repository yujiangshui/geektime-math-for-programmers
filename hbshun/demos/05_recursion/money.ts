/**
 * 给定不限量面额为1, 2, 5, 10的钱币
 * 给定固定的金额，比如10，14
 * 求用钱币组合固定金额的所有情况
 */


// 递归法
function recursion(count: number = 10, coins: number[]) {
  const results = [];

  function money (remaining: number = -1, used =[]) {
    if (remaining < 0) {
      return;
    } else if (remaining === 0) {
      console.log(used.join());
      results.push(used.join());
      return;
    }

    coins.forEach((item) => {
      money(remaining - item, [...used, item]);
    });
  }

  money(count);
  return results;
}

const coins = [1, 2, 5, 10];

const results = recursion(7, coins);
console.log(results);