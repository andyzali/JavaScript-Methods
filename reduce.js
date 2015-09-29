// This implementation of the reduce function is copied from ReactiveX.io
// for self-learning and practicing application. 

Array.prototype.reduce = function(combiner, initialValue) {
  var counter,
    accumulatedValue;

  if (this.length === 1) {
    return this;
  } else {
      if (arguments.length === 1) {
        counter = 1;
        accumulatedValue = this[0];
      } else if (arguments >= 2) {
        counter = 0;
        accumulatedValue = initialValue;
      } else {
      throw "Invalid arguments.";
      }

      while (counter < this.length) {
        accumulatedValue = combiner(accumulatedValue, this[counter]);
        counter++;
      }

    return [accumulatedValue];
  }
}

var ratings = [2,1,5,3,4];

ratings.reduce(function(prev, curr) {
  if (curr > prev) {
    return prev = curr;
  } else {
    return prev;
  }
});

// My original written version adapted from Eloquent JavaScript:

function reduce(array, combine, start) {
  array.each(function(item) {
    start = combine(start, item);
  });
  return start;
}

Array.prototype.each = function(collection, callback) {
  var i, len, key;
  if (Array.isArray(collection)) {
    for (i = 0, len = collection.length; i < len; i += 1) {
      callback(collection[i]);
    } 
  } else {
    for (key in collection) {
      callback(collection[key]);
    }
  }
};
