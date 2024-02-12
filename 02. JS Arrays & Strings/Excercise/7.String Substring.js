function findWord(word, text) {
    const textArray = text.split(' ');
    for (const w of textArray) {
        if (w.toLowerCase() === word.toLowerCase()) {
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`);
}