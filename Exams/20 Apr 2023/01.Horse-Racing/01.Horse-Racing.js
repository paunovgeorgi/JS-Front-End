function solve(input) {
    const horses = input.shift().split('|');

    for (const line of input) {
        const [command, ...data] = line.split(' ');
        let stop = false;
        switch (command) {
            case 'Retake':
                    const overtaking = data[0];
                    const overtaken = data[1];

                const overtakingIndex = horses.indexOf(overtaking);
                const overtakenIndex = horses.indexOf(overtaken);
                if (overtakingIndex < overtakenIndex) {
                    horses[overtakingIndex] = overtaken;
                    horses[overtakenIndex] = overtaking; 
                    console.log(`${overtaking} retakes ${overtaken}.`);
                }
        
                break;

            case 'Trouble':
                const horse = data[0];
                const troubleIndex = horses.indexOf(horse);
                if (troubleIndex > 0) {
                    reverseSwitch(horses, troubleIndex, troubleIndex - 1);
                    console.log(`Trouble for ${horse} - drops one position.`);
                }
                break;
            case 'Rage':
                const rageHorse = data[0];
                const rageIndex = horses.indexOf(rageHorse);
                console.log(`${rageHorse} rages 2 positions ahead.`);

                if (rageIndex !== horses.length - 1) {
                    let switchIndex = rageIndex + 2;
                    if (rageIndex === horses.length - 2) {
                        switchIndex--;
                        switchPositions(horses, rageIndex, switchIndex);
                    }
                    else{
                        rageSwitch(horses,rageIndex, rageIndex + 1, switchIndex);
                    }
                }
         
                break;
            case 'Miracle':
                const miracleHorse = horses[0];
                lastToFirst(horses, miracleHorse)
                console.log(`What a miracle - ${miracleHorse} becomes first.`);
                break;
            case 'Finish':
                console.log(horses.join('->'));
                console.log(`The winner is: ${horses[horses.length-1]}`);
                stop = true;
                break;
        }
        if (stop) {
            break;
        }
    }


    function switchPositions(array, index1, index2) {
        const temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }
    function rageSwitch(array, index1,indexMiddle, index2) {
        const ragingHorse = array[index1];
        array[index1] = array[indexMiddle];
        array[indexMiddle] = horses[index2];
        array[index2] = ragingHorse;
    }

    function reverseSwitch(array, index2, index1) {
        const temp = array[index2];
        array[index2] = array[index1];
        array[index1] = temp;
    }

    function lastToFirst(array, name) {
        array.shift();
        array.push(name)
    }

}