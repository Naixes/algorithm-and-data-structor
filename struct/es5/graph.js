function Graph(v) {
    // 顶点
    this.vertices = v
    // 边
    this.edges = 0
    this.adj = []
    this.marked = []
    this.edgesTo = {}
    this.hasPath = hasPath
    this.pathTo = pathTo
    this.addEdge = addEdge
    this.showGraph = showGraph
    this.dfs = dfs
    this.bfs = bfs

    for (let i = 0; i < this.vertices; i++) {
        this.adj[i] = []
        this.marked[i] = false
    }
    function addEdge(a, b) {
        console.log(a, b);
        this.adj[a].push(b)
        this.adj[b].push(a)
        this.edges++
    }
    function showGraph() {
        for (let i = 0; i < this.vertices; i++) {
            var edges = ''
            for (let j = 0; j < this.vertices; j++) {
                if(typeof this.adj[i][j] !== 'undefined') {
                    edges += this.adj[i][j] + ' '
                }
            }
            console.log(i + '->' + edges);
        }
    }
    // 深度优先遍历
    function dfs(v) {
        this.marked[v] = true
        if(typeof this.adj[v]!== 'undefined') {
            console.log(v);
        }
        for(var j in this.adj[v]) {
            var current = this.adj[v][j]
            if(!this.marked[current]) {
                this.dfs(current)
            }
        }
    }
    // 广度优先
    function bfs(v) {
        var queue = []
        this.marked[v] = true
        queue.push(v)
        while(queue.length > 0) {
            var i = queue.shift()
            console.log(i);
            for(var j in this.adj[i]) {
                var current = this.adj[i][j]
                if(!this.marked[current]) {
                    this.marked[current] = true
                    this.edgesTo[current] = i
                    queue.push(current)
                }
            }
        }
        console.log('edgesTo', this.edgesTo);
    }
    // 最短路径
    function hasPath(v) {
        return this.marked[v]
    }
    function pathTo(v) {
        var source = '0'
        if(!this.hasPath(v)) {
            return undefined
        }
        var path = []
        for(var i = v; i !== source; i = this.edgesTo[i]) {
            console.log(i);
            path.push(i)
        }
        path.push(source)
        return path
    }
}

var g = new Graph(6)

g.addEdge('0','1')
g.addEdge('0','2')
g.addEdge('1','3')
g.addEdge('2','4')
g.addEdge('4','5')
g.showGraph()
// g.dfs('0')
g.bfs('0')
console.log(g.pathTo('5'));