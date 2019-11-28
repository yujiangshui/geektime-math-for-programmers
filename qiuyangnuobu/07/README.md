## 排列：如何让计算机学会“田忌赛马”？

从 n 个不同的元素中取出 m（1≤m≤n）个不同的元素，按照一定的顺序排成一列，这个过程就叫排列（Permutation）

当 m=n 这种特殊情况出现的时候 这就是全排列（All Permutation）

如果选择出的这 m 个元素可以有重复的 ? 重复排列（Permutation with Repetition）: 不重复排列（Permutation without Repetition）

        function noRepeat(array) {
            let permArr = [], usedChars = [];
            function main(array) {
                let i, ch;
                for (i = 0; i < array.length; i++) {
                    ch = array.splice(i, 1)[0];
                    usedChars.push(ch);
                    if (array.length == 0) {
                        permArr.push(usedChars.slice());
                    }
                    main(array);
                    array.splice(i, 0, ch);
                    usedChars.pop();
                }
                return permArr
            }
            return main(array);
        }

        function repeat(array) {
            const result = []
                ; (function f(array, num, list = []) {
                    if (num == 0) {
                        return result.push(list)
                    } else {
                        for (let i = 0; i < array.length; i++) {
                            f(array, num - 1, list.concat([array[i]]))
                        }
                    }
                })(array, array.length)
            return result
        }

### 暴力破解密码如何使用排列思想

排列出所有的可能性，然后通过穷举的方式来获得最终的解