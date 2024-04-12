function solve(input) {
    let message = input.shift();

    for (const line of input) {

        const [command, ...tokens] = line.split('?');
        let subStr = tokens[0];
        let replacement = tokens[1];

        switch (command) {
          case "TakeEven":
            message = message.split('').filter((_, index) => index % 2 === 0).join('');
            console.log(message);
            break;
                
          case "ChangeAll":
            while (message.includes(subStr)) {
                message = message.replace(subStr, replacement);
            }
            console.log(message);
            break;
                
          case "Reverse":
            if (message.includes(subStr)) {
                let reversed = subStr.split('').reverse().join('');
                message = message.replace(subStr, '') + reversed;
                console.log(message);
            }else{console.log('error');}
            break;
                
          case "Buy":
            console.log(`The cryptocurrency is: ${message}`);
            break;
        }      
    }
}


solve(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
"TakeEven",
"Reverse?!nzahc",
"ChangeAll?m?g",
"Reverse?adshk",
"ChangeAll?z?i",
"Buy"]);






