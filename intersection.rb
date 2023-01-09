firstArray = [1, 2, 3, 4, 5]
secondArray = [1, 4, 8, 3, 6]

def intersection(firstArray, secondArray)
    result = []

    firstArray.each do |element|
        if secondArray.include?(element)
            result << element
        end
    end
