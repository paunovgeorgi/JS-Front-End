function solve() {
  const text = document.querySelector('#input').value.split('.')
  .filter(s => s.length > 0)
  .map(s => s + '.');
  const output = document.querySelector('#output');
  
  while (text.length > 0) {
    const paragraph = text.splice(0, 3);
    const p = document.createElement('p');
    p.textContent = paragraph.join('');
    output.appendChild(p);
  }
}