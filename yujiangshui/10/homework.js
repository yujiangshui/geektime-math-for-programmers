function getCount(amount, currency) {
  let amountCountResults = new Array(amount).fill(0);
  let tempCountResults = new Array(currency.length).fill(0);
  for (let i = 0; i < amountCountResults.length; i++) {
    for (let j = 0; j < currency.length; j++) {
      if (i - currency[j] >= 0) {
        tempCountResults[j] = amountCountResults[i - currency[j]] + 1;
      }
    }
    amountCountResults[i] = Math.min(...tempCountResults);
  }

  return amountCountResults[amountCountResults.length - 1] + 1;
}

// console.log(getCount(6, [2, 5])); todo 这里应该返回无解而非 2
console.log(getCount(11, [1, 2, 5]));
console.log(getCount(100, [2, 3, 7]));

// todo 添加排列组合递归的解法
