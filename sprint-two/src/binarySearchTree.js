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

BinarySearchTreeMethods.contains = function(value) {
  // compare current node value to value
  if (this.value === value) {
    // if current value = value
      // return true
    return true;
  } else {
    // else
      // if current value < value
    if (this.value < value) {
        // go right
          // check if right node is null
      if (this.right === null) {
        // if yes, return false
        return false;
      } else {
        // else 
        // recurse through right node of this
        //_.extend(this.right, BinarySearchTreeMethods);

        return this.contains.call(this.right, value);
      }
      
    } else {
      // else
        // go left
      if (this.value > value) {
        // check if leftnode is null
        if (this.left === null) {
          // if yes, return false
          return false;
        } else {
          // else 
          // recurse through left node of this
          //_.extend(this.left, BinarySearchTreeMethods);

          return this.contains.call(this.left, value);
        }
      }
    }
  }
};

BinarySearchTreeMethods.depthFirstLog = function(callback) {
  // start at first node this
  callback(this.value);
    // callback on value of node
    // check if node has left property
  if (this.left) {
    // if yes, recurse left
    this.depthFirstLog.call(this.left, callback);
  }
  // check if node has right property
  if (this.right) {
    // if yes, recurse right
    this.depthFirstLog.call(this.right, callback);
  }
};

var newNode = function(value) {
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;

  _.extend(node, BinarySearchTreeMethods);

  return node;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
