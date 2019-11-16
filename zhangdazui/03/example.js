/**
 * 计算格子的稻谷的数量
 * @param {Number} grid 
 */
function getNumberOfWheat(grid){
    let count = 0;
    let numberOfWheatInGrid = 0;

    numberOfWheatInGrid =1;
    count = 1;
    for(let i=2; i<=grid; i++){
        numberOfWheatInGrid*=2;
        count += numberOfWheatInGrid
    }
    return count;
}
console.log(getNumberOfWheat(64));