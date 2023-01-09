var firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var secondArray = [2, 4, 6, 8, 10];
var result = [];
var intersection = function (firstArray, secondArray) {
	for (var i = 0; i < firstArray.length; i++) {
		for (var j = 0; j < secondArray.length; j++) {
			if (firstArray[i] === secondArray[j]) {
				result.push(firstArray[i]);
				break;
			}
		}
	}
	return result;
};
result = intersection(firstArray, secondArray);
console.log(result);
