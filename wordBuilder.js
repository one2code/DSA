var array = ["a", "b", "c", "d"];
var wordBuilder = function (array) {
    var collection = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            for (var k = 0; k < array.length; k++) {
                if (i !== j && j !== k && i !== k) {
                    collection.push(array[i] + array[j] + array[k]);
                }
            }
        }
    }
    return collection;
};
var finalResult = wordBuilder(array);
console.log(finalResult);
