# 23 | 文本分类：如何区分特定类型的新闻？

## 文本分类系统的基本框架

### 文本分类系统步骤：

1. 采集训练样本
   1. 预留一些训练样本，给这些样本打上标签用于机器学习的标准答案。
2. 预处理自然语言
   1. 将文本内容转化成计算机所能处理的数据
   2. 一套相对成熟的方法，包括词包（bag of words）、分词、词干（Stemming）和归一化（Normalization）、停用词（Stopword）、同义词（Synonyms）和扩展词处理。
3. 训练模型
   1. 训练模型就是算法通过训练数据进行模型拟合的过程。
   2. 对于朴素贝叶斯方法而言，训练的过程就是要获取每个分类的先验概率、每个属性的先验概率以及给定某个分类时，出现某个属性的条件概率。
4. 实时分类预测
   1. 算法模型在训练完毕后，根据新数据的属性来预测它属于哪个分类的过程。
   2. 对于朴素贝叶斯方法而言，分类预测的过程就是根据训练阶段所获得的先验概率和条件概率，来预估给定一系列属性的情况下属于某个分类的后验概率。

### 基于自然语言的预处理

**词袋（Bag of words）模型：** 这种模型会忽略文本中的词语出现的顺序以及相应的语法，将整篇文章仅仅看做是一个大量单词的组合。文本中每个词的出现都是独立的，不依赖于其他词的出现情况。

1. **分词：**计算机处理自然语言的基本单位是单词和词组。对于英语以空格划分，而中文没有空格就需要一定的算法来进行换分。
   1. 基于字符串匹配：如果发现字符串的子串和词相同，就算匹配成功。
   2. 基于统计和机器学习：这类分词基于人工标注的词性和统计特征，对中文进行建模。隐马尔科夫模型（HMM，Hidden Markov Model）和条件随机场（CRF，Conditional Random Field）
2. 取词干和归一化： 英文具有的单复数、各种时态。
   1. 取词干：为了减少词的变化形式，将派生词转化为基本形式；例如：将am，is，are，was，were全部转换为be
   2. 归一化：考虑大小写转化和多种拼写（例如 color 和 colour）这样的统一化
3. 停用词
   1. 将不影响相关性的词去掉。记录这些词的字典就叫通用词字典
   2. 可以在基本不损失语义的情况下，减少数据文件的大小，提高计算机处理的效率。
   3. 停用词要分场景，有时这些停用词就有意义的还需加权
4. 同义词和扩展词
   1. 同义词：（菠萝、凤梨），（番茄、西红柿）
   2. 扩展词：Dove 分别和多芬、德芙等价
   
### 运用朴素贝叶斯模型

文章的篇幅很长，常常会导致非常多的 P(f|c) 连续乘积，最后结果快速趋近于 0 以至于计算机无法识别。可以使用数学方法转换，比如 log，将小数转换为绝对值大于 1 的负数。


