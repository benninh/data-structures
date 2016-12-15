var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.sizeOfStorage = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.sizeOfStorage] = value;
  this.sizeOfStorage++;
};

Stack.prototype.pop = function() {
  if (this.sizeOfStorage > 0) {
    this.sizeOfStorage--;
    var result = this.storage[this.sizeOfStorage];
    delete this.storage[this.sizeOfStorage];
  }
  return result;
};

Stack.prototype.size = function() {
  return this.sizeOfStorage;
};

/*
var thing = new Stack();

thing.storage[];

thing.size
*/