/**
* zip_.zip(*arrays) 
* Merges together the values of each of the arrays with the values at the corresponding position. Useful when you have separate data      
* sources that are coordinated through matching array indexes. If you're working with a matrix of nested arrays, _.zip.apply can         
* transpose the matrix in a similar fashion.
*
* _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
* => [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]
*/

function zip(arrays) {
    var arr = [];
    var m = m || 0;
    var j = j || 0;

    while (arr.length !== arguments.length) {
        arr.push([]);
        for (var i = 0; i < arguments.length; i += 1) {
            arr[j].push(arguments[i][m]);
        }
        m += 1;
        j += 1;
    };
    
    return arr;
}

zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);

//FIXME -- earlier attempt
/** IGNORE ---------------------------------
function zip(arrays) {
  var wrapper = wrapper || [];
  var collection = collection || [[],[],[]];
  var m = m || 0;
  var j = j || 0;

  if (wrapper[0] === undefined) {
    wrapper.push(arguments);
  };

  for (var i = 0, len = wrapper.length; i < len; i += 1) {
    console.log("arr i : ", wrapper[i]);
    console.log("arr i j: ", wrapper[i][j]);
    collection[m].push(wrapper[i][j]);
    console.log("collect : ", collection[m]);
  };

  if (collection[m].length !== wrapper[m].length) {
    m += 1, 
    j += 1;
    zip(wrapper); 
  };

  return collection;
}

zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
*/
