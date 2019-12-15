function buildTree(dict) {
    const tree = [];
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
                    children: []
                };
                pointer.push(newItem);
                pointer = newItem.children;
            }
        }
        pointer = tree;
    }
    return tree;
}

function searchTree(tree, word) {
    let pointer = tree;
    let j = 0;
    for (let i = 0; i < word.length; i++) {
        j = 0;
        const currentChar = word[i];
        for (; j < pointer.length; j++) {
            if (pointer[j].char === word[i]) {
                break;
            }
        }
        if (j === pointer.length) {
            return false;
        }
        if (pointer[j].children.length === 0 && i < word.length - 1) {
            return false;
        }
        pointer = pointer[j].children;
    }
    return true;
}

let dictionary = ['geek', 'geekBang', 'hello']
console.log(JSON.stringify(buildTree(dictionary)));
dictionary = buildTree(dictionary);
console.log(searchTree(dictionary, 'hello'));
console.log(searchTree(dictionary, 'gek'));
console.log(searchTree(dictionary, 'geekBangA'));