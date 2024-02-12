function revealWords(words, text) {
    const textArray = text.split(' ');
    const wordsArray = words.split(', ');
    for (let i = 0; i < textArray.length; i++) {
        
        for (let j = 0; j < wordsArray.length; j++) {
            
            if (textArray[i].length === wordsArray[j].length && textArray[i].includes('*'))  {
                textArray[i] = wordsArray[j];
            }
        }

    }
    
    console.log(textArray.join(" "));
}

// revealWords('great',
// 'softuni is ***** place for learning new programming languages');
