# Selection sort algorithm that I translated from Javascript into Python while reading the book Common Sense Guide to Data Structures and Algorithms by Jay Wengrow, as a means to cross-train my brain to think in both languages.


def selection_sort(array):
    for i in range(len(array)):
        lowestNumberIndex = i
        for j in range(i + 1, len(array)):
            if array[j] < array[lowestNumberIndex]:
                lowestNumberIndex = j
        array[i], array[lowestNumberIndex] = array[lowestNumberIndex], array[i]
    return array


sorted_array = selection_sort([5, 3, 6, 2, 10])
print(sorted_array)

# Output: [2, 3, 5, 6, 10]
# Time complexity: O(n^2)

#The original source code for this algorithm in Javascript 

# function selectionSort(array) {
# 	for (let i = 0; i < array.length - 1; i++) {
# 		let lowestNumberIndex = i;
# 		for (let j = i + 1; j < array.length; j++) {
# 			if (array[j] < array[lowestNumberIndex]) {
# 				lowestNumberIndex = j;
# 			}
# 		}
# 		if (lowestNumberIndex != i) {
# 			let temp = array[i];
# 			array[i] = array[lowestNumberIndex];
# 			array[lowestNumberIndex] = temp;
# 		}
# 	}
# 	return array;
# }
