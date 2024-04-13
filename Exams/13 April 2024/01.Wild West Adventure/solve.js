function solve(input) {
    const count = input.shift();
    const posse = input.splice(0, count).reduce((acc, curr) => {
        const [name, hp, bullets] = curr.split(' ');
        acc.push({name, hp: Number(hp), bullets: Number(bullets)});
        return acc;
    }, [])

    for (const line of input) {
        const [command, name, ...tokens] = line.split(' - ');
        let rideOff = false;
        const currCharacter = posse.find(c => c.name === name);

        switch (command) {
          case "FireShot":
            if (currCharacter.bullets > 0) {
                currCharacter.bullets--;
                console.log(`${name} has successfully hit ${tokens[0]} and now has ${currCharacter.bullets} bullets!`);
                break;
            }
            console.log(`${name} doesn't have enough bullets to shoot at ${tokens[0]}!`);
            break;

          case "TakeHit":
            let damage = Number(tokens[0]);
            let attacker = tokens[1];
            currCharacter.hp -= damage;
            if (currCharacter.hp > 0) {
                console.log(`${name} took a hit for ${damage} HP from ${attacker} and now has ${currCharacter.hp} HP!`);
            }else{
                console.log(`${name} was gunned down by ${attacker}!`);
                let index = posse.indexOf(currCharacter);
                posse.splice(index, 1);
            }
            break;

          case "Reload":
            if (currCharacter.bullets < 6) {
                console.log(`${name} reloaded ${6 - currCharacter.bullets} bullets!`);
                currCharacter.bullets = 6;
            }else{console.log(`${name}'s pistol is fully loaded!`);}
            break;

          case "PatchUp":
            if (currCharacter.hp === 100) {
                console.log(`${name} is in full health!`);
            }else{
                let healthPack = Number(tokens[0]);
                if (currCharacter.hp + healthPack > 100) {
                    healthPack = 100 - currCharacter.hp;
                }
                currCharacter.hp += healthPack;
                console.log(`${name} patched up and recovered ${healthPack} HP!`);
            }
            break;
          case "Ride Off Into Sunset":
            rideOff = true;
            break;
        }
        if (rideOff) {
            break;
        }
    }

    for (const ch of posse) {
        console.log(ch.name);
        console.log(` HP: ${ch.hp}`);
        console.log(` Bullets: ${ch.bullets}`);
    }
}




// solve(["2",
// "Gus 100 0",
// "Walt 100 6",
// "FireShot - Gus - Bandit",
// "TakeHit - Gus - 100 - Bandit",
// "Reload - Walt",
// "Ride Off Into Sunset"]);


solve(["2",
"Jesse 100 4",
"Walt 100 5",
"FireShot - Jesse - Bandit",
 "TakeHit - Walt - 30 - Bandit",
 "PatchUp - Walt - 20" ,
 "Reload - Jesse",
 "Ride Off Into Sunset"]);