var isSubset = function (array1, array2) {
    var largerArray;
    var smallerArray;
    // Determine which array is smaller
    if (array1.length > array2.length) {
        largerArray = array1;
        smallerArray = array2;
    }
    else {
        largerArray = array2;
        smallerArray = array1;
    }
    // Iterate through the smaller array and
    for (var i = 0; i < smallerArray.length; i++) {
        var foundMatch = false;
        for (var j = 0; j < largerArray.length; j++) {
            if (smallerArray[i] === largerArray[j]) {
                foundMatch = true;
                break;
            }
        }
        if (!foundMatch) {
            return false;
        }
    }
    return true;
};
console.log(isSubset([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
