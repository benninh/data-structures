

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // cehck if bucket at index contains an array
  if (!Array.isArray(this._storage.get(index))) {
    // if not, create an empty array
    this._storage.set(index, []);
  }
  // push v into bucket array
  this._storage.get(index).push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check if storage[index] is an array
  if (Array.isArray(this._storage.get(index))) {
    // if yes, for each element in storage[index]
    return this._storage.get(index).reduce(function(accumulator, element) {
      // check if first index of element matches k
      if (element[0] === k) {
        // return 2nd index, which holds value
        accumulator = element[1];
      }
      return accumulator;
    }, undefined);
    // if no, return undefined
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check if bucket at index has more than one value
  if (Array.isArray(this._storage.get(index))) {
    // if yes, for each element in storage[index]
    this._storage.get(index).forEach(function(element) {
      // check if first index of element matches k
      if (element[0] === k) {
        // return 2nd index, which holds value
        element[0] = undefined;
        element[1] = undefined;
      }
    });
    // if no, return undefined
  } 

};



/*
 * Complexity: What is the time complexity of the above functions?
 insert - constant
 retrieve - linear
 remove - constant
 */


