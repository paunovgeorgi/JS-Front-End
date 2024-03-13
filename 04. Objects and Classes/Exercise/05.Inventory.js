function solve(input) {
    input.reduce((acc, curr) => {
        const [name, level, items] = curr.split(' / ');
        acc.push({name, level: Number(level), items: items});
        return acc;
    }, [])
    .sort((a, b) => a.level - b.level)
    .forEach(hero => {
       console.log(`Hero: ${hero.name}`);
       console.log(`level => ${hero.level}`);
       console.log(`items => ${hero.items}`);
    })
}



solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])