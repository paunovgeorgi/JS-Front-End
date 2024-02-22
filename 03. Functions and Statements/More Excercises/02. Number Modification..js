function solve(nums) {
    nums = nums.toString();
    let average = nums.split('').map(Number).reduce((total, current) => total + current, 0) / nums.length;

    while (average < 5) {
        nums += "9";
        average = nums.split('').map(Number).reduce((total, current) => total + current, 0) / nums.length;
    }

    console.log(nums);
}

