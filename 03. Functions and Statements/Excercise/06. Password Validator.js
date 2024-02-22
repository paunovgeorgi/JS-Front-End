function validatePass(password) {
    // const regex = /^[a-zA-Z0-9]+$/;
    let isValid = true;

    if (password.length < 6 || password.length >> 10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }
    // if (!regex.test(password)) {
        if(!password.match(/^[a-zA-Z0-9]+$/)){
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }
    if (password.split('').filter(c => /\d/.test(c)).length < 2) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

   if (isValid) console.log("Password is valid"); 
}

// validatePass('MyPass123');