/**
 * 赏金问题 假设有四种面额的钱币，1 元、2 元、5 元和 10 元，而您一共给我 10 元，那您可以奖赏我 1 张 10 元，或者 10 张 1 元，或者 5 张 1 元外加 1 张 5 元等等。
 */
;(function(){
    const rewards = [1,2,5,10];
    let total = 0;
    function getRewardTotal(totalReward,result = []){
        if(totalReward === 0){
            console.log(result);
            total++;
            return ;
        }
        if(totalReward < 0){
            return ;
        }
        for(const reward of rewards){
            const newResult = [...result];
            newResult.push(reward);
            getRewardTotal(totalReward - reward, newResult);
        }
    }
    getRewardTotal(10,[]);
    console.log(total);
})()

/**
 * 11个楼梯，每次走1或者2楼梯，一共有几种方法
 */
;(function(){
    function step(total){
        if(total === 2){
            return 2;
        }
        if(total === 1){
            return 1;
        }
        return step(total-1)+ step(total -2);
    }
    console.log(step(11));
})()

/**
 * 思考题：一个整数可以被分解为多个整数的乘积
 */
;(function(){
    function mulInter(num, arr){
        if(num === 1){
            if(arr.length === 1){
                arr.push(1);
                return ;
            }else if(arr.indexOf(1)>-1){
                console.log(arr);
                return ;
            }else{
                console.log(arr);
                arr.push(1);
                console.log(arr);
            }
            return ;
        }
        let i =1;
        if(arr.indexOf(1)>-1){
            i = 2;
        }
        for(;i<=num;i++){
            if(num%i !==0){
                continue;
            }
            const newArr = [...arr];
            newArr.push(i);
            mulInter(num/i,newArr);
        }
    }
    mulInter(8,[]);
})()