var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  someInstance = {};
  
  this.storage = {};
  this.sizeOfStorage = 0;
  this.result = 0;

  return this.someInstance;
};

Stack.prototype.push = function(value) {
  this.storage[this.sizeOfStorage] = value;
  this.sizeOfStorage++;
};

Stack.prototype.pop = function() {
  if (this.sizeOfStorage > 0) {
    this.sizeOfStorage--;
    this.result = this.storage[this.sizeOfStorage];
    delete this.storage[this.sizeOfStorage];
  }
  return this.result;
};

Stack.prototype.size = function() {
  return this.sizeOfStorage;
};

/*
var thing = new Stack();

thing.storage[];

thing.size
*/