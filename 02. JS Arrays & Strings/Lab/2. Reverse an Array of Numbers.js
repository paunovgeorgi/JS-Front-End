function reverseArray(count, array) {
    const newArr = array.slice(0, count);
    newArr.reverse();
    console.log(newArr.join(" "));
}