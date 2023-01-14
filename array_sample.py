
def sample(array):
    if len(array) % 2 == 0:
        middle = array[len(array) // 2]
    else:
        middle = array[int(len(array) / 2)]
    return [array[0], middle, array[-1]]

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(sample(array))

