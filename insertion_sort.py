
def insertion_sort(array):
    for index in range(1, len(array)):
        temp_value = array[index]
        position = index - 1

        while position >= 0:
            if array[position] > temp_value:
                array[position + 1] = array[position]
                position = position - 1
            else:
                break
        array[position + 1] = temp_value
    return array



#The second example is my version of the insertion sort algorithm

def insertion_sort(array):
    for index in range(1, len(array)):
        temp_value = array[index]
        position = index - 1

        while position >= 0 and array[position] > temp_value:
            array[position + 1] = array[position]
            position = position - 1
        array[position + 1] = temp_value
    return array

result = insertion_sort([12,11,85,102,1,7])
print(result)
