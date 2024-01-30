function sameNums(number) {
    // const digitsStr = number.toString();
    // const reference = Number(digitsStr[0]);
    // let areSame = true;
    // let sum = 0; 
    // for (const num of digitsStr) {
    //     if (Number(num) !== reference) {
    //         areSame = false;
    //     }
    //     sum += Number(num);
    // }
    // console.log(areSame);
    // console.log(sum);

    // const digitArr = number.toString().split('').map(Number);
    const digitArr = Array.from(String(number), Number);
    const sum = digitArr.reduce((result, number) => {return result + number;}, 0);  
    const set = new Set(digitArr);
    let areSame = set.size === 1;

    console.log(areSame);
    console.log(sum);
}