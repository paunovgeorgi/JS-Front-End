window.addEventListener("load", solve);

function solve() {
  
    const inputSelectors = {
        title: document.querySelector('#task-title'),
        category: document.querySelector('#task-category'),
        content: document.querySelector('#task-content')
    };

    const selectors = {
        publish: document.querySelector('#publish-btn'),
        reviewList: document.querySelector('#review-list'),
        publishedList: document.querySelector('#published-list')
    };

    selectors.publish.addEventListener('click', publishTask);

    function publishTask() {

        if (Object.values(inputSelectors).some(selector => selector.value === '')) {
            return;
        }

        const task = {
            taskTitle: inputSelectors.title.value,
            taskCategory: inputSelectors.category.value,
            taskContent: inputSelectors.content.value
        };
     
        const li = createElement('li', null, ['rpost'], null, selectors.reviewList);
        const article = createElement('article', null,[], null, li);
        createElement('h4', task.taskTitle, [], null, article);
        createElement('p', `Category: ${task.taskCategory}`, [], null, article);
        createElement('p', `Content: ${task.taskContent}`, [], null, article);
        const editButton = createElement('button', 'Edit', ['action-btn', 'edit'], null, li);
        const postButton = createElement('button', 'Post', ['action-btn', 'post'], null, li);

        Object.values(inputSelectors).forEach(selector => selector.value = '');

        editButton.addEventListener('click', editTask);
        postButton.addEventListener('click', postTask);

        function editTask(e) {   
            inputSelectors.title.value = task.taskTitle;
            inputSelectors.category.value = task.taskCategory;
            inputSelectors.content.value = task.taskContent;
            li.remove();
        }

        function postTask(e) {
            li.removeChild(e.currentTarget);
            li.removeChild(li.lastChild)
            selectors.publishedList.appendChild(li);
        }

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
}