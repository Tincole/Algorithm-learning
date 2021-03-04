/**
 * 1、从左到右找出值最小的那个格子
 * 2、将最小的格子与本次检查的起点交换，比如第一次起点0，第二次是1
 * 时间复杂度是O(N^2)
 * @param {*} list 
 */
function selectSort(list) {
    for (let i = 0; i < list.length; i++) {
        let index = i;
        for (let j = i + 1; j < list.length; j++) {
            if (list[j] < list[index]) {
                index = j;
            }
        }
        if (index !== i) {
            let temp = list[i];
            list[i] = list[index];
            list[index] = temp;
        }

    }
    return list;
}
module.exports = selectSort;