
let arr: number[] = []
const averageOfEvenNumbers = (arr:number[]):number => {

    let sum: number = 0;
    let countofEvenNumbers: number = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
            countofEvenNumbers++;
        }
    }
    return sum
}


console.log(averageOfEvenNumbers(arr));

function newFunction(): number[] {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
