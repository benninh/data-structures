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

};

queueMethods.dequeue = function() {

};

queueMethods.size = function() {
  return this.sizeOfStorage;
};
