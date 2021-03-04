let Graph = require('./图创建');
let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
// g.dfs(2);
g.bfs(0)
g.shortestPath(4)
    //g.topSort();
    // console.log(g);
var isMonotonic = function(A) {
    return isSorted(A) || isSorted(A.reverse());
};

function isSorted(arr) {
    return arr.slice(1).every((item, i) => {
        return arr[i] <= item
    })
}

isMonotonic([1, 3, 2])