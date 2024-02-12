// function printGrade(grade) {
//     let result = '';
    
//     if (grade < 3) {  result = 'Fail'; }
//     else if (grade < 3.50) { result = 'Poor'; }
//     else if (grade < 4.50) {  result = 'Good'; }
//     else if (grade < 5.50) { result = 'Very good'}
//     else{ result = 'Excellent' }

//     if (result === 'Fail') {
//         console.log(`${result} (2)`);
//     }
//     else{
//     console.log(`${result} (${grade.toFixed(2)})`);
//     }
// }

function calcGrade(grade) {
    const result = () => {
        if (grade < 3) { return `Fail (2)`;}
        else if (grade < 3.50) {return `Poor (${grade.toFixed(2)})`;}
        else if (grade < 4.50) {return `Good (${grade.toFixed(2)})`;}
        else if (grade < 5.50) {return `Very good (${grade.toFixed(2)})`;}
        else {return `Excellent (${grade.toFixed(2)})`;}
    }
    console.log(result());
}

// calcGrade(4.50)