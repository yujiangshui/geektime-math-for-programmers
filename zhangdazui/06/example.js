;(function(){
    function merge(left, right){
        let i = 0;
        let j = 0;
        let result = [];
        while(i<left.length && j<right.length){
            if(left[i]>right[j]){
                result.push(right[j]);
                j++;
            }else{
                result.push(left[i]);
                i++;
            }
        }
        if(i>=left.length){
            result = result.concat(right.slice(j));
        }else if(j>=right.length){
            result = result.concat(left.slice(i));
        }
        return result;
    }
    function mergeSort(arr){
        const len = arr.length;
        if(len <= 1){
            return arr;
        }
        const index = Math.floor(len/2);
        let left  = arr.slice(0, index);
        let right = arr.slice(index);
        left = mergeSort(left);
        right = mergeSort(right);
        const result = merge(left, right);
        return result;
    }
    console.log(mergeSort([6,2,3,5,9,1,2,1]));
})()