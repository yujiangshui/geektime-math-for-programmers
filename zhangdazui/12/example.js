function TreeNode(label, prefix, explanation) {
    this.label = label;// 结点的名称，在前缀树里是单个字母
    this.prefix = prefix;// 从树的根到当前结点这条通路上，全部字母所组成的前缀。
    this.explanation = explanation;// 词条的解释
    this.sons = [];// 使用哈希映射存放子结点。
}

function buildTree(words) {
    const tree = new TreeNode('', '', 'root');
    let word;
    let treeNode = tree;
    let curNode = null;
    for (let i = 0; i < words.length; i++) {
        word = words[i].label;
        for (let j = 0; j < word.length; j++) {
            if (!treeNode.sons.find(item => item.label === word[j])) {
                curNode = new TreeNode(word[j], treeNode['prefix'] + word[j], j === word.length - 1 ? words[i].explanation : '');
                treeNode.sons.push(curNode)
            }
            treeNode = treeNode.sons.find(item => item.label === word[j])
        }
        treeNode = tree;
    }
    return tree;
}

function searchTree(tree, word) {
    let treeNode = tree;
    let label = word[0];
    treeNode = treeNode.sons.find(item => item.label === label);
    if (!treeNode) {
        return false;
    }
    if (treeNode.sons.length === 0 && word.length >1) {
        return false;
    }
    if (word.length === 1) {
        if(treeNode.explanation){
            return treeNode.explanation;
        }
        return false;
    }
    return searchTree(treeNode, word.slice(1))
}

let dictionary = [{
    label: 'geek',
    explanation: '极客'
}, {
    label: 'hello',
    explanation: '你好'
}]
console.log(JSON.stringify(buildTree(dictionary)));
const tree = buildTree(dictionary);
console.log(searchTree(tree, 'hell'));