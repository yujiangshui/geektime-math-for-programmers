const dictionary = ['geek', 'geometry', 'abc', 'abd'];

function buildTree(dict) {
  let tree = [];
  let pointer = tree;
  for (let i = 0; i < dict.length; i++) {
    const word = dict[i];
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
// console.log('dictTree: ', JSON.stringify(dictTree));

function searchTree(tree, word) {
  let wordChars = word;
  if (typeof word === 'string') {
    wordChars = word.split('');
  }
  const firstChar = wordChars.shift();
  const existItem = tree.find(item => item.char === firstChar);
  // 当前这一层没找到这个字符，终止
  if (!existItem) {
    return false;
  }
  // 当前是叶子结点，但是 word 还有字符，终止
  if (existItem.children.length === 0 && wordChars.length > 0) {
    return false;
  }
  // 当前 word 没了，叶子结点还有，查看是否是一个单词，例如词典：abc, abcd search abc
  // ？？如何判断是否是一个合法单词？?
  // Update: see 12 implementation, use isWordEnd
  if (wordChars.length === 0) {
    // todo if word is a valid word, then return true else false
  }
  if (wordChars.length === 0 && existItem.children.length === 0) {
    return true;
  }
  return searchTree(existItem.children, wordChars);
}

console.log(searchTree(dictTree, 'abc'));
console.log(searchTree(dictTree, 'adsafwc'));
console.log(searchTree(dictTree, 'geek'));
console.log(searchTree(dictTree, 'geometry'));
console.log(searchTree(dictTree, 'geometr'));
console.log(searchTree(dictTree, 'geometryy'));
