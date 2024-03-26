
function solve(input) {
    const count = input.shift();
    const astronauts = input.splice(0, count).reduce((acc, curr) => {
        const [name, oxygen, energy] = curr.split(' ');
        acc[name] = {oxygen: Number(oxygen), energy: Number(energy)};
        return acc;
    }, {})

    for (const line of input) {
        const [command, name, value] = line.split(' - ');
        let end = false;
        switch (command) {
            case 'Explore':
                if (astronauts[name].energy >= value) {
                    astronauts[name].energy -= value;
                    console.log(`${name} has successfully explored a new area and now has ${astronauts[name].energy} energy!`);
                }else{
                    console.log(`${name} does not have enough energy to explore!`);
                }
                
            break;
            case 'Refuel':
                let refueled = Number(value);
                let initialEnergy = astronauts[name].energy
                astronauts[name].energy += Number(value);
                if(astronauts[name].energy > 200) {
                    astronauts[name].energy = 200
                    refueled = 200 - initialEnergy;
                }
                console.log(`${name} refueled their energy by ${refueled}!`);
             break;
            case 'Breathe':
                let recovered = Number(value);
                let initialOxygen = astronauts[name].oxygen
                astronauts[name].oxygen += Number(value);
                if(astronauts[name].oxygen > 100) {
                    astronauts[name].oxygen = 100
                    recovered = 100 - initialOxygen;
                }
                console.log(`${name} took a breath and recovered ${recovered} oxygen!`);
            break;
            case 'End':
                end = true;
            break;

        }
        if (end) {
            break;
        }
    }

    for (const astronaut in astronauts) {
        console.log(`Astronaut: ${astronaut}, Oxygen: ${astronauts[astronaut].oxygen}, Energy: ${astronauts[astronaut].energy}`);
    }

}


solve([  '3',
'John 50 120',
'Kate 80 180',
'Rob 70 150',
'Explore - John - 50',
'Refuel - Kate - 30',
'Breathe - Rob - 20',
'End']);

