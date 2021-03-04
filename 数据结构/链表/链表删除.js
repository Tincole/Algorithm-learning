function delete_at_index(index, firstNode) {
    if (index === 0) {
        firstNode = firstNode.next_node;
        return firstNode;
    }
    let currentIndex = 0;
    let currentNode = firstNode;
    while (currentIndex < index - 1) {
        if (!currentNode) {
            return null;
        }
        currentNode = currentNode.next_node;
        currentIndex++;
    }
    if (!currentNode || !currentNode.next_node) {
        return null;
    }
    let deleteNode = currentNode.next_node;
    currentNode.next_node = deleteNode.next_node;
    return firstNode;
}

function delete_at_value(head, val) {
    if (head.data == val) {
        head = head.next_node;
        return head;
    }
    let currentNode = head;
    while (currentNode) {
        if (!currentNode || !currentNode.next_node) {
            return head;
        }
        let nextNode = currentNode.next_node;
        if (nextNode.data == val) {
            currentNode.next_node = nextNode.next_node;
            return head;
        }
        currentNode = nextNode;
    }
    return head;
};
module.exports = {
    delete_at_index,
    delete_at_value
}