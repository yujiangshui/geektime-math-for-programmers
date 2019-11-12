function getDistance(str1, str2) {
  let result = [];
  let str1l = str1.length + 1;
  let str2l = str2.length + 1;

  // 创建二维数组
  for (let i = 0; i < str1l; i++) {
    result[i] = [i];
  }
  for (let i = 0; i < str2l; i++) {
    result[0][i] = i;
  }

  for (let i = 1; i < str1l; i++) {
    for (let j = 1; j < str2l; j++) {
      temp = str1[i - 1] == str2[j - 1] ? 0 : 1;
      // result[i - 1][j] + 1 左方数字
      // result[i][j - 1] + 1 上方数字
      // result[i - 1][j - 1] + temp 左上方数字
      result[i][j] = Math.min(
        result[i - 1][j] + 1,
        result[i][j - 1] + 1,
        result[i - 1][j - 1] + temp
      );
    }
  }

  return result[str1.length][str2.length];
}

console.log(getDistance('', ''));
console.log(getDistance('', 'm'));
console.log(getDistance('m', 'm'));
console.log(getDistance('m', 'mn'));
console.log(getDistance('nm', 'mn'));
console.log(getDistance('mouse', 'mouuse'));
console.log(getDistance('mo12use', 'mouewuse'));
