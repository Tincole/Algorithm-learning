let maopao = require('./冒泡排序');
let selectSort = require('./选择排序');
let insertSort = require('./插入排序');
let quickSort = require('./快速排序');
let list = [0, 5, 2, 1, 6, 3]
    // console.log(maopao(list));
    // console.log(selectSort(list));
    // console.log(insertSort(list));
console.log(quickSort(list, 0, list.length - 1));