/**
 * i表示趟数，j从0开始，两两比较，如果前面的比后面的大就进行交换
 * 时间复杂度是O(N^2);
 * @param {*} list 
 */
function maopao(list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length - i - 1; j++) {
            if (list[j] > list[j + 1]) {
                let temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
    return list;
}
module.exports = maopao;