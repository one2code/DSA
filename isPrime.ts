// Description: Checks if a number is prime or not with an O(n) time complexity

const isPrime = (num: number): boolean => {
	if (num <= 1) {
		return false;
	}
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
};

// Solution in an 0(sqrt (n)) time complexity

const isPrimeNum = (num: number): boolean => {
	if (num <= 1) {
		return false;
	}
	for (let i = 2; i < Math.sqrt(num); i++) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
};
