/**
 * 求一个数的算术平方根
 */

function sqrt(num: number): number {
  return Math.sqrt(num);
}

console.log(sqrt(100));

function mySqrt(num: number, offset:number = 0.0001, maxTry: number = 100): number {
  if (num <= 1) { return 1; }

  let min = 1;
  let max = num;

  for (let i = 1; i < maxTry; i++) {
    let middle = (min + max )/2;

    let squre = middle * middle;

    if (Math.abs(squre - num) < offset * num) {
      return middle;
    }
    if (squre > num) {
      max = middle;
    } else {
      min = middle;
    }
  }
  return -1;
}

console.log(mySqrt(100));
console.log(mySqrt(9));