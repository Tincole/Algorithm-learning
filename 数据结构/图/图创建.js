class Graph {
    constructor(v) {
        this.vertices = v;
        this.edges = 0;
        this.adj = [];
        this.marked = [];
        this.edgeTo = [];
        this.initVertices();
    }
    initVertices() {
        for (let i = 0; i < this.vertices; i++) {
            this.adj[i] = [];
            this.marked[i] = false;
        }
    }
    addEdge(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }
    dfs(v) { //从上往下遍历
        this.marked[v] = true;
        if (this.adj[v] !== undefined) {
            console.log('Visited vertex: ' + v);
        }
        for (let i = 0; i < this.adj[v].length; i++) {
            let w = this.adj[v][i]
            if (!this.marked[w]) {
                this.dfs(w);
            }
        }
    }
    bfs(s) {
        let queue = [];
        this.marked[s] = true;
        queue.push(s);
        while (queue.length > 0) {
            let v = queue.shift();
            if (this.adj[v] !== undefined) {
                console.log('Visited vertex: ' + v);
            }
            this.adj[v].forEach(w => {
                if (!this.marked[w]) {
                    this.edgeTo[w] = v; //表示所有的边（即两个顶点间的关系）
                    this.marked[w] = true;
                    queue.push(w)
                }
            })
        }
    }
    pathTo(v) {
        let source = 0;
        if (!this.marked[v]) {
            return undefined;
        }
        let path = [];
        while (v != source) {
            path.push(v);
            v = this.edgeTo[v];
        }
        path.push(source);
        return path;
    }
    shortestPath(v) {
        let paths = this.pathTo(v);
        while (paths.length > 0) {
            console.log('shortest path: ', paths.pop())
        }
    }
    topSort() {
        let stack = [];
        let visited = [];
        for (let i = 0; i < this.vertices; i++) {
            visited[i] = false;
        }
        for (let i = 0; i < this.vertices; i++) {
            if (!visited[i]) {
                this.topSortHelper(i, visited, stack);
            }
        }
        console.log(stack);
    }
    topSortHelper(v, visited, stack) { //深度优先遍历的变更，从最底部开始向上遍历
        visited[v] = true;
        this.adj[v].forEach(w => {
            if (!visited[w]) {
                this.topSortHelper(w, visited, stack);
            }
        })
        stack.push(v);
    }
}
module.exports = Graph;