/**
* contains_.contains(list, value, [fromIndex]) Alias: includes 
* Returns true if the value is present in the list. Uses indexOf internally, if list is an Array. Use fromIndex to start your search at a given index.
*
*_.contains([1, 2, 3], 3);
* => true
*/

function contains(list, value, fromIndex) {
	var i;

	if (Array.isArray(list)) {
		if (list.indexOf(value) > -1) {
			return true;
		} else {
			return false;
		};
	};

	for (i = fromIndex; i < list.length; i += 1) {
		if (list[i] === value) {
			return true;
		} else {
			return false;
		};
	};
}
