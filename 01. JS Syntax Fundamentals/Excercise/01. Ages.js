function solve(age) {
    
    let outcome = '';
    if (age < 0) {
        outcome = "out of bounds";
    }
    else if (age <= 2) {
        outcome = "baby";
    }
    else if (age <= 13) {
        outcome = "child"
    }
    else if (age <= 19) {
        outcome = "teenager"
    }
    else if (age <= 65) {
        outcome = "adult"
    }
    else  {
        outcome = "elder"
    }

    console.log(outcome);
}
