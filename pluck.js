//pluck_.pluck(list, propertyName) 
//A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
//_.pluck(stooges, 'name');
//=> ["moe", "larry", "curly"]

//Extract a property within an object from an array
function pluck(list, prop) {
    var coop = [];
        for (var i = 0; i < list.length; i += 1) {
            //access value with [] to avoid stringifying key property
            coop.push(list[i][prop])
        };
        
    return coop;
}

pluck(stooges, 'name');
//["moe", "larry", "curly"]
