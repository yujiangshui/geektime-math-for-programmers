;(function(){
    const charArr=['a','b','c','d','e'];
    let count = 0;
    function getArrange(priArr=charArr, resultArr=[], length=4){
        if(length === 0){
            count++;
            console.log(resultArr);
            return ;
        }
        --length;
        for(let char of priArr){
            const newArr = [...resultArr]
            newArr.push(char);
            getArrange(priArr,newArr, length);
        }
    }
    getArrange(charArr,[],4);
    console.log(count);
})()

