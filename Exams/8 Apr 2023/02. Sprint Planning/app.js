window.addEventListener('load', solve);

function solve() {
    let tasksCount = 0;
    let totalPoints = 0
    const hiddenTaskId = document.querySelector('#task-id');
    const formElement = document.querySelector('#create-task-form');
    const titleElement = document.querySelector('#title');
    const descriptionElement = document.querySelector('#description');
    const labelElement = document.querySelector('#label');
    const pointsElement = document.querySelector('#points');
    const assigneeElement = document.querySelector('#assignee');
    const createTaskBtn = document.querySelector('#create-task-btn');
    const deleteTaskBtn = document.querySelector('#delete-task-btn');

    const tasksSection = document.querySelector('#tasks-section');
    const totalPointsElement = document.querySelector('#total-sprint-points');

    const taskLabel = {
        Feature: `Feature ${String.fromCharCode(8865)}`,
        "Low Priority Bug": `Low Priority Bug ${String.fromCharCode(9737)}`,
        "High Priority Bug": `High Priority Bug ${String.fromCharCode(9888)}`
    };

    const divTaskClass = {
        Feature: 'feature',
        "Low Priority Bug": 'low-priority',
        "High Priority Bug": 'high-priority'
    };

    createTaskBtn.addEventListener('click', addTask);
    deleteTaskBtn.addEventListener('click', deleteTask);

    function addTask(e) {
        if (!titleElement.value || !descriptionElement.value || !pointsElement.value || !assigneeElement.value) {
            return;
        }

        tasksCount++;
        const currentTask = {
            title: titleElement.value,
            description: descriptionElement.value,
            label: labelElement.value,
            points: pointsElement.value,
            assignee: assigneeElement.value,
            id: tasksCount
        };

        totalPoints += Number(pointsElement.value);
        totalPointsElement.textContent = `Total Points ${totalPoints}pts`;

        const articleWrapper = createElement('article', null, ['task-card'], `task-${tasksCount}`, tasksSection);
        createElement('div', `${taskLabel[labelElement.value]}`, ['task-card-label', `${divTaskClass[labelElement.value]}`], null, articleWrapper);
        createElement('h3', titleElement.value, ['task-card-title'], null, articleWrapper);
        createElement('p', descriptionElement.value, ['task-card-description'], null, articleWrapper);
        createElement('div', `Estimated at ${pointsElement.value} pts`, ['task-card-points'], null, articleWrapper);
        createElement('div', `Assigned to: ${assigneeElement.value}`, ['task-card-assignee'], null, articleWrapper);
        const btnWrapper = createElement('div', null, ['task-card-actions'], null, articleWrapper);
        const deleteBtn = createElement('button', 'Delete', ['task-card-actions'], null, btnWrapper);

        formElement.reset();

        deleteBtn.addEventListener('click', () => {
            titleElement.value = currentTask.title;
            descriptionElement.value = currentTask.description;
            labelElement.value = currentTask.label;
            pointsElement.value = currentTask.points;
            assigneeElement.value = currentTask.assignee;
            hiddenTaskId.value = currentTask.id;

            deleteTaskBtn.disabled = false;
            createTaskBtn.disabled = true;

            titleElement.disabled = true;
            descriptionElement.disabled = true;
            labelElement.disabled = true;
            pointsElement.disabled = true;
            assigneeElement.disabled = true;
        });
    }

    function deleteTask() {
        const taskToDelete = document.querySelector(`#task-${hiddenTaskId.value}`);
        taskToDelete.remove();
        totalPoints -= Number(pointsElement.value);
        totalPointsElement.textContent = `Total Points ${totalPoints}pts`;
        formElement.reset();
        deleteTaskBtn.disabled = true;
        createTaskBtn.disabled = false;
        titleElement.disabled = false;
        descriptionElement.disabled = false;
        labelElement.disabled = false;
        pointsElement.disabled = false;
        assigneeElement.disabled = false;
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