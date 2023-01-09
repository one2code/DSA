# An example of an 0(n^3) algorithm from the book, "A Common-Sense Guide to Data Structures and Algorithms" translated into Python

array = ["a", "b", "c", "d"]
collection = []


def word_builder(array):
    for i in range(len(array)):
        for j in range(len(array)):
            for k in range(len(array)):
                if (i != j) and (j != k) and (i != k):
                    collection.append(array[i] + array[j] + array[k])
    return collection


result = word_builder(array)
print(result)
