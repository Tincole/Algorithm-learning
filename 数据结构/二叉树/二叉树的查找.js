//时间复杂度O(logN);
function search(value, node) {
    //若值相等或这值不存在递归结束
    if (!node || node.value === value) return node;
    //值大于当前结点在右子树查找，反之在左子树查找
    if (value > node.vlaue) {
        return search(value, node.right);
    } else if (value < node.value) {
        return search(value, node.left);
    }
}