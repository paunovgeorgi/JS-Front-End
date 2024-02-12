function calcPrice(item, count) {
    const product = {
        coffee: 1.50,
        water: 1, 
        coke: 1.40,
        snacks: 2
        }
    const result = (product[item] * count).toFixed(2);
    console.log(result);
}

// calcPrice('snacks', 4);