let Node = require('./链表创建');
let LinkedList = require('./链表查找');
let insert = require('./链表插入');
let { delete_at_index, delete_at_value } = require('./链表删除');
let { revert, revertBetween, reversePrint, copyList } = require('./demo1');
let node1 = new Node('once');
let node2 = new Node('unpon');
node1.next_node = node2;
let node3 = new Node('a');
node2.next_node = node3;
let node4 = new Node('b');
node3.next_node = node4;
let list = new LinkedList(node1);
// console.log(list.read(4));
//console.log(list.search('once'));
// console.log(insert(6, 'b', node1))
// console.log(revert(list.firstNode))
//console.log(revertBetween(list.firstNode, 2, 3))
// console.log(delete_at_value(list.firstNode, 'c'))
// console.log(reversePrint(list.firstNode));
console.log(copyList(list.firstNode));