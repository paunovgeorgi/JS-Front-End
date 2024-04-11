function solve(input) {
    const count = input.shift();
    const pieces = input.splice(0, count).reduce((acc, curr) => {
        const [piece, composer, key] = curr.split('|');
        acc.push({piece, composer, key});
        return acc;
    }, [])

    for (const line of input) {
        let isStop = false;
        let tokens = line.split('|');
        let command = tokens[0];
        let piece = tokens[1];
        let currentPiece = pieces.find(p => p.piece === piece);
        
        switch (command) {
            case 'Add':
                if (!currentPiece) {         
                    let composer = tokens[2];
                    let key = tokens[3];
                    pieces.push({piece, composer, key});
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                }else{console.log(`${piece} is already in the collection!`);}
            break;
            case 'Remove':
                if (currentPiece) {   
                    let indexToRemove = pieces.indexOf(currentPiece);
                    pieces.splice(indexToRemove, 1);
                    console.log(`Successfully removed ${piece}!`);
                }else{console.log(`Invalid operation! ${piece} does not exist in the collection.`);}
            break;
            case 'ChangeKey':
                if (currentPiece) {   
                    currentPiece.key = tokens[2];
                    console.log(`Changed the key of ${piece} to ${tokens[2]}!`);
                }else{console.log(`Invalid operation! ${piece} does not exist in the collection.`);}
            break;
            case 'Stop':
                isStop = true;
            break;    
        }
        if (isStop) {
            break;
        }
    }
    pieces.forEach(p => {
        console.log(`${p.piece} -> Composer: ${p.composer}, Key: ${p.key}`);
    })
}





solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]);