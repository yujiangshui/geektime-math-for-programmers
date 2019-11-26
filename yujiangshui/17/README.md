# 17 | 时间和空间复杂度（下）：如何使用六个法则进行复杂度分析？

复杂度分析的实际案例。

## 广度优先搜索

类似代码：

```
/**
* @Description:  通过广度优先搜索，查找好友
* @param user_nodes-用户的结点；user_id-给定的用户ID，我们要为这个用户查找好友
* @return void
*/

public static void bfs(Node[] user_nodes, int user_id) {

  if (user_id > user_nodes.length) return;  // 防止数组越界的异常

  Queue<Integer> queue = new LinkedList<Integer>();  // 用于广度优先搜索的队列

  queue.offer(user_id);    // 放入初始结点
  HashSet<Integer> visited = new HashSet<>();  // 存放已经被访问过的结点，防止回路
  visited.add(user_id);

  while (!queue.isEmpty()) {
    int current_user_id = queue.poll();    // 拿出队列头部的第一个结点
    if (user_nodes[current_user_id] == null) continue;

    // 遍历刚刚拿出的这个结点的所有直接连接结点，并加入队列尾部
    for (int friend_id : user_nodes[current_user_id].friends) {
      if (user_nodes[friend_id] == null) continue;
      if (visited.contains(friend_id)) continue;
      queue.offer(friend_id);
      visited.add(friend_id);  // 记录已经访问过的结点
      user_nodes[friend_id].degree = user_nodes[current_user_id].degree + 1;    // 好友度数是当前结点的好友度数再加1
      System.out.println(String.format("\t%d度好友：%d",  user_nodes[friend_id].degree, friend_id));
    }
  }

}
```

1. 判断边界条件：O(1)
2. 生成空队列：O(1)
3. 存入初始结点：O(1)
4. while + for 是循环次数相乘。假设每个结点有 m 个链接点，第一次循环拿到 m 个，再次循环拿到 m * m 个，所以搜索次数为 m + m*m + m*m*m + ... + m^l，简化为 O(m^l)

空间复杂度只有 queue 和 visited 有数据变化，跟访问的结点成正比，所以也是 O(m^l) 的趋势。

以上四步是平行的，所以要累加，但是其他的可以忽略不计，所以时间和空间复杂度是 O(m^l)

## 双向广度优先搜索

假设单向需要走 l 条边，那么双向只需要走 l/2 条边，所以就变成了 O(2\*m^(l/2)) 可以省掉前面的常数 2，但是不能省掉后面的 2 因为是指数。所以由此可以看出通常会比单向广度优先搜索节约一些。

如果双向的两个结点数量不一样，就需要再看最坏、最好和平均的复杂度是多少了。 todo

## 全文搜索

查找某个关键词是不是出现在一篇文章里，最基本的处理方式有两种：

1. 把全文当作一个很长的字符串，将用户输入作为子串，变成子串匹配问题。假设字符平均长度 n，关键词平均长度 m，每个字符两两相比，时间复杂度大概是 O(n\*m)
2. 全文分词，然后匹配输入的关键词，时间复杂度是 O(logm)

但如果文章量很大的花，数量级就增加了。需要引入 倒排索引（或者逆向索引），用牺牲空间来换取时间。

之前是文章 ID 对应标签（单词），现在反向用标签来映射文章 ID，因为我们通过关键词去搜索，所以直接像 hash 一样读取，时间复杂度就是 O(1) 到那时空间复杂度就是 O(n\*m)

## 思考题

有，主要还是用 `console.time` 等辅助方法来测试，然后分析逻辑为什么，再通过减少逻辑和循环等方式进行优化。
