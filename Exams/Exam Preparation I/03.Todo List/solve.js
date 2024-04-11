// TODO
function attachEvents() {
  
    const baseUrl = "http://localhost:3030/jsonstore/tasks";

    const todoListElement = document.querySelector('#todo-list');
    const titleElement = document.querySelector('#title');
    const loadBtn = document.querySelector('#load-button');
    const addBtn = document.querySelector('#add-button');
    loadBtn.addEventListener('click', loadTasks);
    addBtn.addEventListener('click', addTask);

    async function loadTasks(e) {
        e.preventDefault();
    
        const tasks = await (await fetch(baseUrl)).json();
        Object.values(tasks).forEach(task => {
            const name = task.name;
            const id = task._id;

            const liElement = createElement('li', null, [], null, todoListElement);
            createElement('span', name, [], null, liElement);
            const removeBtn = createElement('button', 'Remove', [], null, liElement);
            const editBtn = createElement('button', 'Edit', [], null, liElement);

            removeBtn.addEventListener('click', removeTask);
            editBtn.addEventListener('click', editTask);

            async function removeTask() {
                todoListElement.innerHTML = '';
                await fetch(`${baseUrl}/${id}`, {
                    method: 'DELETE'
                });

                await loadTasks(e);
            }

            async function editTask() {
                liElement.innerHTML = '';
                const fieldElement = document.createElement('input');
                fieldElement.setAttribute("type", "text");
                liElement.appendChild(fieldElement);
                liElement.appendChild(removeBtn);
                const submitBtn = createElement('button', 'Submit', [], null, liElement);

                submitBtn.addEventListener('click', submitEdit);
                async function submitEdit() {
                    const editedTask = {name: fieldElement.value};
                    await fetch(`${baseUrl}/${id}`, {
                        method: 'PATCH',
                        body: JSON.stringify(editedTask)
                    });
                    todoListElement.innerHTML = '';

                    await loadTasks(e);
                }
            }

        })
    }

    async function addTask(e) {
        e.preventDefault();
        const task = {
            name: titleElement.value
        };

        await fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(task)
        });

        todoListElement.innerHTML = '';
        await loadTasks(e);
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
