function solve(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    sum === number ? console.log('We have a perfect number!') : console.log("It's not so perfect.");
}