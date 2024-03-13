function solve(input) {

   const movies = input
     .filter((line) => line.includes("addMovie"))
     .reduce((acc, curr) => {
       const name = curr.split("addMovie ")[1];
       acc.push({ name });
       return acc;
     }, []);

   const directors = input.filter((line) => line.includes("directedBy"));
   for (const line of directors) {
     const [movie, director] = line.split(" directedBy ");
     if (movies.find((m) => m.name === movie)) {
       movies.find((m) => m.name === movie).director = director;
     }
   }

   const dates = input.filter((line) => line.includes("onDate"));
   for (const line of dates) {
     const [movie, date] = line.split(" onDate ");
     if (movies.find((m) => m.name === movie)) {
       movies.find((m) => m.name === movie).date = date;
     }
   }

   movies
     .filter(
       (m) =>
         m.hasOwnProperty("name") &&
         m.hasOwnProperty("date") &&
         m.hasOwnProperty("director")
     )
     .forEach((m) => console.log(JSON.stringify(m)));

}



solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]);