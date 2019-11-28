;(function(){
    /**
     * 获取目标数组里指定长度的组合；
     * @param {Array} priArr 
     * @param {Array} resultArr 
     * @param {Number} len  
     */
    function getCombine(restArr=[], resultArr=[], len=0,result=[]){
        if(resultArr.length === len){
            // console.log(resultArr);
            result.push(resultArr);
            return ;
        }
        for(let i = 0; i < restArr.length; i++){
            const newArr = [...resultArr];
            newArr.push(restArr[i]);
            getCombine(restArr.slice(i+1),newArr,len,result);
        }
        return result;
    }
    /**
     * 过滤掉使用了的数值
     * @param {*} primitiveArr 
     * @param {*} arr 
     */
    function getRestArr(primitiveArr, arr){
        const restArr = [];
        for(let item of primitiveArr){
            if(arr.indexOf(item)=== -1){
                restArr.push(item);
            }
        } 
        return restArr; 
    }
    
    const restArr=[], primitiveArr = [];
    const len = 3
    for(let i = 0; i<6; i++){
        restArr.push(i);
        primitiveArr.push(i);
    }
    let result = [{3:[]},{2:[]}];
    result[0][3] = getCombine(restArr,[],3,[]);
    for(let item of result[0][3]){
        let restArr = getRestArr(primitiveArr, item);
        
        result[1][2].push(getCombine(restArr, [], 2, []));
    }
    console.log(JSON.stringify(result))
})()

