function solve(input) {

  const products = input.shift().split('!');

  for (const line of input) {
    let goShopping = false;
    const tokens = line.split(' ');
    const command = tokens[0];
    let item = tokens[1];
    let newItem = tokens[2];
    switch (command) {
      case "Urgent":
        if (!products.includes(item)) {
          products.unshift(item);
        }
        break;
      case "Unnecessary":
        if (products.includes(item)) {
          let index = products.indexOf(item);
          products.splice(index, 1);
        }
        break;
      case "Correct":
        if (products.includes(item)) {
          let index = products.indexOf(item);
          //products.splice(index, 1, newItem);
          products[index] = newItem;
        }
        break;
      case "Rearrange":
        if (products.includes(item)) {
          let index = products.indexOf(item);
          products.splice(index, 1);
          products.push(item);
        }
        break;
      case 'Go': goShopping = true; break;
    }
    if (goShopping) {
      break;
    }
  }

  console.log(products.join(', '));
}


solve(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk banana",
"Urgent Tomatoes",
"Go Shopping!"]);