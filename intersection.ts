interface arr {
	(firstArray: number[], secondArray: number[]): number[];
}

const firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const secondArray = [2, 4, 6, 8, 10];
let result: number[] = [];



const intersection:arr = (firstArray, secondArray) => {
    for (let i = 0; i < firstArray.length; i++) {
        for (let j = 0; j < secondArray.length; j++) {
            if (firstArray[i] === secondArray[j]) {
                result.push(firstArray[i]);
            }
        }
    }
    return result;
};

result = intersection(firstArray, secondArray);
