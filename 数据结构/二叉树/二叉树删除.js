/**
 * 先进行查找，查到后：
 * 1、如果删除的结点没有子结点，就直接删除
 * 2、如果删除的结点有一个子结点，就将子结点填入被删除结点的位置上
 * 3、如果删除的结点有两个子结点，则将该结点换成其后继结点（所有比被删除结点大的子结点中，最小的那个）
 *      如果后继结点带有右子结点，则在后继结点填补被删除结点以后，用此右子结点替代后继结点的父结点的左子结点
 * 
 * 如何查找后继结点？跳到被删除的结点的右子结点，然后一路往左子结点上跳，直到没有左子结点为止.所停留的结点就是后继结点
 */
function deleteNode(value, node) {
    //已达到树的底层
    if (!node) return null;
    //如果要删除的值小于当前的结点
    if (value < node.value) {
        //则以左子树为参数，递归调用。并将当前左链指向返回结点
        node.left = deleteNode(value, node.left);
        //将当前结点返回，作为其父结点的新左子结点
        return node;
    } else if (value > node.value) {
        node.right = deleteNode(value, node.right);
        return node;
    } else if (value === node.value) {
        //当删除结点只有一个子结点的情况下，将其填入被删除结点的位置上
        if (!node.left && node.right) {
            return node.right;
        } else if (!node.right && node.left) {
            return node.left;
        } else if (!node.right && !node.left) { //当删除结点没有子结点，直接删除
            return null;
        } else { //当删除结点有两个子结点,查找其后继结点，遍历当前结点的右结点
            node.right = lift(node.right, node);
            return node;
        }
    }
}

function lift(node, nodeDelete) {
    if (node.left) { //若左结点存在，一直向左子树进行遍历
        node.left = lift(node.left, nodeDelete);
        return node;
    } else { //当当前结点的左子树不存在的时候，将其替换到要被删除的结点。
        //替换后若当前结点还存在右结点，将其作为前一个结点的子结点。
        nodeDelete.value = node.value;
        return node.right;
    }
}
module.exports = deleteNode;