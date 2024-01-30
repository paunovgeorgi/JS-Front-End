function sortList(arr) {
    arr.sort();
const myArray = [];
while(arr.length > 0){
myArray.push(arr.shift());
myArray.push(arr.pop())
}
console.log(myArray);
}

sortList([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);