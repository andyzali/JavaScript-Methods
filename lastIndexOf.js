/**
* lastIndexOf_.lastIndexOf(array, value, [fromIndex]) 
* Returns the index of the last occurrence of value in the array, or -1 if value is not present. 
* Pass fromIndex to start your search at a given index.
*
* _.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
* => 4
*/

function lastIndexOf(array, value, fromIndex) {
  for (var i = fromIndex || array.length - 1; i >= 0; i -= 1) {
    if (array[i] === value) {
      return i;
    } else if (i <= 0) {
      return -1;
    };
  };
}

lastIndexOf([1,2,3,1,2,3], 2); // returns 4
lastIndexOf([1,2,3,1,2,3], 2, 2); //returns 1
lastIndexOf([1,2,3,1,2,3], 4); //returns -1
