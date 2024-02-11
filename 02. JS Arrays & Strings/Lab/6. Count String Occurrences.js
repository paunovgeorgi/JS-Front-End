function findOccurrences(text, word) {
    // Split the text into an array of words
    
    const words = text.split(/\s+/);

    let count = 0;

    // Iterate through each word and count occurrences
    for (const w of words) {
        if (w === word) {
            count++;
        }
    }

    console.log(count);
}