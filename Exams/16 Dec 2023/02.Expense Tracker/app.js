window.addEventListener("load", solve);

function solve() {
    
    const inputs = {
    type: document.querySelector("#expense"),
    amount: document.querySelector("#amount"),
    date: document.querySelector("#date"),
    };

    const form = document.querySelector('#form-container form.expense-content');
    const addBtn = document.querySelector("#add-btn");
    const deleteBtn = document.querySelector('button.btn.delete');
    const previewList = document.querySelector('#preview-list');
    const expensesList = document.querySelector('#expenses-list');

    addBtn.addEventListener("click", addItem);

    function addItem(e) {
    e.preventDefault();
    if (Object.values(inputs).some(input => input.value === '')) {
        return;
    }

    const item = {
        type: inputs.type.value,
        amount: inputs.amount.value,
        date: inputs.date.value
    }

    const li = createElement('li', null, ['expense-item'], null, previewList);
    const article = createElement('article', null, [], null, li);
    createElement('p', `Type: ${item.type}`, [], null, article);
    createElement('p', `Amount: ${item.amount}$`, [], null, article);
    createElement('p', `Date: ${item.date}`, [], null, article);
    const buttons = createElement('div', null, ['buttons'], null, li)
    const editBtn = createElement('button', 'edit', ['btn', 'edit'], null, buttons);
    const okBtn = createElement('button', 'ok', ['btn', 'ok'], null, buttons);
    form.reset();
    addBtn.disabled = true;

    editBtn.addEventListener('click', editItem);
    okBtn.addEventListener('click', approveItem);

    function editItem() {
        li.remove();
        inputs.type.value = item.type;
        inputs.amount.value = item.amount;
        inputs.date.value = item.date;
        addBtn.disabled = false;
    }

    function approveItem() {
        expensesList.appendChild(li);
        buttons.remove();
        addBtn.disabled = false;
        deleteBtn.addEventListener('click', function(){location.reload()});
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