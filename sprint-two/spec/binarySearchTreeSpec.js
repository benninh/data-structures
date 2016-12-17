describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.contains(3)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3]);
  });

  it('should execute callback in the correct order', function() {
    var newTest = [];
    var newFunc = function(value) { newTest.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(4);
    binarySearchTree.insert(7);
    binarySearchTree.insert(8);
    binarySearchTree.insert(6);
    binarySearchTree.insert(20);
    binarySearchTree.insert(17);
    binarySearchTree.insert(21);
    binarySearchTree.insert(14);
    binarySearchTree.insert(18);
    binarySearchTree.insert(1);
    binarySearchTree.depthFirstLog(newFunc);
    expect(newTest).to.eql([5, 2, 1, 3, 4, 7, 6, 8, 20, 17, 14, 18, 21]);
  });

  it('should insert correctly given multiple arguments', function() {
    var newTest = [];
    var newFunc = function(value) { newTest.push(value); };
    binarySearchTree.insert(2, 3, 4, 7, 8, 6, 20, 17, 21, 14, 18, 1);
    binarySearchTree.depthFirstLog(newFunc);
    expect(newTest).to.eql([5, 2, 1, 3, 4, 7, 6, 8, 20, 17, 14, 18, 21]);
  });
});
