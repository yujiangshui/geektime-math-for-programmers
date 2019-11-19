// 全排列生成算法

const chars = ['a', 'b', 'c', 'd'];
const result = [];

// 由这些字母组成的所有可重复的组合
function getAllStr(chars: string[], remaining: number = chars.length, str: string = '') {
  if (remaining == 0) {
    result.push(str);
    return;
  }

  for (let i = 0; i < chars.length; i++) {
    getAllStr(chars, remaining - 1, str + chars[i]);
  }
}
getAllStr(chars);
console.log(result);



// 全排列
function getAllPermutation(chars) {
  const allPermutation = [];

  function permutation(chars: string[], remaining: number = chars.length, str: string = '') {
    if (remaining == 0) {
      allPermutation.push(str);
      return;
    }
  
    for (let i = 0; i < chars.length; i++) {
      if(str.indexOf(chars[i]) === -1) {
        permutation(chars, remaining - 1, str + chars[i]);
      }
    }
  }

  permutation(chars);
  return allPermutation;
}

console.log(getAllPermutation(chars));

