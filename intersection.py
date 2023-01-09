firstArray = [1, 2, 3, 4, 5]
secondArray = [1, 4, 8, 3, 6]

def intersection(firstArray, secondArray):
    result = []

    for i in range(len(firstArray)):
        for j in range(len(secondArray)):
            if firstArray[i] == secondArray[j]:
                result.append(firstArray[i])
    return result
    

    


result = intersection(firstArray, secondArray)
print(result)

