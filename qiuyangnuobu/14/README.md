## 树的广度优先搜索（下）：为什么双向广度优先搜索的效率更高

### 如何更高效地求两个用户间的最短路径 -- 双向广度优先搜索

假设有两个人 a、b。我们首先从 a 出发，进行广度优先搜索，记录 a 的所有一度好友 a1​，然后看点 b 是否出现在集合 a1​ 中。如果没有，就再从 b 出发，进行广度优先搜索，记录所有一度好友 b1​，然后看 a 和 a1​ 是否出现在 b 和 b1​ 的并集中。如果没有，就回到 a，继续从它出发的广度优先搜索，记录所有二度好友 a2​，然后看 b 和 b1​ 是否出现在 a、a1​ 和 a2​ 三者的并集中。如果没有，就回到 b，继续从它出发的广度优先搜索。如此轮流下去，直到找到 a 的好友和 b 的好友的交集。如果有交集，就表明这个交集里的点到 a 和 b 都是通路。我们假设 c 在这个交集中，那么把 a 到 c 的通路长度和 b 到 c 的通路长度相加，得到的就是从 a 到 b 的最短通路长（这个命题可以用反证法证明），也就是两者为几度好友

我们假设每个地球人平均认识 100 个人，如果两个人相距六度，单向广度优先搜索要遍历 100^6=1 万亿左右的人。如果是双向广度优先搜索，那么两边各自搜索的人只有 100^3=100 万。

单向广度优先搜索之后查找匹配用户的开销更小，不过，综合考虑广度优先搜索出来的好友数量，双向广度优先搜索还是更有效

### 嵌套型聚合

广度优先策略可以帮助我们大幅优化数据分析中的聚合操作。聚合是数据分析中一个很常见的操作，它会根据一定的条件把记录聚集成不同的分组，以便我们统计每个分组里的信息。目前，SQL 语言中的 GROUP BY 语句，Python 和 Spark 语言中 data frame 的 groupby 函数，Solr 的 facet 查询和 Elasticsearch 的 aggregation 查询，都可以实现聚合的功能。

我们可以嵌套使用不同的聚合，获得层级型的统计结果。但是，实际上，针对一个规模超大的数据集，聚合的嵌套可能会导致性能严重下降

利用广度优先的策略，对这种问题进行优化

### 什么是多级嵌套的聚合，以及为什么它会产生严重的性能问题。

对于只需要返回前若干结果的应用场景，我们可以对图中的树状结构进行剪枝，去掉绝大部分不需要的结点和边，这样就能节省大量的内存和 CPU 计算

比如，如果我们只需要返回前 100 个参与项目最多的用户，那么就没有必要按照深度优先的策略，去扩展树中高度为 2 和 3 的结点了，而是应该使用广度优先策略，首先找出所有高度为 1 的结点，根据项目数量进行排序，然后只取出前 100 个，把计数器的数量从 5 万个一下子降到 100 个

如果一个项目用到排列组合的思想，我们需要在程序里使用大量的变量，来保存数据或者进行计算，这会导致内存和 CPU 使用量的急剧增加。在允许的情况下，我们可以考虑使用广度优先策略，对排列组合所生成的树进行优化。这样，我们就可以有效地缩减树中靠近根的结点数量，避免之后树的爆炸性生长。

### 小结

广度优先搜索，相对于深度优先搜索，没有函数的嵌套调用和回溯操作，所以运行速度比较快。但是，随着搜索过程的进行，广度优先需要在队列中存放新遇到的所有结点，因此占用的存储空间通常比深度优先搜索多。相比之下，深度优先搜索法只保留用于回溯的结点，而扩展完的结点会从栈中弹出并被删除。所以深度优先搜索占用空间相对较少。不过，深度优先搜索的速度比较慢，而并不适合查找结点之间的最短路径这类的应用。