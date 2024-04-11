

let currentID = '';
const form = document.querySelector('#form form');
const giftList = document.querySelector('#gift-list');

const giftInput = document.querySelector('#gift');
const forInput = document.querySelector('#for');
const priceInput = document.querySelector('#price');

const loadPresentsBtn = document.querySelector('#load-presents');
loadPresentsBtn.addEventListener('click', loadPresents);
const addPresentBtn = document.querySelector('#add-present');
addPresentBtn.addEventListener('click', addPresent);
const editPresentBtn = document.querySelector('#edit-present');
editPresentBtn.addEventListener('click', editGift);

async function loadPresents() {
    giftList.innerHTML = '';
    const presents = await (await fetch('http://localhost:3030/jsonstore/gifts/')).json();
    Object.values(presents).forEach(pr => {
        const present = {
            _id: pr._id,
            gift: pr.gift,
            for: pr.for,
            price: pr.price
        };

        const giftContainer = createElement('div', null, ['gift-sock'], null, giftList);
        const contentContainer = createElement('div', null, ['content'], null, giftContainer);
        createElement('p', present.gift, [], null, contentContainer);
        createElement('p', present.for, [], null, contentContainer);
        createElement('p', present.price, [], null, contentContainer);
        const buttonsContainer = createElement('div', null, ['buttons-container'], null, giftContainer);
        const changeBtn = createElement('button', 'Change', ['change-btn'], null, buttonsContainer);
        const deleteBtn = createElement('button', 'Delete', ['delete-btn'], null, buttonsContainer);

        changeBtn.addEventListener('click', changeGift);
        function changeGift() {
            giftInput.value = present.gift;
            forInput.value = present.for;
            priceInput.value = present.price;
            giftContainer.remove();
            editPresentBtn.disabled = false;
            addPresentBtn.disabled = true;
            currentID = present._id;
        }

        deleteBtn.addEventListener('click', deletePresent);
        async function deletePresent() {
            await fetch(`http://localhost:3030/jsonstore/gifts/${present._id}`, {
                method: 'DELETE'
            });
            await loadPresents();
        }
    })
  
}

async function addPresent(e) {
    e.preventDefault();
    console.log('TRYING TO ADD');
    const currPresent = {
        gift: giftInput.value,
        for: forInput.value,
        price: priceInput.value
    };
    
    await fetch('http://localhost:3030/jsonstore/gifts/', {
        method: 'POST',
        body: JSON.stringify(currPresent)
    });

    form.reset();
    await loadPresents();
    
}

async function editGift(e) {
    e.preventDefault();
    const editedPresent = {
        gift: giftInput.value,
        for: forInput.value,
        price: priceInput.value,
        _id: currentID
    };
    console.log(editedPresent._id);

    await fetch(`http://localhost:3030/jsonstore/gifts/${editedPresent._id}`, {
        method: 'PUT',
        body: JSON.stringify(editedPresent)
    });

    form.reset();
    editPresentBtn.disabled = true;
    addPresentBtn.disabled = false;
    await loadPresents();
}


function createElement(type, textContent, classes, id, parent) {
    const element = document.createElement(type)
    if (textContent) {element.textContent = textContent;}
    if (classes && classes.length > 0) {element.classList.add(...classes);}
    if (id) {element.setAttribute("id", id);}
    if (parent) {parent.appendChild(element);}
    return element;   
  }