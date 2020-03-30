# 电商平台的搜索
- 电商平台的搜索，，用户输入的关键字通常短小，比如牛奶巧克力，用户是希望搜索巧克力， 巧克力牛奶，用户是希望搜索牛奶
- 向量空间在检索的时候会匹配到商品的所有信息，标题、特征、描述信息、类目，但是大多数信息是商家在介绍的时候添加的，跟用户想要所有的相关性误差比较大关键字出现的位置、词频的相关性的比重反而  很小，浓缩的标题反而是最重要的信息
- 如果不通过一定的过滤、搜索结果的体验会很差

### 商品分类
- 通过运营手动分类，提交的商品分类，过滤信息，这些属于质量比较高的数据，
- 方法 -》 朴素贝叶斯公式    我我我好像已经忘了
- 缺点，受商品的分布影响比较大，假设服饰类的商品数量很多，有很多牛奶字段，那么牛奶这个词属于服饰的概率还是很高的

### 用户行为轨迹的相关性
- 通过对用户的点击、浏览、收藏进行信息收集统计。来确定类别的相关性
- 缺点： 冷启动问题，在用户刚使用的时候，没有用户行为轨迹可以参考

### 最好就是两种犯法的结合，通过不同的权重占比

#### 开源的方法
- 可以在通用的开源的方法的基础上，定制化处理，增加某些商品的权重占比，动态的修改查询结果