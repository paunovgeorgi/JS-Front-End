window.addEventListener("load", solve);

function solve() {

  const formElement = document.querySelector('form');
  const firstNameElement = document.querySelector('#first-name');
  const lastNameElement = document.querySelector('#last-name');
  const ageElement = document.querySelector('#age');
  const titleElement = document.querySelector('#story-title');
  const genreElement = document.querySelector('#genre');
  const storyAreaElement = document.querySelector('#story');

  const previewList = document.querySelector('#preview-list');
  const mainContainer = document.querySelector('#main');

  const publishBtn = document.querySelector('#form-btn');
  publishBtn.addEventListener('click', publishStory);

  function publishStory(e) {
    e.preventDefault();
    if (firstNameElement.value === '' 
      || lastNameElement.value === '' || ageElement.value === '' 
      || titleElement.value === '' || storyAreaElement.value === '') {
      return;
    }
    publishBtn.disabled = true;

    const story = {
      firstName: firstNameElement.value,
      lastName: lastNameElement.value,
      age: ageElement.value,
      title: titleElement.value,
      genre: genreElement.value,
      text: storyAreaElement.value
    };

    const liElement = createElement('li', null, ['story-info'], null, previewList);
    const article = createElement('article', null, [], null, liElement);
    createElement('h4', `Name: ${story.firstName} ${story.lastName}`, [], null, article);
    createElement('p', `Age: ${story.age}`, [], null, article);
    createElement('p', `Title: ${story.title}`, [], null, article);
    createElement('p', `Genre: ${story.genre}`, [], null, article);
    createElement('p', story.text, [], null, article);
    const saveStoryBtn = createElement('button', 'Save Story', ['save-btn'], null, liElement);
    const editStoryBtn = createElement('button', 'Edit Story', ['edit-btn'], null, liElement);
    const deleteStoryBtn = createElement('button', 'Delete Story', ['delete-btn'], null, liElement);

    formElement.reset();

    editStoryBtn.addEventListener('click', editStory);
    saveStoryBtn.addEventListener('click', saveStory);
    deleteStoryBtn.addEventListener('click', () => {
      liElement.remove();
      publishBtn.disabled = false;
    })

    function editStory() {
      firstNameElement.value = story.firstName,
      lastNameElement.value = story.lastName,
      ageElement.value = story.age,
      titleElement.value = story.title,
      genreElement.value = story.genre,
      storyAreaElement.value = story.text
      liElement.remove();
      publishBtn.disabled = false;
    };

    function saveStory() {
      mainContainer.innerHTML = '';
      createElement('h1', 'Your scary story is saved!', [], null, mainContainer);
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

}