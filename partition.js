//partition_.partition(array, predicate) 
//Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.

_.partition([0, 1, 2, 3, 4, 5], isOdd);
=> [[1, 3, 5], [0, 2, 4]]


function partition(array, predicate) {
    var firstA = [];
    var secondA = [];
    array.forEach(function(elem) {
        if (predicate(elem)) {
            firstA.push(elem);
        } else {
            secondA.push(elem);
        };    
    });
            
   return [firstA, secondA];
}

//A fun little test..
function makeAMillie() {
    //make an array to store a million numbers
    var bank = [];
    //create a condition to store the random numbers
    for (var i = 0; i < 1000000; i += 1) {
        bank.push(Math.floor(Math.random() * 10));
    };

    return bank;
}

var millionInput = makeAMillie();
console.log(partition(millionInput, function(elem){return elem > 5}));
