### 二进制的位操作

二进制左移一位，数字翻倍；右移一位，就是将数字除以 2 并求整数商的操作。

```javascript
var str = '101011'

var initial = Math.pow(2,5) + Math.pow(2,3) + Math.pow(2,1) + 1;
var leftShift = Math.pow(2,6) + Math.pow(2,4) + Math.pow(2,2) + Math.pow(2,1);
var rightShift = Math.pow(2,4) + Math.pow(2,2) + Math.pow(2,0)
console.log(initial, leftShift, rightShift); //43 86 21
```

### 思考题-10进制转2进制

```javascript
// 除2取余数
function decimalToBinary(num){
    if(num === 1){
        return 1
    }
    var surplus = num%2;
    return decimalToBinary((num-surplus)/2)+''+surplus
}
console.log(decimalToBinary(10)) // 1010
```
