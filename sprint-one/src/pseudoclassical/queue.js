var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.sizeOfStorage = 0;
  this.tempIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.sizeOfStorage] = value;
  this.sizeOfStorage++;
};

Queue.prototype.dequeue = function() {
  if (this.sizeOfStorage - this.tempIndex > 0) {
    var result = this.storage[this.tempIndex];
    delete this.storage[this.tempIndex]; 
    this.tempIndex++;
  }
  return result;
};

Queue.prototype.size = function() {
  return this.sizeOfStorage - this.tempIndex;
};  