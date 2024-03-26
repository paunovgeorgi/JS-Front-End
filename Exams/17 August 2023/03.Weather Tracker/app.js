const URL = "http://localhost:3030/jsonstore/tasks/";
const locationInput = document.querySelector('#location');
const temperatureInput = document.querySelector('#temperature');
const dateInput = document.querySelector('#date');
const form = document.querySelector('#form form');
let putID = '';

const weatherList = document.querySelector('#list');
const loadHistoryBtn = document.querySelector('#load-history');
const addWeatherBtn = document.querySelector('#add-weather');
const editWeatherBtn = document.querySelector('#edit-weather');

loadHistoryBtn.addEventListener('click', loadHistory);
addWeatherBtn.addEventListener('click', addWeather);
editWeatherBtn.addEventListener('click', editWeather);

async function editWeather(e) {
    e.preventDefault();
    const editedWeather = {
        location: locationInput.value,
        temperature: temperatureInput.value,
        date: dateInput.value,
        _id: putID
    };
    await fetch(`http://localhost:3030/jsonstore/tasks/${putID}`, {
        method: 'PUT',
        body: JSON.stringify(editedWeather)
    });

    editWeatherBtn.disabled = true;
    addWeatherBtn.disabled = false;
    await loadHistory();   
}

async function addWeather(e) {
    e.preventDefault();
    currentWeather = {
        location: locationInput.value,
        temperature: temperatureInput.value,
        date: dateInput.value
    };

    await fetch("http://localhost:3030/jsonstore/tasks/", {
        method: 'POST',
        body: JSON.stringify(currentWeather)
    });

    form.reset();
    await loadHistory();
}

async function loadHistory() {
    weatherList.innerHTML = '';
    const weatherData = await (await fetch(URL)).json();
    Object.values(weatherData).forEach(data => {

        const container = createElement('div', null, ['container'], null, weatherList);
        createElement('h2', data.location, [], null, container);
        createElement('h3', data.date, [], null, container);
        createElement('h3', data.temperature, [], 'celsius', container);
        const btnContainer = createElement('div', null, ['buttons-container'],null, container);
        const changeBtn = createElement('button', 'Change', ['change-btn'], null, btnContainer);
        const deleteBtn = createElement('button', 'Delete', ['delete-btn'], null, btnContainer);
        
        changeBtn.addEventListener('click', changeWeather);
        deleteBtn.addEventListener('click', deleteWeather);
        
        function changeWeather(e) {
            e.preventDefault();
            putID = data._id;
            locationInput.value = data.location;
            temperatureInput.value = data.temperature;
            dateInput.value = data.date;
            addWeatherBtn.disabled = true;
            editWeatherBtn.disabled = false;
            container.remove();
        }

        async function deleteWeather(e) {
            e.preventDefault();
            await fetch(`http://localhost:3030/jsonstore/tasks/${data._id}`, {
                method: 'DELETE',
            });
            await loadHistory();
        }
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