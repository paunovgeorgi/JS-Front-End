
function solve(input) {
    
    const numOfRiders = input.shift();
    const riders = input.splice(0, numOfRiders).reduce((acc, curr) => {
        const [name, capacity, position] = curr.split('|');
        const fuel = Math.min(capacity, 100);
        acc.push({name, fuel, position});
        return acc;
    }, []);

    for (const line of input) {
        const [command, rider, ...data] = line.split(' - ');
        let isFinished = false;
        const rider1 = riders.find(r => r.name === rider);

        switch (command) {
          case "StopForFuel":
                if (rider1.fuel < Number(data[0])) {
                    rider1.position = data[1];
                    console.log(`${rider} stopped to refuel but lost his position, now he is ${data[1]}.`);
                }else{
                    console.log(`${rider} does not need to stop for fuel!`);
                } 
            break;

          case "Overtaking":
                const rider2 = riders.find(r => r.name === data[0]);
                if (rider1.position < rider2.position) {
                    const newPosition = rider2.position;
                    rider2.position = rider1.position;
                    rider1.position = newPosition;
                    console.log(`${rider} overtook ${rider2.name}!`);
                }
            break;

          case "EngineFail":
                const indexToRemove = riders.indexOf(rider1);
                riders.splice(indexToRemove, 1);
                console.log(`${rider} is out of the race because of a technical issue, ${data[0]} laps before the finish.`);
            break;

          case "Finish":
            isFinished = true;
            break;
        }       

        if (isFinished) {
            break;
        }
    }

    // riders.sort((a, b) => a.position - b.position);
    Object.values(riders).forEach(rider => {
        console.log(rider.name);
        console.log(`  Final position: ${rider.position}`);  
    })
}


solve(["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"]);

