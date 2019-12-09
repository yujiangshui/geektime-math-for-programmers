const data = [
  {
      name: 'a',
      children: [
          { name: 'b', children: [{ name: 'e' }] },
          { name: 'c', children: [{ name: 'f' }] },
          { name: 'd', children: [{ name: 'g' }] },
      ],
  },
  {
      name: 'a2',
      children: [
          { name: 'b2', children: [{ name: 'e2' }] },
          { name: 'c2', children: [{ name: 'f2' }] },
          { name: 'd2', children: [{ name: 'g2' }] },
      ],
  }
]


// 广度遍历, 输出所有元素
function getName(data) {
  let result = [];
  let queue = data;
  while (queue.length > 0) {
      [...queue].forEach(child => {
          queue.shift();
          result.push(child.name);
          child.children && (queue.push(...child.children));
      });
  }
  return result.join(',');
}

cgetName(data);
// 思考如何广度遍历指定维度的元素，比如说找出你的所有的几度关系的朋友 

