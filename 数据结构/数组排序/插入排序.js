/**
 * 1、将索引1的值拿走，依次向左比较，遇到比空隙的值大就将该值右移一格
 * 2、遇到比空隙值小的或者移到最左端，就结束平移
 * 时间复杂度O(N^2)
 * @param {*} list 
 */
function insertSort(list) {
    for (let i = 1; i < list.length; i++) {
        let postion = i;
        let temp = list[i];
        while (postion > 0 && list[postion - 1] > temp) {
            list[postion] = list[postion - 1];
            postion--;
        }
        list[postion] = temp;
    }
    return list;
}
module.exports = insertSort;