
const loadVacationsBtn = document.querySelector('#load-vacations');
const addVacationBtn = document.querySelector('#add-vacation');
const editVacationBtn = document.querySelector('#edit-vacation');
const vacationList = document.querySelector('#list');
const form = document.querySelector('#form form');
let editID = '';

const nameInput = document.querySelector('#name');
const daysInput = document.querySelector('#num-days');
const dateInput = document.querySelector('#from-date');

loadVacationsBtn.addEventListener('click', loadVacations);
addVacationBtn.addEventListener('click', addVacation);
editVacationBtn.addEventListener('click', editVacation);

async function editVacation(e) {
    e.preventDefault();
    const editedVacation = {
        name: nameInput.value,
        days: daysInput.value,
        date: dateInput.value,
        _id: editID
    };

    await fetch(`http://localhost:3030/jsonstore/tasks/${editID}`, {
        method: 'PUT',
        body: JSON.stringify(editedVacation)
    });

    editVacationBtn.disabled = true;
    addVacationBtn.disabled = false;
    form.reset();
    await loadVacations();
}

async function loadVacations() {
    const vacations = await (await fetch(`http://localhost:3030/jsonstore/tasks/`)).json();
    vacationList.innerHTML = '';

    Object.values(vacations).forEach(vacation => {

        const id = vacation._id;
        const container = createElement('div', null, ['container'], null, vacationList);
        createElement('h2', vacation.name, [], null, container);
        createElement('h3', vacation.date, [], null, container);
        createElement('h3', vacation.days, [], null, container);
        const changeBtn = createElement('button', 'Change', ['change-btn'], null, container);
        const doneBtn = createElement('button', 'Done', ['done-btn'], null, container);

        changeBtn.addEventListener('click', changeVacation);
        doneBtn.addEventListener('click', deleteVacation);

        async function changeVacation(e) {
            editID = id;
            console.log(editID);
            e.preventDefault();
            editVacationBtn.disabled = false;
            addVacationBtn.disabled = true;
            nameInput.value = vacation.name;
            daysInput.value = vacation.days;
            dateInput.value = vacation.date;
            container.remove();
        }

        async function deleteVacation(e) {
            e.preventDefault();
            await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
                method: 'DELETE',
            });

            await loadVacations();
        }

    })

}

async function addVacation(e) {
    e.preventDefault();
    const currentVacation = {
        name: nameInput.value,
        days: daysInput.value,
        date: dateInput.value,
    };

    await fetch(`http://localhost:3030/jsonstore/tasks/`, {
        method: 'POST',
        body: JSON.stringify(currentVacation)
    });

    form.reset();
    await loadVacations();
}

function createElement(type, textContent, classes, id, parent) {

    const element = document.createElement(type)

   if (textContent) {
        element.textContent = textContent;
    }

    if (classes && classes.length > 0) {
        element.classList.add(...classes);
    }

    if (id) {
        element.setAttribute("id", id);
    }

    if (parent) {
        parent.appendChild(element);
    }

    return element;   
}