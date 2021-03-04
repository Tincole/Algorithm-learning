class LinkedList {
    constructor(firstNode = null, lastNode = null) {
        this.firstNode = firstNode;
        this.lastNode = lastNode;
    }
    read(index) { //读取
        let currentnode = this.firstNode;
        let currentIndex = 0;
        while (currentIndex < index) {
            currentnode = currentnode.next_node;
            currentIndex += 1;
            if (!currentnode) {
                return null;
            }
        }
        return currentnode.data;
    }
    search(value) { //查找
        let currentnode = this.firstNode;
        let currentIndex = 0;
        while (currentnode) {
            if (currentnode.data === value) {
                return currentIndex;
            }
            currentnode = currentnode.next_node;
            currentIndex++;
        }
        return null;
    }
}
module.exports = LinkedList;