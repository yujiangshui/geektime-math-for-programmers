;
(function () {
    //求最短编辑距离
    function getStrDistance(a, b) {
        const lenA = a.length,
            lenB = b.length;
        const d = [];
        for (let i = 0; i <= lenA; i++) {
            d[i] = []; // 给 d 设置为二位数组
            d[i][0] = i;
        }

        for (let j = 0; j <= lenB; j++) {
            d[0][j] = j;
        }
        for (let i = 0; i < lenA; i++) {
            for (let j = 0; j < lenB; j++) {
                let r = a.charAt(i) !== b.charAt(j) ? 1 : 0;
                d[i + 1][j + 1] = Math.min(d[i + 1][j] + 1, d[i][j + 1] + 1, d[i][j] + r);
            }
        }
        return d[lenA][lenB];
    }

    console.log(getStrDistance('hello', 'abcde'));
    console.log(getStrDistance('', ''));
    console.log(getStrDistance('hello', 'helloo'));
})()

;(function (){
    // homework 
    function getCount(amount, currency){
        const counts = new Array(amount).fill(Infinity);
        for(let j = 0;j<currency.length;j++){
            counts[currency[j]] = 1;
        }
        for(let i = 1; i<=amount;i++){
            let tempCounts =[];
            for(let j = 0;j<currency.length;j++){
                if(i > currency[j]){
                    tempCounts[j] = counts[i-currency[j]] + 1
                }
            }
            if(tempCounts.length){
                counts[i] = Math.min(...tempCounts);
            }       
            
        }
        return counts[amount];
    }
    console.log(getCount(1,[2,3,7]))
    console.log(getCount(11,[2,3,7]))
    console.log(getCount(100,[2,3,7]))
})()