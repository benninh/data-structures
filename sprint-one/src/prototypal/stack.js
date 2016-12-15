var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  someInstace.storage = {};
  someInstace.sizeOfStorage = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.sizeOfStorage] = value;
  this.sizeOfStorage++;
};

stackMethods.pop = function() {
  // if size is larger than 0 
    // store the value of key to be deleted
    // delete key
    // return deleted value
};

stackMethods.size = function() {
  return this.sizeOfStorage;
};


/*
var some = Stack();
some.push(value);
some.pop();
some.size();
*/