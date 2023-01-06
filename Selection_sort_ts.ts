function selectionSort(array:number[], index:number):number[] {
    if (index == array.length) {
        return array;
    }
    let min = index;
    for (let i = index + 1; i < array.length; i++) {
        if (array[i] < array[min]) {
            min = i;
        }
    }
    let temp = array[index];
    array[index] = array[min];
    array[min] = temp;
    return selectionSort(array, index + 1);
}