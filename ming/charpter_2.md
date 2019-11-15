## 同余定理

- 就是两个整数 a 和 b，如果它们除以正整数 m 得到的余数相等，我们就可以说 a 和 b 对于模 m 同余

```javascript
let exampleNum = "123";
let encrypedNum = "";
const encrypt = value => {
  const newArray = value.split("");
  newArray.forEach((el, index, arr) => {
    let newNum = (parseInt(el, 10) + randNum()) % 7;
    arr[index] = newNum;
  });
  let firstNum = newArray[0];
  let thirdNum = newArray[2];
  newArray[0] = thirdNum;
  newArray[2] = firstNum;
  const result = newArray.join("");
  return result;
};
encrypedNum = encrypt(exampleNum);
console.log(encrypedNum);
```
