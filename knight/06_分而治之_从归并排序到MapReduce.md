# 递归(下):分而治之，从归并排序到MapReduce

<a name="95566613"></a>
## 归并排序

核心思想是将多个小的排序数列合成更大一点的排序数列，如此往复。其中，最小的排序数列即 序列中只存在一个元素的数列。<br />合并有序数列的逻辑如下:<br />假设存在两个从小到大的有序数列 A,B；

- 首先开辟一个额外的存储空间C，用于保存合并的结果。
- 比较两个数列的第一个元素，将更小的元素放入C中，并从源数列中删除
- 重复比较过程，直到A、B所有的数都被取出来并放入C中。

合并有序数列的前提，当然是进行合并的两个数列是有序的，那么如果数列不是有序的呢？<br />这个时候就用到了递归的思想，我们将问题不断简化，最小的序列是只包含一个元素的数列，而一个元素的数列是有序的，

问题来到如何将无序数列大小不断简化成小的数列直到一个元素，我们可以不断的将 长度为n的序列转化成，长度为 n-1的序列和长度为1的序列。<br />但是这样的处理没有并行性，如果无序数列很长，最终需要进行 n-1次的归并操作，效率很低。

所以，我们可以在归并排序中引入了分而治之（Divide and Conquer）的思想。分而治之，我们通常简称为分治。它的思想就是，将一个复杂的问题，分解成两个甚至多个规模相同或类似的子问题，然后对这些子问题再进一步细分，直到最后的子问题变得很简单，很容易就能被求解出来，这样这个复杂的问题就求解出来了。

回到原来的问题，归并排序通过分治的思想，把长度为n的序列，每次简化为两个长度为 n/2的数列。 这更有利于计算机的并行处理，只需要log2n次归并。 

而其中，分治的具体实现就可以用到递归: 即每次如果判断一个数列的大小不为1，则将源序列分为2个子序列，再继续判断这两个子序列；重复判断这两个子序列的大小，直到子序列的大小为1.

```java
    public static int[] merge_sort(int[] to_sort) {
        //如果序列长度为1，则返回该序列
        if (to_sort.length == 1)
            return to_sort;
		
        //拆分为两个子序列
        int mid = to_sort.length/2;
        int[] left = Arrays.copyOfRange(to_sort,0,mid);
        int[] right = Arrays.copyOfRange(to_sort,mid,to_sort.length);
		
        //递归调用，对两个子序列分别排序
        left = merge_sort(left);
        right = merge_sort(right);
      
        //如果执行到这，说明两个子序列已经是有序的，则进行合并
        int [] merged = merge(left,right);
        return  merged;

    }
```

合并子序列的代码如下

```java
    /**
     * @Description: 合并两个已经排序完毕的数组（从小到大） * @param a-第一个数组，b-第二个数组 * @return int[]-合并后的数组
     */
    public static int[] merge(int[] a, int[] b) {
        if (a == null) a = new int[0];
        if (b == null) b = new int[0];
        int[] merged_one = new int[a.length + b.length];
        int mi = 0, ai = 0, bi = 0; // 轮流从两个数组中取出较小的值，放入合并后的数组中
        while (ai < a.length && bi < b.length) {
            if (a[ai] <= b[bi]) {
                merged_one[mi] = a[ai];
                ai++;
            } else {
                merged_one[mi] = b[bi];
                bi++;
            }
            mi++;
        }
        // 将某个数组内剩余的数字放入合并后的数组中
        if (ai < a.length) {
            for (int i = ai; i < a.length; i++) {
                merged_one[mi] = a[i];
                mi++;
            }
        } else {
            for (int i = bi; i < b.length; i++) {
                merged_one[mi] = b[i];
                mi++;
            }
        }
        return merged_one;
    }
```


<a name="MJmfU"></a>
## 分布式系统中的分治思想

