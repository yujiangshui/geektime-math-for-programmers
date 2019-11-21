#### 递归的思想

- 复杂的问题，每次都解决一点点，并将剩下的任务转化成为更简单的问题等待下次求解，如此反复，直到最简单的形式

```javascript
const rewards = [1, 2, 5, 10];

const get = (totalReward, result) => {
  if (totalReward == 0) {
    console.log(result);
  } else if (totalReward < 0) {
    return;
  } else {
    for (let i = 0; i < rewards.length; i++) {
      const newResult = [...result];
      newResult.push(rewards[i]);
      get(totalReward - rewards[i], newResult);
    }
  }
};

get(10, []);
```
