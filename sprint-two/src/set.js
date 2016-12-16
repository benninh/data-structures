var Set = function() {
  var set = Object.create(setPrototype);
  
  set.storage = {}; // fix me
  //

  _.extend(set, setPrototype);

  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // add item to storage
  this.storage['"' + item + '"'] = item;
};

setPrototype.contains = function(item) {
  return !!this.storage['"' + item + '"'];
};

setPrototype.remove = function(item) {
  delete this.storage['"' + item + '"'];
};

/*
 * Complexity: What is the time complexity of the above functions?
  constant for all 3
 */
