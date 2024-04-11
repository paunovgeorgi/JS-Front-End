window.addEventListener("load", solve);

function solve() {
   
const placeInput = document.querySelector('#place');
const actionInput = document.querySelector('#action');
const personInput = document.querySelector('#person');
const form = document.querySelector('#add-task form');

const taskList = document.querySelector('#task-list');
const doneLIst = document.querySelector('#done-list');

const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', addInfo);

function addInfo(e) {
    e.preventDefault();
    const task = {
        place: placeInput.value,
        action: actionInput.value,
        person: personInput.value
    };

    form.reset();
    const li = createElement('li', null, ['clean-task'], null, taskList);
    const article = createElement('li', null, [], null, li);
    createElement('p', `Place:${task.place}`, [], null, article);
    createElement('p', `Action:${task.action}`, [], null, article);
    createElement('p', `Person:${task.person}`, [], null, article);
    const buttonsContainer = createElement('div', null, ['buttons'], null, li);
    const editBtn = createElement('button', 'Edit', ['edit'], null, buttonsContainer);
    const doneBtn = createElement('button', 'Done', ['done'], null, buttonsContainer);

    editBtn.addEventListener('click', editInfo)
    function editInfo() {
        placeInput.value = task.place;
        actionInput.value = task.action;
        personInput.value = task.person;
        li.remove();
    }

    doneBtn.addEventListener('click', submitInfo);
    function submitInfo() {
        doneLIst.appendChild(li);
        buttonsContainer.remove();
        const deleteBtn = createElement('button', 'Delete', ['delete'], null, li);
        deleteBtn.addEventListener('click', () => li.remove());
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