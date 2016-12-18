var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // push new 'branches' of tree to children
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    if (this.children.length > 0) {
      return _.reduce(this.children, function(accum, child) {
        if (accum === true) {
          return accum;
        } else {
          return child.contains(target);
        }
      }, false);
    } else {
      return false;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 add is O(1);
 contains is O(n);
 */



/* subroutine recursion implementation for contains
  // define a subroutine that takes current child and target
  var treeContains = function(currentChild, target) {
    // if currentChild.value is target
    if (currentChild.value === target) {
      // return true
      return true;
    } else {
      // else, check if currentChild.children exists
      if (currentChild.children.length > 0) {
        // if so, for each child
        return _.reduce(currentChild.children, function(accum, child) {
          // return the recursing of the three
          if (accum === true) {
            return accum;
          } else {
            return treeContains(child, target); 
          }
        }, false);
      } else { // else return false
        return false;
      }
    }
      
  };
  return treeContains(this, target);*/
