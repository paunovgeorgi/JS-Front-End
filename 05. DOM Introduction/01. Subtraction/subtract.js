function subtract() {
    const firstNum = Number(document.querySelector('#firstNumber').value); 
    const secondtNum = Number(document.querySelector('#secondNumber').value); 
    document.querySelector('#result').textContent = firstNum - secondtNum;
}