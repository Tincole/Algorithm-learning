let TreeNode = require('./二叉树创建');

function insert(value, node) {
    if (value < node.value) {
        if (!node.left) { //左子结点不存在，则将值作为左子结点
            node.left = new TreeNode(value)
        } else {
            insert(value, node.left);
        }
    } else if (value > node.value) {
        if (!node.right) {
            node.right = new TreeNode(value)
        } else {
            insert(value, node.right);
        }
    }
}
module.exports = insert;