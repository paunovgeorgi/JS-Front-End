function solve(input) {
    const inParking = input.reduce((acc, curr, index) => {
        const [command, vehicle] = curr.split(', ');
            switch (command) {
              case "IN":
                acc[vehicle] = "";
                break;
              case "OUT":
                if (acc.hasOwnProperty([vehicle])) {
                  delete acc[vehicle];
                }
                break;
            }
        return acc;
    }, {});

    if (Object.keys(inParking).length !== 0) {
        Object.keys(inParking).sort((a, b) => a.localeCompare(b)).forEach(car =>{
            console.log(car);
        })    
    }else{
        console.log("Parking Lot is Empty");
    }
}



solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);