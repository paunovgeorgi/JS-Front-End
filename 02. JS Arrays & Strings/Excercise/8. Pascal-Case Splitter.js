function pascalSplit(text) {
    const splittedArray = text.split(/(?=[A-Z])/);
    console.log(splittedArray.join(', '));
}