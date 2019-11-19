// 抽奖
// 10个人，1个一等奖、2个二等奖

const members = ['A', 'B', 'C', 'D', 'E'];


// 敲定一等奖
for (let index1 = 0; index1 < members.length; index1++) {
  let award1 = members[index1];

  // 从剩下的数字中选出两个二等奖，怎么选呢？
  // 先选一个，再从后面选一个。
  for (let index2 = 0; index2 < members.length; index2++) {
    if (index2 === index1) continue;

    let award2 = members[index2];

    // index3 = index2+1 因为两个二等奖是一样的，因为第2个二等奖一定要在第1个后面，否则就会重复
    for (let index3 = index2 + 1; index3 < members.length; index3++) {
      if (index3 === index1 || index3 === index2) continue;

      let award3 = members[index3];
      console.log(`一等奖：${award1}；二等奖：${award2}、${award3}。`);
    }
  }
};

//功能倒是实现了，但是感觉有点不优雅
