var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.sizeOfStorage = 0;

  extend(someInstance, stackMethods);
  
  return someInstance;
};

var extend = function(to, toAdd) {
  for (let key in toAdd) {
    to[key] = toAdd[key];
  }
};

var stackMethods = {};

// push
stackMethods.push = function() {

};
// pop
stackMethods.pop = function() {

};
// size
stackMethods.size = function() {
  return this.sizeOfStorage;
};

// stackVariable = new Stack();
// stackVariable.method();

/*
var Func = function() {
  var someInstance = {};
  someInstance.a = 0;
  extend(someInstance, funcMethods);
};
var funcMethods = {};
funMethods.logA = function() {
  console.log(this.a);
  return this.a;
};

var myFunc = Func();
myFunc.logA();
*/