function solve(jsonStr) {
    let person = JSON.parse(jsonStr);
    Object.entries(person).forEach(([key, value]) => { console.log(`${key}: ${value}`); });
}