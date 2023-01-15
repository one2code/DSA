// An O(n^2) algorithm that determines if one array is a subset of another array

const isSubset = (array1: number[], array2: number[]): boolean => {
	let largerArray: number[];
	let smallerArray: number[];

	// Determine which array is smaller

	if (array1.length > array2.length) {
		largerArray = array1;
		smallerArray = array2;
	} else {
		largerArray = array2;
		smallerArray = array1;
	}

	// Iterate through the smaller array and

	for (let i = 0; i < smallerArray.length; i++) {
		let foundMatch: boolean = false;

		for (let j = 0; j < largerArray.length; j++) {
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
