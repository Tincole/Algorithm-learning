let Node = require('./链表创建');

function insert(index, value, firstNode) {
    let newNode = new Node(value);
    if (index === 0) { //当在开头
        newNode.next_node = firstNode;
        firstNode = newNode;
        return firstNode;
    }
    let currentIndex = 0;
    let currentnode = firstNode;
    while (currentIndex < index - 1) {
        if (!currentnode) {
            return undefined;
        }
        currentnode = currentnode.next_node;
        currentIndex++;
    }
    if (!currentnode) {
        return null;
    }
    newNode.next_node = currentnode.next_node;
    currentnode.next_node = newNode;
    return firstNode;
}
module.exports = insert;