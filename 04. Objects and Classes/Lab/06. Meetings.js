// function printSchedule(arr) {
//     let schedule = {};

//     for (const data of arr) {
//         let current = data.split(" ");
//         let day = current[0];
//         let name = current[1];
//         if (schedule[day]) {
//             console.log(`Conflict on ${day}!`);
//         }
//         else{
//             schedule[day] = name;
//             console.log(`Scheduled for ${day}`);
//         }
//     }

//     Object.entries(schedule).forEach(([key, value]) => {
//         console.log(`${key} -> ${value}`);
//     });
// }

function printSchedule(arr) {
    let schedule = arr.reduce((acc, curr) => {
        const [day, name] = curr.split(" ");
        if (acc[day]) {
            console.log(`Conflict on ${day}!`);
        }
        else{
            acc[day] = name;
            console.log(`Scheduled for ${day}`);
        }
        return acc;
    }, {})

    Object.entries(schedule).forEach(([key, value]) => {
        console.log(`${key} -> ${value}`);
    });
}









printSchedule(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])