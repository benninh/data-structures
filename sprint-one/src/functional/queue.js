var Queue = function() {
  var someInstance = {};

  // first in first out
  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    storage['"' + size + '"'] = value;
  };

  someInstance.dequeue = function() {
    var result;
    if (size > 0) {
      result = storage['0'];
      //do things
      for (let key in storage) {
        var index = parseInt(key) + 1;
        index = index.toString();
        storage[key] = storage[index];
      }
      size--;
    }
    return result;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
