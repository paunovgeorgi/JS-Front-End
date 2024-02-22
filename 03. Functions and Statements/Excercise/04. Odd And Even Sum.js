function returnSum(input) {
    const arr = Array.from(String(input), Number);
    const odd = arr.filter(n => n % 2 !== 0).reduce((result, number) => {return result + number;}, 0);
    const even = arr.filter(n => n % 2 === 0).reduce((result, number) => {return result + number;}, 0);
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}