## 02 | 余数：原来取余操作本身就是个哈希函数

余数的应用场景:分页，星期几

同余定理：简单来说，就是两个整数 a 和 b，如果它们除以正整数 m 得到的余数相等，我们就可以说 a 和 b 对于模 m 同余
f(x)= x mod size  x(等待被转换的值)  (mode)取余操作 size:有限存储空间的大小

####js取整数、取余数的方法

1. 丢弃小数部分,保留整数部分
```asm
parseInt(5/2)
```

2.向上取整,有小数就整数部分加1
 ```
Math.ceil(5/2)
```
3.四舍五入
```asm
Math.round(5/2)
```

4.向下取整
```asm
Math.round(5/2)
```

Math 对象的方法
FF: Firefox, N: Netscape, IE: Internet Explorer

方法 描述 FF N IE
abs(x) 返回数的绝对值 1 2 3
acos(x) 返回数的反余弦值 1 2 3
asin(x) 返回数的反正弦值 1 2 3
atan(x) 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值 1 2 3
atan2(y,x) 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间） 1 2 3
ceil(x) 对一个数进行上舍入。 1 2 3
cos(x) 返回数的余弦 1 2 3
exp(x) 返回 e 的指数。 1 2 3
floor(x) 对一个数进行下舍入。 1 2 3
log(x) 返回数的自然对数（底为e） 1 2 3
max(x,y) 返回 x 和 y 中的最高值 1 2 3
min(x,y) 返回 x 和 y 中的最低值 1 2 3
pow(x,y) 返回 x 的 y 次幂 1 2 3
random() 返回 0 ~ 1 之间的随机数 1 2 3
round(x) 把一个数四舍五入为最接近的整数 1 2 3
sin(x) 返回数的正弦 1 2 3
sqrt(x) 返回数的平方根 1 2 3
tan(x) 返回一个角的正切 1 2 3
toSource() 代表对象的源代码 1 4 -
valueOf() 返回一个 Math 对象的原始值

```asm
//取整
function getResult(num){
return parseInt(num);
}

//四舍五入到num后面的n位
function getResult(num,n){
return Math.round(num*Math.pow(10,n))/Math.pow(10,n);
}

//截取n位
function getresult(num,n){
return num.toString().replace(new RegExp("^(\\-?\\d*\\.?\\d{0,"+n+"})(\\d*)$"),"$1")+0;
}

```
