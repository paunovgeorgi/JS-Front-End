function sortList(names) {
    // const sortedNames = names.slice().map(name => name.toLowerCase()).sort();
    names.sort((a,b) => {return a.localeCompare(b);});
    let count = 0;
    for (const name of names) {
        console.log(`${++count}.${name}`);
    }
}