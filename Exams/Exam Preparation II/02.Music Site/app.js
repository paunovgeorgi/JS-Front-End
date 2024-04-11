window.addEventListener('load', solve);

function solve() {

    const genreElement = document.querySelector('#genre');
    const nameElement = document.querySelector('#name');
    const authorElement = document.querySelector('#author');
    const dateElement = document.querySelector('#date');
    const formElement = document.querySelector('.container-text form')
    const totalLikesElement = document.querySelector('#total-likes p');
    let totalLikes = 0;

    const attachContainer = document.querySelector('div.all-hits-container');
    const savedContainer = document.querySelector('#saved-hits div.saved-container')
    
    const addBtn = document.querySelector('#add-btn');
    
    addBtn.addEventListener('click', addSong);
    function addSong(e) {
        e.preventDefault();
        if (!genreElement.value || !nameElement.value || !authorElement.value || !dateElement.value) {
            return;
        }

        const songWrapper = createElement('div', null, ['hits-info'], null, attachContainer);
        const image = createElement('img', null, [], null, songWrapper);
        image.src = "./static/img/img.png";
        createElement('h2', `Genre: ${genreElement.value}`, [], null, songWrapper);
        createElement('h2', `Name: ${nameElement.value}`, [], null, songWrapper);
        createElement('h2', `Author: ${authorElement.value}`, [], null, songWrapper);
        createElement('h3', `Date: ${dateElement.value}`, [], null, songWrapper);
        const saveBtn = createElement('button', 'Save song', ['save-btn'], null, songWrapper);
        const likeBtn = createElement('button', 'Like song', ['like-btn'], null, songWrapper);
        const deleteBtn = createElement('button', 'Delete', ['delete-btn'], null, songWrapper);

        formElement.reset();

        likeBtn.addEventListener('click', () => {
            totalLikes += 1;
            totalLikesElement.textContent = `Total Likes: ${totalLikes}`;
            likeBtn.disabled = true;
        });

        saveBtn.addEventListener('click', () => {
            savedContainer.appendChild(songWrapper);
            saveBtn.remove();
            likeBtn.remove();
        })

        deleteBtn.addEventListener('click', () => {
            songWrapper.remove();
        })
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