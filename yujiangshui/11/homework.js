const dictionary = ['geek', 'geometry', 'abc', 'abd'];

function buildTree(dict) {
  let tree = [];
  let pointer = tree;
  for (let i = 0; i < dictionary.length; i++) {
    const word = dictionary[i];
    for (let j = 0; j < word.length; j++) {
      const currentChar = word[j];
      const existItem = pointer.find(item => item.char === currentChar);
      if (existItem) {
        if (!existItem.children) {
          existItem.children = [];
        }
        pointer = existItem.children;
      } else {
        const newItem = {
          char: currentChar,
          children: [],
        };
        pointer.push(newItem);
        pointer = newItem.children;
      }
    }
    pointer = tree;
  }

  return tree;
}

const dictTree = buildTree(dictionary);
console.log('dictTree: ', JSON.stringify(dictTree));
