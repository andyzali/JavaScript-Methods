var each = function (collection, callback) {

	var i, 
  		len, 
  		prop;
  
  if (Array.isArray(collection)) {
  	for (i = 0, len = collection.length; i < len; i += 1) {
    	callback(collection[i]);
    }
  } else {
  	for (prop in collection) {
    	callback(collection[prop]);
    }
  }
};

var reduce = function (collection, accumulator, startValue) {
  each(collection, function (item) {
    startValue = accumulator(item, startValue);
  });
  return startValue;
};

var every = function (collection, predicate) {
	return reduce(collection, function (curr) {
  	if (!predicate(curr)) {
    	return false;
    } else {
    	return true;
    }
  }); 
};

var arr = [8, 8, 9];

var isEight = function (num) {
  return num === 8;
};

every(arr, isEight);

// functionally deficient every() construct --
// true every() takes in a callbackFn and an optional thisArg parameter
// utilizing the callbackFn to check on every element in the array
// and returns true if every element meets the condition, otherwise false

function every(array, type) {
  var bool;
  for (var i = 0; i < array.length; i +=1) {
    // check if element in array matches type condition
    if (typeof array[i] !== type) {
      return false;
    } else {
      bool = true;
    }
  }
  return bool;
}

var types = [1, NaN, "string", false, {type: true}];

every(types, 'number');
