function evenOddSubstraction(input) {
    let evenSum = 0;
    let oddSum = 0;
    for (const num of input) {
        if (num % 2 == 0) {
            evenSum += num;
        }
        else{
            oddSum += num;
        }
    }

    console.log(evenSum - oddSum);
}