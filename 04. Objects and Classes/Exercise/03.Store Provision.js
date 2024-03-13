function solve(inStock, ordered) {
   const inStockObj = {};
   for (let i = 0; i < inStock.length; i+=2) {
    inStockObj[inStock[i]] = Number(inStock[i + 1]);
   }

   for (let i = 0; i < ordered.length; i+=2) {
    if (inStockObj[ordered[i]]) {
        inStockObj[ordered[i]] += Number(ordered[i + 1]);
    }else{
        inStockObj[ordered[i]] = ordered[i + 1];
    } 
   }

   for (const item in inStockObj) {
    console.log(`${item} -> ${inStockObj[item]}`);
   }
}


solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]) 