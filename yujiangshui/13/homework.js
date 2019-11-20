const mockFileTree = {
  name: 'root',
  children: [
    {
      name: 'a',
      children: [
        {
          name: 'aa',
          children: [],
        },
        {
          name: 'ab',
          children: [
            {
              name: 'abc',
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: 'b',
      children: [
        {
          name: 'ba',
          children: [
            {
              name: 'baa',
              children: [],
            },
            {
              name: 'bab',
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

function DFS(tree) {
  let stack = [];
  stack.push(tree);
  while (stack.length !== 0) {
    const currentNode = stack.pop();
    console.log(currentNode.name);
    if (currentNode.children && currentNode.children.length) {
      stack = stack.concat(currentNode.children);
    }
  }
}

DFS(mockFileTree);

console.log('=======');

function BFS(tree) {
  let stack = [];
  stack.push(tree);
  while (stack.length !== 0) {
    const currentNode = stack.shift();
    console.log(currentNode.name);
    if (currentNode.children && currentNode.children.length) {
      stack = stack.concat(currentNode.children);
    }
  }
}

BFS(mockFileTree);
