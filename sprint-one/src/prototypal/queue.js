var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.sizeOfStorage = 0;
  someInstance.tempIndex = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.sizeOfStorage] = value;
  this.sizeOfStorage++;
};

queueMethods.dequeue = function() {
  if (this.sizeOfStorage - this.tempIndex > 0) {
    var result = this.storage[this.tempIndex];
    delete this.storage[this.tempIndex];
    this.tempIndex++;
    return result;
  }
};

queueMethods.size = function() {
  return this.sizeOfStorage - this.tempIndex;
};
