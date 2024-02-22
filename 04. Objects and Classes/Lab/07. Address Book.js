function printAddress(arr) {
    const catalogue = arr.reduce((acc, curr) => {
        const [name, address] = curr.split(":");
        acc[name] = address;
        return acc;
    }, {})

    Object.keys(catalogue).sort().forEach(key => {
        console.log(`${key} -> ${catalogue[key]}`);
    })
}

printAddress(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])