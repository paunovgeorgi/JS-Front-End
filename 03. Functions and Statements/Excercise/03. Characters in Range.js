function printChars(a, b) {

    let start = String.fromCharCode(Math.min(a.charCodeAt(0), b.charCodeAt(0)));
    let end = String.fromCharCode(Math.max(a.charCodeAt(0), b.charCodeAt(0)));
    let result = [];

    for (let i = start + 1; i < end; i++) {
        result.push(String.fromCharCode(i))
    }

    console.log(result.join(' '));
}

// printChars('d', 'y');