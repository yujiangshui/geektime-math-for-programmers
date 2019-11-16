const dictionary = ['geek', 'geometry', 'abc', 'abd', 'abcc'];

class TreeNode {
  constructor(char, children, isWordEnd = false) {
    if (char) {
      this.char = char;
      this.isRoot = false;
    } else {
      this.isRoot = true;
    }
    this.children = children;
    this.isWordEnd = isWordEnd;
  }
}

function buildTree(dict) {
  const root = new TreeNode('', []);
  let pointer = root.children;

  for (let i = 0; i < dict.length; i++) {
    const word = dict[i];
    for (let j = 0; j < word.length; j++) {
      const currentChar = word[j];
      const existItem = pointer.find(item => item.char === currentChar);
      if (existItem) {
        pointer = existItem.children;
      } else {
        const newTreeNode =
          // is leaf means this can be a valid word
          j === word.length - 1
            ? new TreeNode(currentChar, [], true)
            : new TreeNode(currentChar, []);
        pointer.push(newTreeNode);
        pointer = newTreeNode.children;
      }
    }
    pointer = root.children;
  }

  return root;
}

const dictTree = buildTree(dictionary);
console.log('dictTree: ', JSON.stringify(dictTree));
