import math

# Checks if a number is prime in an 0(n) time complexity


def is_prime(number):
    if number < 2:
        return False
    for i in range(2, number):
        if number % i == 0:
            return False
    return True


result = is_prime(10)
print(result)

# Checks if a number is prime in an 0(sqrt(n)) time complexity

def check_if_prime(num):
    if num < 2:
        return False
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            return False
    return True

finalResult = check_if_prime(13)
print(finalResult)
