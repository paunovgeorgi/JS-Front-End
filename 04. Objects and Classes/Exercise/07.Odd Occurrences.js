// function solve(input) {
//     const result = input.split(' ').map(w => w.toLowerCase()).reduce((acc, curr) => {
//         if (!acc[curr]) {
//             acc[curr] = 0;
//         }
//         acc[curr]++;
//         return acc;
//     }, {})

//     console.log(Object.keys(result).filter(r => result[r] % 2 !== 0).join(' '));
// }


function solve(input) {
    const result = input.toLowerCase().split(' ').reduce((acc, curr) => {
       acc[curr] ? acc[curr]++ : acc[curr] = 1;
       return acc;
    }, {})
    console.log(Object.keys(result).filter(r => result[r] % 2 !== 0).join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');