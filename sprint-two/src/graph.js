

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage['"' + node + '"'] = {
    value: node,
    edges: []
  };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this.storage['"' + node + '"'];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // for each storage[node].edges
  for (let key in this.storage) {
    // if edges contains node
    if (this.storage[key].edges.indexOf(node) !== -1) {
      this.storage[key].edges.splice(this.storage[key].edges.indexOf(node), 1);
    }
      // splice out the node in edges
  }
  delete this.storage['"' + node + '"'];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  return this.storage['"' + fromNode + '"'].edges.indexOf(toNode) !== -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (typeof fromNode === 'object') {
    fromNode = fromNode.value;
  }
  this.storage['"' + fromNode + '"'].edges.push(toNode);
  this.storage['"' + toNode + '"'].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.storage['"' + fromNode + '"'].edges.splice(this.storage['"' + fromNode + '"'].edges.indexOf(toNode), 1);
  this.storage['"' + toNode + '"'].edges.splice(this.storage['"' + toNode + '"'].edges.indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.forEach(this.storage, function(element) {
    cb(element);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


