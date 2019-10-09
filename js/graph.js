if(!window.toastr){
    alert('Toastr is required');
}

COLOR_OPTIONS = ['rgba(255, 128, 0, 0.5)', 'rgba(191, 255, 0, 0.5)', 'rgba(0, 191, 255, 0.5)', 'rgba(255, 0, 255, 0.5)', 'rgba(0, 255, 128, 0.5)'];
var INDEX = Math.floor(Math.random() * COLOR_OPTIONS.length);
// var DEFAULT_NODE_COLOR = COLOR_OPTIONS[INDEX];
var DEFAULT_NODE_COLOR = 'rgba(0, 191, 255, 0.5)';
var HIGHLIGHT_NODE_COLOR = DEFAULT_NODE_COLOR.slice(0, -4) + '1)';
var VISITED_NODE_COLOR = 'rgba(102, 48, 0, 1)';
var DEFAULT_EDGE_COLOR = 'rgba(255, 255, 255, 0.5)';
var HIGHLIGHT_EDGE_COLOR = DEFAULT_EDGE_COLOR.slice(0, -4) + '1)';
var NEW_IDX = Math.floor(Math.random() * COLOR_OPTIONS.length);
// var START_END_COLOR = COLOR_OPTIONS[(NEW_IDX + (NEW_IDX == INDEX ? 1 : 0)) % COLOR_OPTIONS.length];
var START_END_COLOR = 'rgba(0, 255, 128, 0.5)';
var START_END_COLOR_HIGHLIGHT = START_END_COLOR.slice(0, -4) + '1)';
var RADIUS = 20;

// Node class
function Node(value, x, y, color = DEFAULT_NODE_COLOR, radius = RADIUS){
    this.value = value;
    this.color = color;
    this.visited = false;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.connected_nodes = [];
}

Node.prototype.deepCopy = function(copyConnections=true){
    var t = new Node(this.value, this.x, this.y, this.color, this.radius);
    if(copyConnections){
        for(var i = 0; i < this.connected_nodes.length; i++){
            t.addConnection(this.connected_nodes[i]);
        }
    }
    return t;
};

Node.prototype.setValue = function(value){
    this.value = value;
};

Node.prototype.setColor = function(color){
    this.color = color;
};

Node.prototype.setVisited = function(visited){
    this.visited = visited;
    if(this.visted == false)
        this.setColor(DEFAULT_NODE_COLOR);
};

Node.prototype.setX = function(x){
    this.x = x;
};

Node.prototype.setX = function(x){
    this.x = x;
};

Node.prototype.setY = function(y){
    this.y = y;
};

Node.prototype.setRadius = function(radius){
    this.radius = radius;
};

Node.prototype.getValue = function(){
    return this.value;
};

Node.prototype.getColor = function(){
    return this.color;
};

Node.prototype.getVisited = function(){
    return this.visited;
};

Node.prototype.getX = function(){
    return this.x;
};

Node.prototype.getY = function(){
    return this.y;
};

Node.prototype.getRadius = function(){
    return this.radius;
};

Node.prototype.getConnections = function (n) {
    return this.connected_nodes;
};

Node.prototype.addConnection = function(n) {
    this.connected_nodes.push(n);
};

Node.prototype.removeConnection = function(n){

    //find connected node index
    var idx = this.connected_nodes.indexOf(n);

    //An array is [0: idx] + idx + [idx + 1, array.length]
    //Remove element at idx by concatnating [0: idx] and [idx + 1, array.length]
    if(idx != -1){
        this.connected_nodes = this.connected_nodes.slice(0, idx).concat(this.connected_nodes.slice(idx + 1, this.connected_nodes.length));
    }
};

Node.prototype.highlight = function(switch_ = true) {
    this.color = switch_ ? HIGHLIGHT_NODE_COLOR : DEFAULT_NODE_COLOR;
};

Node.prototype.moveNode = function(x, y) {
    this.x = x;
    this.y = y;
};

Node.prototype.getUnvisitedNeighbor = function(){
    for(var i = 0; i < this.connected_nodes.length; i++){
        if(!this.connected_nodes[i].getVisited())
            return this.connected_nodes[i];
    }
}
// end of Node class

// Edge class
function Edge(n1, n2, color = DEFAULT_EDGE_COLOR, radius = RADIUS){
    this.n1 = n1;
    this.n2 = n2;
    this.radius = radius;
    this.connectNodes();
    this.color = color;
    this.width = 1;
}

Edge.prototype.connectNodes = function(){
    this.n1.addConnection(this.n2);
    this.n2.addConnection(this.n1);
};

Edge.prototype.disconnectNodes = function(){
    this.n1.removeConnection(this.n2);
    this.n2.removeConnection(this.n1);
};

Edge.prototype.setN1 = function(n1){
    this.disconnectNodes();
    this.n1 = n1;
    this.connectNodes();
};

Edge.prototype.setN2 = function(n2){
    this.disconnectNodes();
    this.n2 = n2;
    this.connectNodes();
};

Edge.prototype.setRadius = function(radius){
    this.radius = radius;
};

Edge.prototype.setColor = function(color){
    this.color = color;
};

Edge.prototype.setWidth = function(width){
    this.width = width;
};

Edge.prototype.getN1 = function(){
    return this.n1;
};

Edge.prototype.getN2 = function(){
    return this.n2;
};

Edge.prototype.getRadius = function(r){
    return this.radius;
};

Edge.prototype.getColor = function(){
    return this.color;
};

Edge.prototype.getWidth = function(){
    return this.width;
};

//Get edge coordinate
Edge.prototype.getCoord = function(c) {
    if(c == 'x1')
        return this.n1.getX();
    if(c == 'y1')
        return this.n1.getY();
    if(c == 'x2')
        return this.n2.getX();
    if(c == 'y2')
        return this.n2.getY();
};

//Adjust line coordinates to be from edge of cirlce
// to edge of the other circle instead of centers
Edge.prototype.adjustedCoord = function() {
    var delX = this.getCoord('x2') - this.getCoord('x1');
    var delY = this.getCoord('y2') - this.getCoord('y1');
    var len = Math.sqrt(delX ** 2 + delY ** 2);
    delX /= len;
    delY /= len;
    var coords = {x1: this.getCoord('x1') + this.n1.getRadius() * delX,
        y1: this.getCoord('y1') + this.n1.getRadius() *delY,
        x2: this.getCoord('x2') - this.n2.getRadius() * delX,
        y2: this.getCoord('y2') - this.n2.getRadius() *delY
    };
    return coords;
};

Edge.prototype.highlight = function(switch_ = true) {
    this.color = switch_ ? HIGHLIGHT_EDGE_COLOR : DEFAULT_EDGE_COLOR;
};

Edge.prototype.hasNode = function(n){
    if(this.n1 == n || this.n2 == n)
        return true;
    return false;
};
// end of Edge class

// Class Graph
function Graph(canvasId = 'graph', radius = RADIUS, showNames=true, autoupdate = true, speed = 1){
    this.nodes = [];
    this.edges = [];
    this.radius = radius;
    this.speed = 1000 - 50 * (speed - 1);
    this.showNames = showNames;
    this.startNode = null;
    this.endNode = null;
    this.separator = '->';
    this.autoupdate = autoupdate;
    this.canvasId = canvasId;
    this.draw = new Draw(this.canvasId);
}

Graph.prototype.deepCopy = function(){
    var t = new Graph(this.canvasId, this.radius, this.showNames, false, this.getAdjustedSpeed());
    for(var i = 0; i < this.nodes.length; i++){
        t.addNode(this.nodes[i].deepCopy(false));
    }
    for(var i = 0; i < this.edges.length; i++){
        var idx_1 = this.nodes.indexOf(this.edges[i].getN1());
        var idx_2 = this.nodes.indexOf(this.edges[i].getN2());
        t.addEdge(t.nodes[idx_1], t.nodes[idx_2], this.edges[i].getColor());
    }
    var start_idx = this.nodes.indexOf(this.startNode);
    t.startNode = t.nodes[start_idx];
    var end_idx = this.nodes.indexOf(this.endNode);
    t.endNode = t.nodes[end_idx];
    return t;
};

Graph.prototype.setSpeed = function(speed){
    this.speed = 1000 - 50 * (speed - 1);
};

Graph.prototype.getSpeed = function(){
    return this.speed;
};

Graph.prototype.getAdjustedSpeed = function(){
    return (1000 - this.speed) / 50 + 1;
};

Graph.prototype.setRadius = function(radius){
    this.radius = radius;
    for(var i = 0; i < this.nodes.length; i++){
        this.nodes[i].setRadius(this.radius);
    }
    if(this.autoupdate)
        this.drawGraph();
};

Graph.prototype.getRadius = function(){
    return this.radius;
};

Graph.prototype.setShowNames = function(showNames){
    this.showNames = showNames;
    if(this.autoupdate)
        this.drawGraph();
};

Graph.prototype.getShowNames = function(showNames){
    return this.showNames;
};

Graph.prototype.clearStartEnd = function(){
    this.startNode = null;
    this.endNode = null;
};

Graph.prototype.setStartEnd = function(n, start=true){
    if(start){
        if(this.startNode)
            this.startNode.setColor(DEFAULT_NODE_COLOR);
        this.startNode = (this.nodes.indexOf(n) != -1) ? n : null;
        if(this.startNode)
            this.startNode.setColor(START_END_COLOR);
    }
    else{
        if(this.endNode)
            this.endNode.setColor(DEFAULT_NODE_COLOR);
        this.endNode = (this.nodes.indexOf(n) != -1) ? n : null;
        if(this.endNode)
            this.endNode.setColor(START_END_COLOR);
    }
    if(this.autoupdate){
        this.drawGraph();
    }
};

Graph.prototype.addNode = function(n) {
    if(n instanceof Node){
        n.setRadius(this.radius);
        this.nodes.push(n);
    }
    if(this.autoupdate){
        this.drawGraph();
    }
};

Graph.prototype.removeNode = function(n) {

    var idx = this.nodes.indexOf(n);

    // An array is [0: idx] + idx + [idx + 1, array.length]
    // Remove element at idx by concatnating [0: idx] and [idx + 1, array.length]
    if(idx != -1){
        // Reomve all edges entering and leaving the node
        this.removeAllEdges(this.nodes[idx]);
        this.nodes = this.nodes.slice(0, idx).concat(this.nodes.slice(idx + 1, this.nodes.length));
    }
    if(this.autoupdate){
        this.drawGraph();
    }
};

Graph.prototype.getNode = function(node_name){
    for(var i = 0; i < this.nodes.length; i++){
        if(this.nodes[i].getValue() == node_name){
            return this.nodes[i];
        }
    }
};

Graph.prototype.removeAllEdges = function(n) {
    for(var i = 0; i < this.edges.length; i++){
        if(this.edges[i].hasNode(n)){
            // Removing one edge from edge list
            // decrement our array index
            this.removeEdge(this.edges[i]);
            i--;
        }
    }
};

Graph.prototype.addEdge = function(n1, n2, color = DEFAULT_EDGE_COLOR) {
    if(this.nodes.indexOf(n1) != -1 && this.nodes.indexOf(n2) != -1 && n1 != n2){
        var e = new Edge(n1, n2, color, this.radius);
        this.edges.push(e);
        if(this.autoupdate){
            this.drawGraph();
        }
        return e;
    }
};

Graph.prototype.removeEdge = function(n) {
    var idx = this.edges.indexOf(n);

    //An array is [0: idx] + idx + [idx + 1, array.length]
    //Remove element at idx by concatnating [0: idx] and [idx + 1, array.length]
    if(idx != -1){
        this.edges[idx].disconnectNodes();
       this.edges = this.edges.slice(0, idx).concat(this.edges.slice(idx + 1, this.edges.length));
    }
    if(this.autoupdate){
        this.drawGraph();
    }
};

Graph.prototype.drawGraph = function() {
    this.draw.clear();
    for(var i = 0; i < this.edges.length; i++) {
        (function(draw, edge, radius) {
            var adjustedCoord = edge.adjustedCoord();
            draw.drawLine(adjustedCoord.x1, adjustedCoord.y1, adjustedCoord.x2, adjustedCoord.y2, edge.width, edge.color);
        })(this.draw, this.edges[i], this.radius);
    }
    for(var i = 0; i < this.nodes.length; i++) {
        (function(draw, node, radius, showNames, start, end) {
            var color = /*(node == start || node == end) ? START_END_COLOR :*/ node.color;
            draw.drawNode(node.value, color, node.x, node.y, radius, showNames);
        })(this.draw, this.nodes[i], this.radius, this.showNames, this.startNode, this.endNode);
    }
};

Graph.prototype.clear = function() {
    this.draw.clear();
};

Graph.prototype.unvisit = function() {
    for(var i = 0; i < this.nodes.length; i++){
        this.nodes[i].setVisited(false);
        if(this.nodes[i] != this.startNode && this.nodes[i] != this.endNode)
            this.nodes[i].setColor(DEFAULT_NODE_COLOR);
    }
};

Graph.prototype.getNeighbors = function(n, path){
    var t, arr = [];
    do{
        t = n.getUnvisitedNeighbor();
        if(t){
            t.setVisited(true);
            arr.push(t);
        }
    }while(t);
    return arr;
};

Graph.prototype.removeEdgeByNodeNames = function(n1_name, n2_name){
    var e = this.getEdgeFromPath(n1_name + this.separator + n2_name);
    if(e)
        this.removeEdge(e);
};

Graph.prototype.getEdge = function(n1, n2){
    if((n1 instanceof Node) || (n2 instanceof Node)){
        for(var i = 0; i < this.edges.length; i++){
            if(this.edges[i].hasNode(n1) && this.edges[i].hasNode(n2))
                return this.edges[i];
        }
    }
};

Graph.prototype.getEdgeFromPath = function(path){
    var n1_name = path.split(this.separator).slice(-2, -1);
    var n2_name = path.split(this.separator).slice(-1);
    var n1 = this.getNode(n1_name);
    var n2 = this.getNode(n2_name);
    return this.getEdge(n1, n2);
};

Graph.prototype.highlighPath = function(path){
    var path_array = path.split(this.separator);
    for(var i = 0; i < path_array.length - 1; i++){
        var e = this.getEdge(this.getNode(path_array[i]), this.getNode(path_array[i + 1]));
        e.setColor(HIGHLIGHT_NODE_COLOR);
        e.setWidth(2);
    }
};

Graph.prototype.delayDraw = function(gr, delay){
    (function(f,j){
        setTimeout(function t(){
            f.drawGraph();
        }, j);
    })(gr, delay * gr.getSpeed());
};

Graph.prototype.highlighAndVisit = function(n, path, counter){
    if(n != this.endNode)
        n.setColor(HIGHLIGHT_NODE_COLOR);
    gr_temp = this.deepCopy();
    gr_temp.highlighPath(path);
    this.delayDraw(gr_temp, counter);
    counter += 1;

    //Set node visited
    if(n != this.endNode)
        n.setColor(VISITED_NODE_COLOR);
    gr_temp = this.deepCopy();
    gr_temp.highlighPath(path);
    this.delayDraw(gr_temp, counter);
    counter += 2;
    return counter;
};

Graph.prototype.search = function(method){
    if(this.startNode == null){
        toastr.clear();
        toastr.warning('Start node not selected');
    }
    else if(this.endNode == null){
        toastr.clear();
        toastr.warning('End node not selected');
    }
    else{
        this.unvisit();
        this.drawGraph();
        (function(g){
            setTimeout(function t(){
                g[method]();
            }, 2000);
        })(this);
    }
};

Graph.prototype.DFS = function() {
    var counter = 0;
    stack = [];
    this.startNode.setVisited(true);
    this.startNode.setColor(START_END_COLOR_HIGHLIGHT);
    stack.push([this.startNode, this.startNode.getValue()]);
    // this.pushNeighbors(this.startNode,this.startNode.getValue());
    

    var temp;
    var pathFound = false;
    var gr_temp;
    var newPath;
    var v;
    while(stack.length){
        temp  = stack.slice(-1)[0];
        v = temp[0].getUnvisitedNeighbor();
        if(!v){
            stack.pop();
        }
        else{
            v.setVisited(true);
            newPath = temp[1] + this.separator + v.getValue();
            stack.push([v, newPath]);

            counter = this.highlighAndVisit(v, newPath, counter);

            if(v == this.endNode){
                (function(p,j){
                    setTimeout(function t(){
                        toastr.clear();
                        toastr.success('Path found: ' + p);
                    }, j);
                })(newPath,(counter-2) * this.getSpeed());
                v.setColor(START_END_COLOR_HIGHLIGHT);
                gr_temp = this.deepCopy();
                gr_temp.highlighPath(newPath);
                this.delayDraw(gr_temp, counter-2);
                pathFound = true;
                break;
            }
        }
    }
    if(!pathFound)
        (function(s, e, j){
            setTimeout(function t(){
                toastr.clear();
                toastr.error('There is no path from ' + s + ' to ' + e);
            }, j);
        })(this.startNode.getValue(), this.endNode.getValue(), (counter - 2) * this.getSpeed());
};

Graph.prototype.BFS = function() {
    var counter = 0;
    queue = new Queue();
    this.startNode.setVisited(true);
    this.startNode.setColor(START_END_COLOR_HIGHLIGHT);
    queue.enqueue([this.startNode, this.startNode.getValue()]);
    // this.pushNeighbors(this.startNode,this.startNode.getValue());
    

    var temp;
    var pathFound = false;
    var gr_temp;
    var newPath;
    var v;
    while(queue.length() && !pathFound){
        temp  = queue.dequeue();
        var neighbors = this.getNeighbors(temp[0]);
        if(temp[0] != this.startNode)
            temp[0].setColor(HIGHLIGHT_NODE_COLOR);
        for(var i = 0; i < neighbors.length; i++){
            newPath = temp[1] + this.separator + neighbors[i].getValue();
            queue.enqueue([neighbors[i], newPath]);
            
            counter = this.highlighAndVisit(neighbors[i], newPath, counter);

            if(neighbors[i] == this.endNode){
                (function(p,j){
                    setTimeout(function t(){
                        toastr.clear();
                        toastr.success('Path found: ' + p);
                    }, j);
                })(newPath,(counter-2) * this.getSpeed());
                neighbors[i].setColor(START_END_COLOR_HIGHLIGHT);
                gr_temp = this.deepCopy();
                gr_temp.highlighPath(newPath);
                this.delayDraw(gr_temp, counter-2);
                pathFound = true;
                break;
            }

        }
        if(temp[0] != this.startNode)
            temp[0].setColor(VISITED_NODE_COLOR);
    }
    if(!pathFound)
        (function(s, e, j){
            setTimeout(function t(){
                toastr.clear();
                toastr.error('There is no path from ' + s + ' to ' + e);
            }, j);
        })(this.startNode.getValue(), this.endNode.getValue(), (counter - 2) * this.getSpeed());
};

function Queue(){
    this.arr = [];
}

Queue.prototype.enqueue = function(value){
    this.arr.push(value);
};

Queue.prototype.dequeue = function(){
    var val = this.arr[0];
    this.arr  = this.arr.slice(1);
    return val;
};

Queue.prototype.length = function(){
    return this.arr.length;
};