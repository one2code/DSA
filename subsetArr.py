# An O(n^2) algorithm that determines if one array is a subset of another array


def isSubset(array1, array2):
    largerArray = None
    smallerArray = None

    if len(array1) > len(array2):
        largerArray = array1
        smallerArray = array2
    else:
        largerArray = array2
        smallerArray = array1
    for i in smallerArray:
        foundMatch = False
        for j in largerArray:
            if i == j:
                foundMatch = True
                break
        if not foundMatch:
            return False
    return True


array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array2 = [1, 2, 4, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

print(isSubset(array1, array2))
