function search() {
   const searchField = document.querySelector('#searchText');
   const towns = Array.from(document.querySelectorAll('#towns li'));
   const result = document.querySelector('#result');
   
   towns.forEach(town => {
      town.style.textDecoration = "none";
      town.style.fontWeight = "normal";
   })
   
   let count = 0;
   towns.forEach(town => {
      if (searchField.value != '' && town.textContent.toLowerCase().includes(searchField.value.toLowerCase())) {
         town.style.textDecoration = "underline";
         town.style.fontWeight = "bold";
         count++;
      }
   })

   result.textContent = `${count} matches found`;
}