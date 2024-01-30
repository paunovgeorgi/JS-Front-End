function solve(num, ...actions) {
    
let number = Number(num);
for (const action of actions) {
    switch (action) {
        case 'chop': number /= 2;  break;
         case 'dice': number = Math.sqrt(number); break;
        case 'spice': number += 1; break;
        case 'bake': number *= 3; break;
        default: number *= 0.8;  break;
    }
    console.log(number);
}
}