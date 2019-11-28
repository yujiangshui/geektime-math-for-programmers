# MapReduce

## Merge Sort

```javascript
/**
|--------------------------------------------------
| @Description 归并排序
| @param array 是等待排序的数组
| @return 排序后的数组
|--------------------------------------------------
*/
const mergeSort = array => {
  if (array === null) return [];
  if (array.length == 1) return array;
  let mid = Math.floor(array.length / 2);
  let leftArray = array.slice(0, mid);
  let rightArray = array.slice(mid, array.length);
  leftArray = mergeSort(leftArray);
  rightArray = mergeSort(rightArray);
  let merged = merge(leftArray, rightArray);
  return merged;
};
console.log(Array.of(3).fill(0));
/**
|--------------------------------------------------
| @Description 合并两个数组
| @param a =>第一个数组, b=>第二个数组
| @return 合并后的数组
|--------------------------------------------------
*/
const merge = (a, b) => {
  if (a === null) a = [];
  if (b === null) b = [];
  let mergedArray = Array(a.length + b.length).fill(0);
  let mi = 0;
  ai = 0;
  bi = 0;
  while (ai < a.length && bi < b.length) {
    if (a[ai] <= b[bi]) {
      mergedArray[mi] = a[ai];
      ai++;
    } else {
      mergedArray[mi] = b[bi];
      bi++;
    }
    mi++;
  }
  if (ai < a.length) {
    for (let i = ai; i < a.length; i++) {
      mergedArray[mi] = a[i];
      mi++;
    }
  } else {
    for (let i = bi; i < b.length; i++) {
      mergedArray[mi] = b[i];
      mi++;
    }
  }
  return mergedArray;
};
/**
|--------------------------------------------------
| @Description this is a test case for merge sort
|--------------------------------------------------
*/
const to_sort = [3434, 3356, 67, 12334, 878667, 387];
const sorted = mergeSort(to_sort);
console.log(sorted);
```
