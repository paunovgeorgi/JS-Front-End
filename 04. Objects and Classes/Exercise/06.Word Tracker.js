function solve(input) {
    words = input.shift().split(' ').reduce((acc, curr) => {
        acc[curr] = 0;
        return acc;
    }, {})

    for (const word of input) {
        if (words.hasOwnProperty(word)) {
           words[word] += 1; 
        }
    }

    Object.entries(words).sort((a, b) => b[1] - a[1])
    .forEach(([key, value]) => {console.log(`${key} - ${value}`);});
}





solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])