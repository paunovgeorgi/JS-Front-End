window.addEventListener("load", solve);

function solve() {
    
  const inputSelectors = {
    name: document.querySelector('#player'),
    score: document.querySelector('#score'),
    round: document.querySelector('#round')
  }; 

  const sureList = document.querySelector('#sure-list');
  const scoreBoard = document.querySelector('#scoreboard-list');
  const form = document.querySelector('form.scoring-content');
  const addBtn = document.querySelector('#add-btn');
  addBtn.addEventListener('click', addScore);


  function addScore(e) {
    e.preventDefault();

    if (Object.values(inputSelectors).some(selector => selector.value === '')) {
      return;
    }

    const shot = {
      name: inputSelectors.name.value,
      score: inputSelectors.score.value,
      round: inputSelectors.round.value
    };

    const li = createElement('li', null, ['dart-item'], null, sureList);
    const article= createElement('article', null, [], null, li);
    createElement('p', shot.name, [], null, article);
    createElement('p', `Score: ${shot.score}`, [], null, article);
    createElement('p', `Round: ${shot.round}`, [], null, article);
    const editBtn = createElement('button', 'edit', ['btn', 'edit'], null, li);
    const okBtn = createElement('button', 'ok', ['btn', 'ok'], null, li);
    addBtn.disabled = true;
    form.reset();

    editBtn.addEventListener('click', editScore);
    okBtn.addEventListener('click', approveScore);

    function editScore(e) {
      e.preventDefault();
      inputSelectors.name.value = shot.name;
      inputSelectors.score.value = shot.score;
      inputSelectors.round.value = shot.round;
      li.remove();
      addBtn.disabled = false;
    }

    function approveScore() {
      scoreBoard.appendChild(li);
      editBtn.remove();
      okBtn.remove();
      addBtn.disabled = false;
    }

  }

  function createElement(type, textContent, classes, id, parent) {
    const element = document.createElement(type)
    if (textContent) {element.textContent = textContent;}
    if (classes && classes.length > 0) {element.classList.add(...classes);}
    if (id) {element.setAttribute("id", id);}
    if (parent) {parent.appendChild(element);}
    return element;   
  }

  }