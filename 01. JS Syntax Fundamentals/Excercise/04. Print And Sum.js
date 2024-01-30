function printSum(start, end) {
    let arr = [];
    let sum = 0;
    for (let i = start; i <= end; i++) {
        arr.push(i)
        sum += i;
    }

    console.log(arr.join(" "));
    console.log(`Sum: ${sum}`);

}