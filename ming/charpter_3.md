## 迭代法的含义:

- 其实就是不断地用旧的变量值，递推计算新的变量值

#### 二分法:

```javascript
//1
const getNumWheat = num => {
  let sum = 0;
  let numOfWheat = 0;
  numOfWheat = 1;
  sum = sum + numOfWheat;

  for (let i = 2; i <= num; i++) {
    numOfWheat *= 2;
    sum = sum + numOfWheat;
  }
  return sum;
};
//2
const getSquareRoot = (number, deltaThreadhold, maxTry) => {
  if (number <= 1) return -1;
  let min = 1;
  let max = number;
  for (let i = 0; i < maxTry; i++) {
    let midNum = (min + max) / 2;
    let square = midNum * midNum;
    let delta = Math.abs(square / number - 1);
    if (delta <= deltaThreadhold) {
      return midNum;
    }
    if (square > number) {
      max = midNum;
    } else {
      min = midNum;
    }
  }
  return -2;
};
//3 好像不对
const dict = ["i", "am", "one", "of", "the", "authors", "in", "geekbang"];

dict.sort();
console.log(dict);

const search = (dict, word) => {
  let left = 0;
  let right = dict.length - 1;
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    console.log(middle);
    if (dict[middle] === word) {
      return true;
    } else {
      if (dict[middle].localeCompare(word) > 0) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    return false;
  }
};
```
