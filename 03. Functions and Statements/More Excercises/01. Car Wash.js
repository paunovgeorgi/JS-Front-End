// function solve(arr) {
//     let cleanPercentage = 0;
//     for (const command of arr) {
//         switch (command) {
//             case 'soap': cleanPercentage += 10; break;
//             case 'water': cleanPercentage *= 1.2; break;
//             case 'vacuum cleaner': cleanPercentage *= 1.25; break;
//             case 'mud': cleanPercentage *= 0.9; break;
//         }
//     }
//     console.log(`The car is ${cleanPercentage.toFixed(2)}% clean.`);
// }


function solve(arr) {
    const carWash = {
        soap: (cleanPercentage) => cleanPercentage + 10,
        water: (cleanPercentage) => cleanPercentage *= 1.2,
        "vacuum cleaner": (cleanPercentage) => cleanPercentage *1.25,
        mud: (cleanPercentage) => cleanPercentage * 0.9
    }
    let cleanPercentage = arr.reduce((acc, current) => carWash[current](acc), 0)
    console.log(`The car is ${cleanPercentage.toFixed(2)}% clean.`);
}




