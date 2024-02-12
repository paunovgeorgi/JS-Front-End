function sortList(arr) {
    arr.sort((a,b) => a - b);
const myArray = [];
while(arr.length > 0){
myArray.push(arr.shift());
myArray.push(arr.pop())
}
return myArray;
}

sortList([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);