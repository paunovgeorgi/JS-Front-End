function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
       let restaurantTokens = document.querySelector("#inputs textarea").value;
       restaurantTokens = JSON.parse(restaurantTokens);

       const restaurants = restaurantTokens.reduce((acc, curr) => {
           let [name, ...workers] = curr
               .split(/[ ]?[,-][ ]?/g)
               .filter(w => w.length >= 1);

           if (!acc.hasOwnProperty(name)) {
               acc[name] = {};
               acc[name].workers = [];
               acc[name].totalSalary = 0;
           }
           workers.forEach(w => {
               const [workerName, salary] = w.split(" ");
               acc[name].workers.push({workerName, salary: Number(salary)})
               acc[name].totalSalary += Number(salary);
           })
           return acc;
       }, {});

       const bestRestaurant = Object.keys(restaurants)
           .sort((a, b) => restaurants[b].totalSalary / restaurants[b].workers.length - restaurants[a].totalSalary / restaurants[a].workers.length)[0];

       const averageBestSalary = restaurants[bestRestaurant].workers.length !== 0
           ? restaurants[bestRestaurant].totalSalary / restaurants[bestRestaurant].workers.length
           : 0;
       const bestSalary = restaurants[bestRestaurant].workers.map(w => w.salary).sort((a, b) => b - a)[0];

       document.querySelector("#bestRestaurant p").textContent = `Name: ${bestRestaurant} Average Salary: ${averageBestSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

       const workersOutput = restaurants[bestRestaurant].workers
           .sort((a, b) => b.salary - a.salary)
           .map(w => `Name: ${w.workerName} With Salary: ${w.salary}`)
           .join(" ");

       document.querySelector("#workers p").textContent = workersOutput;
   }
}