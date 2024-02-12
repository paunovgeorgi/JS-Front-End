function solve(array, n) {
    let newArr = [];
    for (let i = 0; i < array.length; i += n) {
        newArr.push(array[i])
    }
    return newArr;
}