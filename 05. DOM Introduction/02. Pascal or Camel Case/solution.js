function solve() {

  const text = document.querySelector('#text').value.toLowerCase().split(' ');
  const condition = document.querySelector('#naming-convention').value;
  const resultArea = document.querySelector('#result');
  let result = 'Error!';

  if (condition === 'Camel Case') {
    result = text.reduce((acc, curr, index) => {
      if(index !== 0) {curr = curr.charAt(0).toUpperCase() + curr.slice(1)};
      acc += curr;
      return acc;
    }, "")
  }else if(condition ==='Pascal Case') {
      result = text.reduce((acc, curr) => {
      curr = curr.charAt(0).toUpperCase() + curr.slice(1);
      acc += curr;
      return acc;
    }, "")
  }
  resultArea.textContent = result;
}