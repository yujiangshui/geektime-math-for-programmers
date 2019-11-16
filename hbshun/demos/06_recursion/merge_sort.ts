// 归并排序简单实现

function mergeSort(arr: number[]): number[] {

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
