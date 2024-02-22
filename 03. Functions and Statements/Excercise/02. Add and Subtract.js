// function addAndSubstract(num1, num2, num3) {
//     const sum = () => {
//         return num1 + num2;
//     }
//     const substract = () => {
//         return sum() - num3;
//     }
//     console.log(substract());
// }

function addAndSubstract(x, y, z) {
    const sum = () => x + y;
    const substract = () => sum() - z;
    console.log(substract());
}

addAndSubstract(8, 12, 4);