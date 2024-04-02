
function solve(input) {
    
    const count = input.shift();
    const baristas = input.splice(0, count).reduce((acc, curr) => {
        const [name, shift, drinksList] = curr.split(' ');
        const barista = {[`${name}`]: {shift, drinks: drinksList.split(',')}};
        acc.push(barista);
        return acc;
    }, [])

    for (const line of input) {
        const [command, name, ...data] = line.split(' / ');
        let isClosed = false;
        let shift = '';
        let drink = '';
        let barista = baristas.find(b=> b.hasOwnProperty(name));
        switch (command) {
          case "Prepare": 
            shift = data[0];
            drink = data[1];
            if (barista[name].shift === shift && barista[name].drinks.includes(drink)) {
                console.log(`${name} has prepared a ${drink} for you!`);
            }else{console.log(`${name} is not available to prepare a ${drink}.`);}
            break;
          case "Change Shift":
            shift = data[0];
            barista[name].shift = shift;
            console.log(`${name} has updated his shift to: ${shift}`);
            break;
          case "Learn":
            drink = data[0];
            if (!barista[name].drinks.includes(drink)) {
                barista[name].drinks.push(drink);
                console.log(`${name} has learned a new coffee type: ${drink}.`);
            }else{console.log(`${name} knows how to make ${drink}.`);}
            break;
          case "Closed":
            isClosed = true;
            break;
        }
        if (isClosed) {break;}
    }

    baristas.forEach(barista => {
        Object.keys(barista).forEach(key => {
            console.log(`Barista: ${key}, Shift: ${barista[key].shift}, Drinks: ${barista[key].drinks.join(', ')}`);
        })

    });
}

solve([
    '3',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed']);

