const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findMiddle = (nums: number[]) =>{
    let middle: number;
    if(nums.length % 2 === 0){
        middle = (nums[nums.length/2 - 1] + nums[nums.length/2])/2
    }else{
        middle = nums[Math.floor(nums.length/2)];
    }
    return middle;
}
console.log(findMiddle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const sample = (nums: number[]):number[] => {
	const first = nums[0];
	const middle = findMiddle(nums);
	const last = nums[nums.length - 1];

	return [first, middle, last];
};

console.log(sample(nums));
