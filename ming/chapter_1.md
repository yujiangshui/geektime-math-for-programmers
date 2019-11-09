## 十进制 二进制区别

- '1100101'转换为 10 进制的数字为 53, parseInt(value,2),只有 1 和 0 组成的才可以用 parseInt(value,2),53 的二进制就是 110101
- 逻辑右移和算数右移产生的原因就是第 32 位有一种可能是 1,逻辑右移时补充 0,算数右移时补充 1
- 左移不需要考虑这两种情况?

```javascript
//transform
const transform = (value, base) => {
 return parseInt(value, base);
};
//example
let a = "53";
let b = "110101";
console.log(transform(a, 10));
console.log(transform(b, 2));
//移位操作
//左移动 position='l'
//右移动 position='r'
const shift = (value, step, position) => {
 if(!['l','r'].includes(position)){
	 throw new Error('please enter valid position. It is either "l" or "r"');
}
 const stringValue = value.toString();
 const transformedArray = stringValue.split("");
 for (let i = 0; i < parseInt(step, 10); i++) {
  position === "r" && transformedArray.unshift("0");
  position === "l" && transformedArray.push("0");
 }
 const result = transformedArray.join("");
 return result;
};
/**
|--------------------------------------------------
| js has its own left shift and right shift function
|--------------------------------------------------
*/
function leftShift(value,step){
    return value<<step
}
function rightShift(value,step){
    return value>>step
}
/**
|--------------------------------------------------
| irrelevant => other js bitwise operators
|--------------------------------------------------
*/
^ xor: 二进制的相同位置的数相同时为0,不同时为1
~ Not: inverts the bits of binary, 110101=>101011
>>> 左边添加0
```

# <u>Questions</u>

- -53 的 2 进制如何表示,第 32 位为什么是 1?
- 什么是符号位?是第 32 位的数字吗?
