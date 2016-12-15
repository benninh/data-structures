var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.sizeOfStorage = 0;

  extend(someInstance, queueMethods);

  return someInstance;
};



var extend = function(to, toAdd) {
  for (let key in toAdd) {
    to[key] = toAdd[key];
  }
};

var queueMethods = {};


queueMethods.enqueue = function() {
  this.sizeOfStorage++;
};

queueMethods.dequeue = function() {
  if (this.sizeOfStorage > 0) {
    this.sizeOfStorage--;
  }
};

queueMethods.size = function() {
  return this.sizeOfStorage;
};
