# 12 | 树的深度优先搜索（下）：如何才能高效率地查字典？

## 如何表示树？

- 数组
  - 优点：快速随机访问
  - 缺点：插入元素和删除低效，不适合稀疏的数列或者矩阵
- 链表：
  - 优点：不必实现规定数据的数量，利于数据的动态插入和删除
  - 缺点：随机访问的效率更低

因此模仿链表结构更适合表达树。

## 简单的实现方式（伪代码）

节点：

```
class TreeNode {
  label: string;
  sons: TreeNode[];
  prefix: string;

  constructor(label, prefix) {
    this.label = label;
    this.prefix = prefix;
    this.son = [];
  }
}
```

其中 prefix 表示边，即父节点。

创建一个链：

```
key = 'value';
node;
root = new TreeNode('root', null)

node = root.sons.find(son => son.label === key)
if (!node) {
  son = new TreeNode(key, root);
  root.sons.push(son);
  node = son;
}
```

遍历一个链（栈）：

```
stack = [];
stack.push(root);

while (!stack.length) {
  node = stack.pop();
  // ...
  stack.push(...)
}
```

## 什么样的编程方式可以实现对树结点和边的操作？

- 递归：查找比较合适，但是会缓存大量中间变量，消耗大量内存
- 栈：遍历比较合适

### 栈的特点

First In Last Out

### 用栈遍历

1. 将结点压栈
2. 将结点出栈，并处理结点
   1. 如果结点有 children 说明没到叶子结点，将子结点压栈
   2. 如果结点没有 children 说明到达叶子结点，进行数据处理或者匹配，当前分支结束
3. 栈清空，结束

### 栈的应用

栈先进后出的特性，可以模拟函数的递归调用。在计算机系统里面的函数递归，内部也是通过栈来实现的。

## 其他

我们可以用递归实现深度优先搜索，之前归并排序、排列组合也采用了递归实现，也算是一种深度优先搜索也可以用有向树来表示。

栈是先进后出，所以是深度优先。队列先进先出，适合广度优先。

## 思考题

图可能会有环，所以深度优先搜索时，需要记录搜索过的结点，避免死循环。

> 链表是特殊的树，树是特殊的图。
