function calculator(num1, num2, operator) {
     const calc = {
        add: () => num1 + num2,
        subtract: () => num1 - num2,
        multiply: () => num1 * num2,
        divide: () => num1 / num2
    }
    return calc[operator]();
}

// console.log(calculator(5, 5, 'multiply'));



/* function calculator(num1, num2, operator) {
    const add = () => num1 + num2;
    const subtract = () => num1 - num2;
    const multiply = () => num1 * num2;
    const divide = () => num1 / num2;
    const calc = {
        add: add(),
        subtract: subtract(),
        multiply: multiply(),
        divide: divide()
    }
    return calc[operator];
}
*/