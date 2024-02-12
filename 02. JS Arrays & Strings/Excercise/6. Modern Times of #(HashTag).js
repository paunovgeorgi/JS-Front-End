function solve(text) {
    let matches = text.match(/#[A-z]+/gm);
    for (let word of matches) {
        let sliced = word.slice(1);
        console.log(sliced)
    }
}