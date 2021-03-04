function deleteNode2(value, node) {
    if (!node) return null;
    if (value < node.value) {
        node.left = deleteNode2(value, node.left);
        return node;
    } else if (value > node.value) {
        node.right = deleteNode2(value, node.right);
        return node;
    } else {
        if (!node.left && node.right) {
            return node.right;
        } else if (!node.right && node.left) {
            return node.left;
        } else if (!node.left && !node.right) {
            return null;
        } else {
            node.right = lift(node.right, node);
            return node;
        }
    }
}

function lift(node, nodeDelete) {
    if (node.left) {
        node.left = lift(node.left, nodeDelete);
        return node;
    } else {
        nodeDelete.value = node.value;
        return node.right;
    }
}
module.exports = deleteNode2;