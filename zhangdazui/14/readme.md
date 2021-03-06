# 14 | 树的广度优先搜索（下）：为什么双向广度优先搜索的效率更高？

## 如何更高效地求两个用户间的最短路径？

基本的做法是，从其中一个人出发，进行广度优先搜索，看看另一个人是否在其中。如果不幸的话，两个人相距六度，那么即使是广度优先搜索，同样要达到万亿级的数量。

随着社会关系的度数增加，好友数量是呈指数级增长的。如果我们能控制社会关系度数增长，那我们就能提高效率

### 双向广度优先搜索

它巧妙地运用了两个方向的广度优先搜索，大幅降低了搜索的度数。

#### 应用：如何实现更有效的嵌套型聚合？

广度优先策略可以帮助我们大幅优化数据分析中的聚合操作。

**聚合是数据分析**中一个很常见的操作，它会根据一定的条件把记录聚集成不同的分组，以便我们统计每个分组里的信息。

我们假设这个社交网有 5 万用户，每位用户平均在 5 家公司工作过，而用户在每家公司平均有 10 名共事的同事，那么针对用户的计数器有 5 万个，针对“每个用户 + 每个公司”的计数器有 25 万个，而到了“每个用户 + 每个公司 + 每位同事”的计数器，就已经达到 250 万个了，三个层级总共需要 280 万计数器。

**采用广度优先：**在允许的情况下，我们可以考虑使用广度优先策略，对排列组合所生成的树进行优化。这样，我们就可以有效地缩减树中靠近根的结点数量，避免之后树的爆炸性生长。

比如，如果我们只需要返回前 100 个参与项目最多的用户，那么就没有必要按照深度优先的策略，去扩展树中高度为 2 和 3 的结点了，而是应该使用广度优先策略，首先找出所有高度为 1 的结点，根据项目数量进行排序，然后只取出前 100 个，把计数器的数量从 5 万个一下子降到 100 个。


## 思考题

Q: 在哪个前提条件下，双向广度优先比单向广度优先更高效？

A: 
1. 两边数量级极度不对称的情况下一下，比如有 a b 两节点。a 的朋友 100 个， b的朋友 5个。这种情况下从 b 那边单向查询会更高效。 解决方法，动态判断两边的节点数量。
2. 无结果时，单向更高效。解决方法，设置个查询度数的阀值。