let Node = require('./链表创建');
/**
 * 反转链表
 */
function revert(firstNode) {
    let currentnode = firstNode;
    let prev = null;
    let next = null;
    while (currentnode) {
        next = currentnode.next_node;
        currentnode.next_node = prev;
        prev = currentnode;
        currentnode = next;
    }
    return prev;
}
/**
 * 反转m到n的链表
 * 1<=m<=n<=链表长度
 */
function revertBetween(firstNode, m, n) {
    let currentNode = firstNode;
    let currentIndex = 0;
    let prev = null;
    let tailNode = null;
    let frontNode = null;
    while (currentIndex <= n) {
        let next = currentNode.next_node;
        if (currentIndex >= m) {
            if (currentIndex == m) {
                tailNode = currentNode;
            }
            currentNode.next_node = prev;
            prev = currentNode;
        } else {
            frontNode = currentNode;
        }
        currentNode = next;
        currentIndex++;
    }
    frontNode ? (frontNode.next_node = prev) : (firstNode = prev);
    tailNode.next_node = currentNode;
    return firstNode;
}
/**
 * 反向打印链表的值
 * @param {}} head 
 */
function reversePrint(head) {
    let currentNode = head;
    let arr = [];
    while (currentNode) {
        arr.push(currentNode)
        currentNode = currentNode.next_node;
    }
    let print = new Array(arr.length);
    for (let i = 0; i < print.length; i++) {
        print[i] = arr.pop().data;
    }
    return print;
};

function copyList(head) {
    if (!head) {
        return null;
    }
    let copyNode = new Node();
    copyNode.data = head.data;
    copyNode.next_node = copyList(head.next_node)
    return copyNode;
}
module.exports = {
    revert,
    revertBetween,
    reversePrint,
    copyList
};