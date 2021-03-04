/**
 * 1、进行分区，已最右边的值为轴
 * 2、左指针向右移动，当遇到大于或等于轴的值停下来
 * 3、右指针向左移动，当遇到小于或等于轴的值停下来
 * 4、将两指针的值进行交换
 * 5、重复上述步骤，直到两指针重合或者左指针在右指针右边
 * 6、若左指针的值大于轴的值，进行交换
 * 7、轴的位置找到后，分别递归轴的左区和右区
 * 8、当左指针大于或等于右指针停止递归
 * 时间复杂度O(NlogN)
 * 延伸：快速选择算法---在一个无序数组中找出第10小的值，利用快速排序和二分查找的结合即快速选择
 * @param {*} list 
 * @param {*} left 
 * @param {*} right 
 */
function quickSort(list, left, right) {
    if (left >= right) {
        return list;
    }
    let left_position = left;
    let right_position = right;
    let pivot_position = right_position;
    while (true) {
        while (list[left_position] < list[pivot_position]) {
            left_position++;
        }
        while (list[right_position] >= list[pivot_position]) {
            right_position--;
        }
        if (left_position < right_position) {
            let temp = list[left_position];
            list[left_position] = list[right_position];
            list[right_position] = temp;
        } else {
            if (list[left_position] > list[pivot_position]) {
                let temp = list[left_position];
                list[left_position] = list[pivot_position];
                list[pivot_position] = temp;
            }
            break;

        }
    }
    quickSort(list, left, left_position - 1);
    quickSort(list, left_position + 1, right);
    return list;
}
module.exports = quickSort;