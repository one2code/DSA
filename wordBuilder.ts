// An Example of an 0(n^3) algorithm from the book, "A Common Sense Guide to Data Structures and Algorithms" translated into Typescript

let array: string[] = ["a", "b", "c", "d"];

const wordBuilder = (array: string[]): string[] => {
	let collection: string[] = [];
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			for (let k = 0; k < array.length; k++) {
				if (i !== j && j !== k && i !== k) {
					collection.push(array[i] + array[j] + array[k]);
				}
			}
		}
	}
	return collection;
};

let finalResult = wordBuilder(array);
console.log(finalResult);
