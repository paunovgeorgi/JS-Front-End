function findPalindrome(array) {
    for (const num of array) {
        console.log(num.toString() === num.toString().split('').reverse().join(''));
    }
}

// findPalindrome([123,323,421,121]);

// --------------------------------------------------------------------

// function findPalindrome(array) {
//     for (const num of array) {
//         let current = num.toString();
//         let reversed = current.split('').reverse().join('');
//         console.log(current === reversed);
//     }
// }