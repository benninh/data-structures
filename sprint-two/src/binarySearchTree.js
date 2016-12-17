var BinarySearchTree = function(value) {
  var someInstance = newNode(value);

  _.extend(someInstance, BinarySearchTreeMethods);
  return someInstance;
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value) {
  
  var goDownTree = function(currentNode, value) {
    // check if currentNode.value < value
    if (currentNode.value > value) {
      // if yes, handle left
      // check if currentNode.left is null
      if (currentNode.left === null) {
        // if yes, currentNode.left = newNode(value);
        currentNode.left = newNode(value);
      } else {
        // else 
        //recurse
        goDownTree(currentNode.left, value);
      }
    } else if (currentNode.value < value) {
      // else if, handle right
      if (currentNode.right === null) {
        // if yes, currentNode.right = newNode(value);
        currentNode.right = newNode(value);
      } else {
        // else 
        //recurse
        goDownTree(currentNode.right, value);
      }

    }
      // else do nothing
  };

  goDownTree(this, value);
};

BinarySearchTreeMethods.contains = function() {
  
};

BinarySearchTreeMethods.depthFirstLog = function () {

};

var newNode = function(value) {
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;
  return node;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
