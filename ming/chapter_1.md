## 十进制 二进制区别

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
 if (position !== "l" || position !== "r") {
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

## TODO
- [] 逻辑右移 算数右移
```
