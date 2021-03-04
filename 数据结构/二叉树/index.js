let TreeNode = require('./二叉树创建');
let insert = require('./二叉树的插入');
let deleteNode = require('./二叉树删除');
//let deleteNode2 = require('./二叉树/二叉树删除-练习');
let nodeList = [50, 25, 75, 11, 33, 61, 89, 30, 40, 52, 82, 95];
let root = new TreeNode(nodeList[0]);
for (let i = 1; i < nodeList.length; i++) {
    insert(nodeList[i], root);
}
deleteNode(75, root);
console.log(root);