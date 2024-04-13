window.addEventListener("load", solve);

function solve() {

  const formElement = document.querySelector('#add-contact form');
  const nameElement = document.querySelector('#name');
  const phoneElement = document.querySelector('#phone');
  const categoryElement = document.querySelector('#category');
  const checkList = document.querySelector('#check-list');
  const contactList = document.querySelector('#contact-list');
  const addContactBtn = document.querySelector('#add-btn');

  addContactBtn.addEventListener('click', addContact);

  function addContact(e) {
    e.preventDefault();
    if (!nameElement.value || !phoneElement.value || !categoryElement.value) {
      return;
    }

    const contact = {
      name: nameElement.value,
      phone: phoneElement.value,
      category: categoryElement.value
    };

    const mainContainer = createElement('li', null, [], null, checkList);
    const contactWrapper = createElement('article', null, [], null, mainContainer);
    createElement('p', `name:${contact.name}`, [], null, contactWrapper);
    createElement('p', `phone:${contact.phone}`, [], null, contactWrapper);
    createElement('p', `category:${contact.category}`, [], null, contactWrapper);
    const buttonContainer = createElement('div', null, ['buttons'], null, mainContainer);
    const editBtn = createElement('button', null, ['edit-btn'], null, buttonContainer);
    const saveBtn = createElement('button', null, ['save-btn'], null, buttonContainer);

    formElement.reset();

    editBtn.addEventListener('click', () =>{
      nameElement.value = contact.name;
      phoneElement.value = contact.phone;
      categoryElement.value = contact.category;
      mainContainer.remove();
    })

    saveBtn.addEventListener('click', () =>{
      contactList.appendChild(mainContainer);
      buttonContainer.remove();
      const deleteBtn = createElement('button', null, ['del-btn'], null, mainContainer);
      deleteBtn.addEventListener('click', () => {
        mainContainer.remove();
      })

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
  