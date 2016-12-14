var Queue = function() {
  var someInstance = {};

  // first in first out
  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage['"' + size + '"'] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var result = 0;
    if (size > 0) {
      result = storage['"' + 0 + '"']; // 'a'
      //do things
      for (let key in storage) {
        var index = parseInt(JSON.parse(key)) + 1;
        if (index < size) {
          index = index.toString();
          storage[key] = storage['"' + index + '"'];          
        }
      }
      size--;
      delete storage['"' + size + '"'];
    }
    return result;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

// Benson's Implementation
// var Queue = function() {
//   var someInstance = {};

//   // first in first out
//   // Use an object with numeric keys to store values
//   var storage = {};
//   var size = 0;
//   var tempSize = 0;
//   var result = 0;
//   // Implement the methods below

//   someInstance.enqueue = function(value) {
//     storage['"' + size + '"'] = value;
//     size++;
//   };

//   someInstance.dequeue = function() {
//     if (size - tempSize > 0) {
//       result = storage['"' + tempSize + '"'];
//       delete storage['"' + tempSize + '"'];
//       tempSize++;
//     }
//     return result;
//   };

//   someInstance.size = function() {
//     return size - tempSize;
//   };

//   return someInstance;
// };
