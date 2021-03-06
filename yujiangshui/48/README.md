# 48 | 搜索引擎（下）：如何通过查询的分类，让电商平台的搜索结果更相关？

## 电商搜索的难题

关键词搜索结果不精准，比如搜索“牛奶”会出现牛奶巧克力、牛奶色连衣裙等。但实际上想要搜索牛奶。

造成这种问题的原因是因为：

- 商品的标题比较短，内容比较杂乱可能附带其他冗余信息，可用来计算相关性的素材很少。
- 关键词出现的位置、词频对相关性意义不大，大家搜索时都是搜索关键词等。
- 用户查询比较短，因此查询的字数对于相关性也没有太大意义。

可以用分类来解决问题，比如当用户搜索“牛奶”时，我们先确定用户是希望找到牛奶分类还是巧克力分类，这样基于分类的搜索就可以提高准确度。

## 查询的分类

两种方法：

- 基于商品分类数据，运用朴素贝叶斯模型构建分类器
- 基于用户的搜索行为构建分类器

第一种方法，运营人员通常会构建商品的类目，然后基于类目发布商品，我们就可以用这些数据构造朴素贝叶斯分类器。主要通过商品的标题和属性的关键词，之后新的商品将可以自动进行归类。缺点是结果受到商品分布的影响比较大，比如很多服饰用到了“牛奶”的字眼，那么计算之后，这个词属于服饰分类的概率会比较高。

第二种方法，根据用户的使用习惯（过去购买和访问过的商品），确定用户最为关心的是哪些类目。比如经常浏览国产速溶咖啡，那么搜索咖啡的时候，就可以将速溶咖啡分类排在前面。优势是经过用户行为操作，我们可以得知更精准的分类。比如搜索牛奶出现了牛奶和牛奶色服饰，但用户都选择了牛奶，说明这个关键词跟牛奶分类更加相关。但是缺点是面临冷启动的问题，一开始没有很多用户数据。

所以解决方法就是线性加和，将两个算法结合起来用，根据不同时间段和场景，加上不同的权重。

## 查询分类和搜索引擎结合

流程设计：首先使用商品目录打造一个初始版本的查询分类器，不断收集用户使用行为，优化查询的分类器使其更加精准，进一步完善搜索引擎的相关性。

Elasticsearch 是一个基于 Lucene 的搜索服务器，就可以用 Boost 功能，在查询阶段，动态修改命中结果的得分，然后通过加入分类数据改变搜索结果。

## 总结

相关性模型是搜索引擎非常核心的模块，它直接影响了搜索结果是不是满足用户的需求。我们之前讲解的向量空间模型、概率语言模型等常见的模型，逐渐成为了主流的相关性模型。不过这些模型通常适用于普通的文本检索，并没有针对每个应用领域进行优化。

针对不同应用领域，需要结合其特点进行特殊的算法或者流程组合和优化使其达到更好的搜索效果。
