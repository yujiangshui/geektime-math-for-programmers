let count = 0;
for(i=0; i<= 10; i ++) {
  for(j=0; j<= 5; j ++) {
    for(k=0; k<= 2; k ++) {
      if( i + 2*j + 5*k === 10) {
        count += i*j*k;
        console.log(i, j, k);
      }
    }
  }
}



f(5) = 1 + f(2) + f(3)


sum = f(0) + f(5) + f(8) + f(9);
//括号内是几    最后给出去的面额就是    10 - 几
f(0) = 1;
f(5) = 1 + f(2) + f(3)
let arr=[1,2,5,10]
let total = [0, 1];
for(let i=1; i<4; i++ ){
  for(let j=arr[i]; j<=10; j++){
    total[j] += total[j-arr[i]]
  }
}
// 递归拿了别人的一段代码，感觉对mergeSort和while 的执行顺序比较疑惑，还需要想一想，增加对递归的理解
function mergeSort(arr) {

  console.log(1111, arr);
  const length = arr.length;
  if (length < 2) return arr;

  // 分半
  const length2 = Math.floor(length / 2);
  const arr1 = arr.slice(0, length2);
  const arr2 = arr.slice(length2);
  console.log(9999, arr1, arr2);

  const result1 = mergeSort(arr1);
  const result2 = mergeSort(arr2);

  console.log(8888, result1, result2);
  const result = [];

  let i1 = 0;
  let i2 = 0;

  while (i1 < result1.length || i2 < result2.length) {
console.log(52);
    let v1 = result1[i1];
    let v2 = result2[i2];

    if (v1 === undefined && v2 === undefined) {
      break;
    } if (v1 === undefined) {
      result.push(v2);
      i2++;
    } else if (v2 === undefined) {
      result.push(v1);
      i1++;
    } else if (v1 > v2) {
      result.push(v2);
      i2++;
    } else if (v1 < v2) {
      result.push(v1);
      i1++;
    } else {
      result.push(v1);
      result.push(v2);
      i1++;
      i2++;
    }
  }

  return result;
}

const originArr = [7, 6, 2, 4, 1, 9, 0, 3, 8, 5];
const sortedArr = mergeSort(originArr);
console.log(sortedArr);


