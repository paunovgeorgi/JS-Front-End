function solve(...nums) {
    const result = nums.filter(num => num < 0).length;
    result % 2 == 0 ? console.log('Positive') : console.log('Negative');
}

// solve( 5,12,-15)