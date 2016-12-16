var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create a new node to add to linked list
    var nodeToAdd = Node(value);

    // check if head exists
    if (list.head) {
      // set tail node.next to point to new node
      list.tail.next = nodeToAdd;
      // set tail to new node
      list.tail = nodeToAdd;
    } else { // head does not exist
      list.head = nodeToAdd;
      list.tail = nodeToAdd;
    }
  };

  list.removeHead = function() {
    // store the head value to return
    var result = list.head.value;
    // set head node to next node
    list.head = list.head.next;
    // return removed head value
    return result;
  };

  list.contains = function(target) {
    // returns boolean;

    // declare and define subroutine
    var recurseContains = function(tracker, target) {
      // check if tracker exists
      if (tracker !== undefined) {
        // if yes, check if tracker.value is equal to target
        if (tracker.value === target) {
          // if yes, return true
          return true;
        } else {
          // else
            // set tracker = tracker.next
          if (tracker.next !== null) {
            // check if tracker.next is defined
              // if yes, recurse through list using tracker
            return recurseContains(tracker.next, target);
              // else return false
          } else {
            return false;
          }
        }
        // else, return false
      } else {
        return false;
      }

    };
      

    return recurseContains(list.head, target);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addTail, removeHead both O(1)
 * contains is O(n)
 */
