# The first example of a Bubble sort algorithm is from the book Common Sense Guide to Data Structures and Algorithms by Jay Wengrow. The second example is my refactored version of a bubble sort algorithm.  Both share the same time complexity of O(n^2), but the second example is more concise and more readable.

#Example 1

def bubble_sort(list):
    unsorted_until_index = len(list) - 1
    sorted = False
    while not sorted:
        sorted = True
        for i in range(unsorted_until_index):
            if list[i] > list[i+1]:
                list[i], list[i+1] = list[i+1], list[i]
                sorted = False
        unsorted_until_index -= 1
    return list

#Example 2
def bubble_sort(list):
    for i in range(len(list)):
        for j in range(len(list)-1):
            if list[j] > list[j+1]:
                list[j], list[j+1] = list[j+1], list[j]
    return list

print(bubble_sort([65, 55, 45, 35, 25, 15, 10]))