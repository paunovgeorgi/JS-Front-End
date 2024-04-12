function solve(input) {

    let message = input.shift();

    for (const line of input) {

        let buy = false;
        const [command, ...tokens] = line.split('?');
        let subStr = tokens[0];
        let replacement = tokens[1];

        switch (command) {
          case "TakeEven":
            message = message.split('').filter((_, index) => index % 2 === 0).map(m => m).join('');
            console.log(message);
            break;
          case "ChangeAll":
            while (message.includes(subStr)) {
                let temp = message.replace(subStr, replacement);
                message = temp;
            }
            console.log(message);
            break;
          case "Reverse":
            if (message.includes(subStr)) {
                let reversed = subStr.split('').reverse().join('');
                message = message.replace(subStr, '');
                message += reversed;
                console.log(message);
            }else{console.log('error');}
            break;
          case "Buy":
            buy = true;
            break;
        }

        if (buy) {
            break;
        }
        
    }
    console.log(`The cryptocurrency is: ${message}`);
}


solve(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
"TakeEven",
"Reverse?!nzahc",
"ChangeAll?m?g",
"Reverse?adshk",
"ChangeAll?z?i",
"Buy"]);






