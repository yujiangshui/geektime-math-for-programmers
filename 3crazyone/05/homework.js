function getRewardList(total = 0, result = []) {
  const rewards = [1, 2, 5, 10];

  if (total === 0) {
    console.log(result);
    return;
  } else if (total < 0) {
    return;
  } else {
    for (let i = 0; i < rewards.length; i++) {
      // getRewardList(total)
    }
  }
}
