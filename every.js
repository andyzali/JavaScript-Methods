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
