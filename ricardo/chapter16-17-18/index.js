// 快速排序
function quickSort(arr){
  if(arr.length<1){
      return arr;
  }
  var pivotIndex=Math.floor(arr.length/2);//找到那个基准数
  var pivot=arr.splice(pivotIndex,1)[0]; //取出基准数，并去除，splice返回值为数组。
  var left=[]; 
  var right=[];
  for(var i=0;i<arr.length;i++){
      if(arr[i]<pivot){
          // 比基准数小的放入左侧
          left.push(arr[i]);
      }else{
         // 比基准数大的放入右侧
          right.push(arr[i]);
      }
  }
  return quickSort(left).concat([pivot],quickSort(right)); //加入基准数
}
arr=[2,1,5,8,3,7,4,6,9];
console.log(quickSort(arr)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]