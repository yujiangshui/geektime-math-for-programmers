var dictonary = [''];

class treeNode{
  constructor(char, sons, end, time, prefix){
    if(char) {
      this.char = char;
      this.root = false;
    }else {
      this.root = true;
    }
    
    // this.prefix = null;
    this.end = end;
    this.sons = sons;
    this.time = time;
    this.prefix = prefix; 
  };

}
// prefix如何插入进去
function buildTree(arr) {
  let root = new treeNode('', [], false, new Date().getTime(), '');
  let points = root.sons;
  for (let i=0; i<arr.length; i++) {
    const word = arr[i];
    console.log(word, '---+++');
    let prefix = '';
    for (let j=0; j<word.length; j++) {
      // 对于单个字符串的循环遍历
      const currentChar = word[j];
      let exists = points.find(item => item.char === currentChar);
      if(exists) {
        points = exists.sons;
      }else{
        let item = j === 
          arr.length -1 ? new treeNode(currentChar, [], false, new Date().getTime(), prefix) : new treeNode(currentChar, [], true, new Date().getTime(), prefix);
          points.push(item); 
          points = item.sons;
      }
      prefix = prefix + currentChar;
      // 单个单词的循环变化中，points一直在赋值和重置
    }
    // 某个字符串循环结束后，回到最初的数组
    points = root.sons;
  }
  return root;
}
// 深度优先搜索
let a = false;
function searchTree(tree, str) {
 
  // 搜索树的算法
  if (!tree || !tree.sons || !tree.sons.length) {
    return false
  }
  let root = tree.sons;
  for (let i = 0; i < root.length; i++) {
    if ((root[i]['prefix'] + root[i]['char']) === str) {
      a =  root[i]['time'];
      console.log(a);
     return true
    }
    if (root[i]['sons'] && !a) {
      searchTree(root[i], str);
    }
  }
  return a;
}

// function searchNode(tree, node) {

// }
