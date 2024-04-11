function solve(input) {
    let message = input.shift();

    for (const line of input) {
        if (line === 'TakeEven') {
           message = takeEven(message);
           console.log(message);
        }
        if (line.includes('ChangeAll')) {
            let original = line.split('?')[1];
            let replacement = line.split('?')[2];
            while (message.includes(original)) {
                message = message.replace(original, replacement);
            }
            console.log(message);
        }
        if (line.includes('Reverse')) {
            let subStr = line.split('?')[1];
            if (message.includes(subStr)) {
                let startIndex = message.indexOf(subStr);
                let reversedSubStr = subStr.split('').reverse().join('');
                let updateMsg = message.split('');
                updateMsg.splice(startIndex, subStr.length);
                message = updateMsg.join('') + reversedSubStr;
                console.log(message);
            }else{console.log('error');}
        }

        if (line === 'Buy') {
            console.log(`The cryptocurrency is: ${message}`);
            return;
        }
    }

    function takeEven(str) {
        return str.split('').reduce((acc, curr, index) => {
            if (index % 2 === 0) {
                acc += curr;
            }
            return acc;
        }, '')
    }
}


solve(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
"TakeEven",
"Reverse?!nzahc",
"ChangeAll?m?g",
"Reverse?adshk",
"ChangeAll?z?i",
"Buy"]);






