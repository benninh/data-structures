var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.sizeOfStorage = 0;
  someInstance.result = 0;
  someInstance.tempSize = 0;

  extend(someInstance, queueMethods);

  return someInstance;
};



var extend = function(to, toAdd) {
  for (let key in toAdd) {
    to[key] = toAdd[key];
  }
};

var queueMethods = {};


queueMethods.enqueue = function(value) {
  this.storage[this.sizeOfStorage] = value;
  
  this.sizeOfStorage++;
};

queueMethods.dequeue = function() {
  
  if (this.sizeOfStorage - this.tempSize > 0) {
    // need 1 more line of code to make this work
    this.result = this.storage[this.tempSize];
    delete this.storage[this.tempSize];
    this.tempSize++;
  }

  return this.result;
};

queueMethods.size = function() {
  return this.sizeOfStorage - this.tempSize;
};
