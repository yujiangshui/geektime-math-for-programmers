

interface Array<T> {
  fill(value: T): Array<T>;
}

function getStringDistance(a: String, b: String): number {
  if (!a || !b) return -1;

  const aLen = a.length;
  const bLen = b.length;

  const arr: number[][] = [];

  for (let j = 0; j <= aLen; j++) {
    let subArr = new Array(bLen + 1);
    if (j === 0) {
      for(let i = 0; i <= bLen; i++) {
        subArr[i] = i;
      }
    } else {
      subArr[0] = j;
    }
    arr.push(subArr);
  }

  for (let i = 0; i < aLen; i++) {
    for (let j = 0; j < bLen; j++) {
      let r = 0;
      if (a.charAt(i) !== b.charAt(j)) {
        r = 1;
      }
      let first_append = arr[i][j + 1] + 1;
      let second_append = arr[i + 1][j] + 1;
      let replace = arr[i][j] + r;
      let min = Math.min(first_append, second_append);
      min = Math.min(min, replace);
      arr[i + 1][j + 1] = min;
    }
  }

  return arr[aLen][bLen];
}

const distance = getStringDistance('appleabcde', 'ppleobcdef');

console.log(distance);
