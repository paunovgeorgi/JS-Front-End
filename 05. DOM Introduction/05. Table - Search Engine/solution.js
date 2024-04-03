function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchField = document.querySelector('#searchField');
      const cells = Array.from(document.querySelectorAll('tbody tr td'));

      cells.forEach(cell => cell.parentElement.classList.remove('select'));

      for (const cell of cells) {
         if (searchField.value != '' &&
            cell.textContent.toLocaleLowerCase().includes(searchField.value.toLocaleLowerCase())) {
            cell.parentElement.classList.add('select');
         }
      }
      searchField.value = '';
   }
}