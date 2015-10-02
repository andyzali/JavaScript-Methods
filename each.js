function each(collection, callback) {
    if (Array.isArray(collection)) {
        for (var i = 0, len = collection.length; i < len; i += 1) {
            callback(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            callback(collection[key], key, collection);
        }
    }
}
