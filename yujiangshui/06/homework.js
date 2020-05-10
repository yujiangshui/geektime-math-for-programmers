function sortIt(arr11, arr22) {
  let arr3 = [];
  let arr1 = [...arr11];
  let arr2 = [...arr22];
  while (true) {
    let shift1 = arr1.shift();
    let shift2 = arr2.shift();

    if (shift1 === undefined) {
      arr3.push(shift2);
      arr3 = [...arr3, ...arr2];
      break;
    }
    if (shift2 === undefined) {
      arr3.push(shift1);
      arr3 = [...arr3, ...arr1];
      break;
    }

    if (shift1 < shift2) {
      arr3.push(shift1);
      arr2.unshift(shift2);
    } else {
      arr3.push(shift2);
      arr1.unshift(shift1);
    }
  }
  return [...arr3];
}

function split(array) {
  return [
    array.slice(0, Math.floor(array.length / 2)),
    array.slice(Math.floor(array.length / 2)),
  ];
}

function divide(array) {
  if (array.length === 1) {
    return array;
  } else if (array.length === 2) {
    let [left, right] = split(array);
    return sortIt(left, right);
  } else {
    let [left, right] = split(array);
    return sortIt(divide(left), divide(right));
  }
}

console.log('divide(num)', divide([0, 1]));
console.log('divide(num)', divide([2, 1]));
console.log('divide(num)', divide([2, 1, 4]));
console.log('divide(num)', divide([2, 1, 5, 9, 4]));
console.log('divide(num)', divide([7, 6, 2, 4, 1, 9, 3, 8, 0, 5]));
console.log('divide(num)', divide([3434, 3356, 67, 12334, 878667, 387]));
