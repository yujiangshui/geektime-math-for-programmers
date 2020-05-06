function split(num, str = '1') {
  if (num === 1) {
    console.log('str', str);
    return;
  }
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      // be careful about this new variable
      // have to create a new variable
      // avoid affecting the original str
      const newStr = str + `x${i}`;
      split(num / i, newStr);
    }
  }
}

split(4);
split(6);
split(8);
