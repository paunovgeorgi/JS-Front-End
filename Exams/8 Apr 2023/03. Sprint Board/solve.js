function attachEvents() {
    const baseURL = "http://localhost:3030/jsonstore/tasks";

    const titleElement = document.querySelector('#title');
    const descriptionElement = document.querySelector('#description');
    const formElement = document.querySelector('#form-section form');

    const toDoSection = document.querySelector('#todo-section');
    const inProgressSection = document.querySelector('#in-progress-section');
    const codeReviewSection = document.querySelector('#code-review-section');
    const doneSection = document.querySelector('#done-section');
    const sectionsArr = Array.from(document.querySelectorAll('#board-section article'));
    
    const loadBoardBtn = document.querySelector('#load-board-btn');
    const createTaskBtn = document.querySelector('#create-task-btn');

    const statusObj = {
        ToDo: toDoSection,
        'In Progress': inProgressSection,
        'Code Review': codeReviewSection,
        Done: doneSection
    };

    const buttonText = {
        ToDo: 'Move to In Progress',
        'In Progress': 'Move to Code Review',
        'Code Review': 'Move to Done',
        Done: 'Close'
    };

    loadBoardBtn.addEventListener('click', loadBoard);
    createTaskBtn.addEventListener('click', createTask);

    async function loadBoard(e) {
        e.preventDefault();
        sectionsArr.forEach(s => s.innerHTML = '');

        const tasks = await (await fetch(baseURL)).json();
        Object.values(tasks).forEach(t => {

            const taskWrapper = createElement('li', null, ['task'], null, statusObj[t.status]);
            createElement('h3', t.title, [], null, taskWrapper);
            createElement('p', t.description, [], null, taskWrapper);
            const moveTaskBtn = createElement('button', `${buttonText[t.status]}`, [], null, taskWrapper);
            moveTaskBtn.addEventListener('click', moveTask);

            async function moveTask(e) {
                if (t.status !== 'Done') {
                     
                    let newStatus;
                    if (t.status === 'ToDo') {newStatus = 'In Progress';}
                    else if (t.status === 'In Progress') { newStatus = 'Code Review';}
                    else if(t.status === 'Code Review'){ newStatus = 'Done';}
                    
                    await fetch(`${baseURL}/${t._id}`, {
                        method: 'PATCH',
                        body: JSON.stringify({status: newStatus})
                    })
                }
                else{
                    await fetch(`${baseURL}/${t._id}`, {
                        method: 'DELETE'
                    });
                }

                await loadBoard(e);
            }
        })
    }

    async function createTask(e) {
        e.preventDefault();
        const task = {
            title: titleElement.value,
            description: descriptionElement.value,
            status: 'ToDo'
        };

        await fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(task)
        });

        formElement.reset();
        await loadBoard(e);
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

attachEvents();