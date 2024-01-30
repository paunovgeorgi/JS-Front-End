function sumDigits(number) {
    const digitString = number.toString();
    let sum = 0;
    for (let i = 0; i < digitString.length; i++) {
        sum += Number(digitString[i]);
    }
    console.log(sum);
}