const baseURL = "http://localhost:3030/jsonstore/games";
let globalID;

const formElement = document.querySelector('#form-section form');
const nameElement = document.querySelector('#g-name');
const typeElement = document.querySelector('#type');
const playersElement = document.querySelector('#players');
const gamesList = document.querySelector('#games-list');

const loadGamesBtn = document.querySelector('#load-games');
const addGameBtn = document.querySelector('#add-game');
const editGameBtn = document.querySelector('#edit-game');

loadGamesBtn.addEventListener('click', loadGames);
addGameBtn.addEventListener('click', addGame);
editGameBtn.addEventListener('click', editGame);

async function loadGames(e) {
    e.preventDefault();
    editGameBtn.disabled = true;
    gamesList.innerHTML = '';
    const games = await (await fetch(baseURL)).json();
    Object.values(games).forEach(g => {

        const mainContainer = createElement('div', null, ['board-game'], null, gamesList);
        const gameWrapper = createElement('div', null, ['content'], null, mainContainer);
        createElement('p', g.name, [], null, gameWrapper);
        createElement('p', g.players, [], null, gameWrapper);
        createElement('p', g.type, [], null, gameWrapper);
        const buttonsContainer = createElement('div', null, ['buttons-container'], null, mainContainer);
        const changeBtn = createElement('button', 'Change', ['change-btn'], null, buttonsContainer)
        const deleteBtn = createElement('button', 'Delete', ['delete-btn'], null, buttonsContainer)

        changeBtn.addEventListener('click', () => {
            nameElement.value = g.name;
            playersElement.value = g.players;
            typeElement.value = g.type;
            editGameBtn.disabled = false;
            addGameBtn.disabled = true;
            globalID = g._id;
        })

        deleteBtn.addEventListener('click', async () => {
            await fetch(`${baseURL}/${g._id}`, {
                method: 'DELETE'
            });

            await loadGames(e);
        })
    })
}

async function addGame(e) {
    e.preventDefault();
    const game = {
        name: nameElement.value,
        players: playersElement.value,
        type: typeElement.value
    };

    await fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(game)
    });

    formElement.reset();
    await loadGames(e);
}

async function editGame(e) {
    e.preventDefault();
    const editedGame = {
        name: nameElement.value,
        players: playersElement.value,
        type: typeElement.value,
        _id: globalID
    };

    await fetch(`${baseURL}/${editedGame._id}`, {
        method: 'PUT',
        body: JSON.stringify(editedGame)
    })

    await loadGames(e);
    editGameBtn.disabled = true;
    addGameBtn.disabled = false;
    formElement.reset();
}

function createElement(type, textContent, classes, id, parent) {
    const element = document.createElement(type)
    if (textContent) {element.textContent = textContent;}
    if (classes && classes.length > 0) {element.classList.add(...classes);}
    if (id) {element.setAttribute("id", id);}
    if (parent) {parent.appendChild(element);}
    return element;   
  }