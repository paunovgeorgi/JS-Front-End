function storePhones(array) {
 let register = array.reduce((acc, curr) => {
    const [name, phone] = curr.split(" ");
    acc[name] = phone;
    return acc;
 }, {})

 Object.keys(register).forEach(key => {console.log(`${key} -> ${register[key]}`);})
}

// function storePhones(array) {

//     let register = {};
//     for (const data of array) {
//         let current = data.split(" ");
//         let name = current[0];
//         let number = current[1];
//         register[name] = number;
//     }

//     for (const key in register) {
//        console.log(`${key} -> ${register[key]}`);  
//     }
//    }
   

storePhones(['Tim 0834212554','Peter 0877547887','Bill 0896543112','Tim 0876566344'])