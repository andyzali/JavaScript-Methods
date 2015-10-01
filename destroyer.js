//You will be provided with an initial array (the first argument in the destroyer function), 
//followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  var args = arguments;
  return filter(arr, function(item) {
    for (var j = 1, len = args.length; j < len; j++) {
      if (item === args[j]) {
      return;
      }
    }
    return item;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

function each(collection, callback) {
  for (var i = 0, len = collection.length; i < len; i++) {
    callback(collection[i]);
  }
}

function filter(collection, predicate) {
  var passed = [];
  each(collection, function(item) {
    if (predicate(item)) {
      passed.push(item);
    }
  });
  return passed;
}
