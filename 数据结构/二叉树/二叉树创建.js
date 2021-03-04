/**
 * 二叉树规则
 * 1、每个结点的子结点数量可为0，1，2
 * 2、如果有两个子结点，则其中一个子结点的值必须小于父结点，另一个必须大于父结点
 */
class treeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
let node = new treeNode(1);
let node2 = new treeNode(10);
let root = new treeNode(5, node, node2);
module.exports = treeNode;