Array.prototype.concatAll = function() {
	var results = [];
	this.forEach(function(subArray) {

		// Add all the items in each subArray to the results array.
    if (Array.isArray(subArray)) {
      subArray.forEach(function(item) {
      	results.push(item);
      });
    }
	});

	return results;
};
