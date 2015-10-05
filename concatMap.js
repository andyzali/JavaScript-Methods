Array.prototype.concatMap = function(projectionFunction) {
	return this.map(function(item) {
		return projectionFunction(item);
	}).
	concatAll();
};

Array.prototype.map = function(callback) {
	var result = [];
	this.forEach(function(item) {
		result.push(callback(item));
	});

	return result;
};

//concatAll() only works on singly nested arrays
//for example: [["a", ["test"]]] returns ["a", >Array[1]]
Array.prototype.concatAll = function(array) {
	var results = [];
	this.forEach(function(subArray) {
    if (Array.isArray(subArray)) {
      subArray.forEach(function(item) {
      	results.push(item);
      });
    } else {
    	results.push(item);
    }
	});

	return results;
};

var test = [["Build"], ["a"], ["bird's"], ["nest"], ["to"], ["make", "a"], ["test"]];
test.concatMap(function(item) {
	return item;
});
