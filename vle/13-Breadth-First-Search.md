#### 13 | 树的广度优先搜索（上）：人际关系的六度理论是真的吗？
#### 社交网络中的好友问题
人际关系不会超过6度，5度就有100亿了 100^3


#### 什么是广度优先搜索？
广度优先搜索（Breadth First Search），也叫宽度优先搜索，是指从图中的某个结点出发，沿着和这个点相连的边向前走，去寻找和这个点距离为 1 的所有其他点。只有当和起始点距离为 1 的所有点都被搜索完毕，才开始搜索和起始点距离为 2 的点。当所有和起始点距离为 2 的点都被搜索完了，才开始搜索和起始点距离为 3 的点，如此类推。
第二，广度优先搜索也可以让我们访问所有和起始点相通的点，因此也被称为广度优先遍历
```asm
let tree = {
    Id: 1, Name: "成品", Childs: [
        {
            Id: 2, Name: "半成品1", Childs: [
                {
                    Id: 5, Name: "半成品1-1",
                    Childs: [{Id: 8, Name: "半成品1-1-1", Childs: []}]
                },
                {Id: 6, Name: "半成品1-2", Childs: []}
            ]
        },
        {Id: 3, Name: "半成品2", Childs: []},
        {Id: 4, Name: "半成品3", Childs: []}
    ]
};

class Tree {
    public trace(node, f) {// 深度优先遍历
        if (node) {
            f(node)
        }
        node.Childs.forEach(element => {
            this.trace(element, f)
            console.log('ooo=', f)
        })
    }

    public Ntrace(node) {
        let nodes = new Array();
        nodes.push(node);
        while (nodes.length > 0) {
            let Child = nodes.shift();
            console.log(Child.Name);
            Child.Childs.forEach(element => {
                nodes.push(element);
            });
        }
    }
}

let a = new Tree()
console.log("广度优先")
a.Ntrace(tree)
console.log("深度优先")
a.trace(tree, f => {
    console.log(f.Name)
})
```

#### 深度优先和广度优先
* 深度优先就是自上而下的遍历搜索 
* 广度优先则是逐层遍历
#### 两者的区别
对于算法来说 无非就是时间换空间 空间换时间

* 深度优先不需要记住所有的节点, 所以占用空间小, 而广度优先需要先记录所有的节点占用空间大
* 深度优先有回溯的操作(没有路走了需要回头)所以相对而言时间会长一点
* 深度优先采用的是堆栈的形式, 即先进后出
* 广度优先则采用的是队列的形式, 即先进先出
```asm
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

// 深度遍历, 使用递归
function getName(data) {
    const result = [];
    data.forEach(item => {
        const map = data => {
            result.push(data.name);
            data.children && data.children.forEach(child => map(child));
        }
        map(item);
    })
    return result.join(',');
}

// 广度遍历, 创建一个执行队列, 当队列为空的时候则结束
function getName2(data) {
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

console.log(getName(data))
console.log(getName2(data))
```
