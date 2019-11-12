# 余数：原来取余操作本身就是个哈希函数

## 余数的特征

> 整数是没有边界的，可以无穷大，也可无穷小；而余数是有边界的，永远都会有一个范围值。

## 余数的应用场景

哈希（hash）表、加密算法、日历组件、生活中的星期、奇偶数；

## example

```javascript
// 不考虑最高为 0 的情况
const round = Math.floor(Math.random()*1000000);
const size = 7;
const consults=[];
function encrypt(num){
    let value;
    let arr = num.toString().split('').map((item)=>{
        value = Number(item) +round
        consults.push(Math.floor(value/size));
        return value%size
    });
    const temporal = arr[0];
    const length = arr.length -1;
    arr[0] = arr[length];
    arr[length] = temporal;
    return Number(arr.join(''));
}
function decrypt(num){
    const length = consults.length -1;
    const arr = [];
    let value;
    num.toString().split('').forEach((item,index)=>{
        item = Number(item);
        if(index === 0){
            value = item + consults[length]*size - round
        }else if(index === length){
            value = item + consults[0]*size - round
        }else{
            value = item + consults[index]*size - round
        }
        arr.push(value);
    })
    const temporal = arr[0];
    const lengthArr = arr.length -1;
    arr[0] = arr[lengthArr];
    arr[length] = temporal;
    return Number(arr.join(''))
}

const num = encrypt(1021);
console.log(decrypt(num)); //1021
```