const API_URL = "http://localhost:3030/jsonstore/tasks/";
let currentID = '';
const inputs = {
    food: document.querySelector('#food'),
    time: document.querySelector('#time'),
    calories: document.querySelector('#calories')
};

const form = document.querySelector('#form form');
const mealsList = document.querySelector('#list');
const addMEalBtn = document.querySelector('#add-meal');
const editMealBtn = document.querySelector('#edit-meal');
const loadMealsBtn = document.querySelector('#load-meals');

loadMealsBtn.addEventListener('click', loadMeals);
addMEalBtn.addEventListener('click', addMeal);
editMealBtn.addEventListener('click', editMeal);

async function loadMeals(e) {
    mealsList.innerHTML = '';
    const meals = await (await fetch(API_URL)).json();
    Object.values(meals).forEach(m => {
        const meal = {
            food: m.food,
            time: m.time, 
            calories: m.calories,
            id: m._id
        };

        const mealsContainer = createElement('div', null, ['meal'], null, mealsList);
        createElement('h2', meal.food, [], null, mealsContainer);
        createElement('h3', meal.time, [], null, mealsContainer);
        createElement('h3', meal.calories, [], null, mealsContainer);
        const buttons = createElement('div', null, ['meal-buttons'], null, mealsContainer);
        const changeMealBtn = createElement('button', 'Change', ['change-meal'], null, buttons);
        const deleteMealBtn = createElement('button', 'Delete', ['delete-meal'], null, buttons);

        changeMealBtn.addEventListener('click', changeMeal);
        deleteMealBtn.addEventListener('click', deleteMeal);

        async function changeMeal() {
            e.preventDefault();
            mealsContainer.remove();
            inputs.food.value = meal.food;
            inputs.time.value = meal.time;
            inputs.calories.value = meal.calories;
            currentID = meal.id;
            addMEalBtn.disabled = true;
            editMealBtn.disabled = false;
        }

        async function deleteMeal() {
            await fetch(`http://localhost:3030/jsonstore/tasks/${meal.id}`, {
                method: 'DELETE'
            });
            await loadMeals();
        }
    })
}

async function addMeal(e) {
    e.preventDefault();
    const meal = {
        food: inputs.food.value,
        time: inputs.time.value,
        calories: inputs.calories.value
    };

    await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(meal)
    });

    form.reset();
    await loadMeals();
}

async function editMeal() {
    const meal = {
        food: inputs.food.value,
        time: inputs.time.value,
        calories: inputs.calories.value,
        _id: currentID
    };

    await fetch(`http://localhost:3030/jsonstore/tasks/${meal._id}`, {
        method: 'PUT',
        body: JSON.stringify(meal)
    });

    editMealBtn.disabled = true;
    addMEalBtn.disabled = false;
    form.reset();
    await loadMeals();
}

function createElement(type, textContent, classes, id, parent) {
    const element = document.createElement(type)
    if (textContent) {element.textContent = textContent;}
    if (classes && classes.length > 0) {element.classList.add(...classes);}
    if (id) {element.setAttribute("id", id);}
    if (parent) {parent.appendChild(element);}
    return element;   
  }