window.addEventListener("load", solve);

function solve() {
    
    const inputSelectors = {
      student: document.querySelector('#student'),
      university: document.querySelector('#university'),
      score: document.querySelector('#score')
    };

    const nextBtn = document.querySelector('#next-btn');
    const previewList = document.querySelector('#preview-list');
    const candidatesList = document.querySelector('#candidates-list');

    nextBtn.addEventListener('click', addInfo);

    function addInfo(e) {
      if (Object.values(inputSelectors).some(selector=> selector.value === '')) {
        return;
      }

      const currentInfo = {
        name: inputSelectors.student.value,
        university: inputSelectors.university.value,
        score: inputSelectors.score.value
      };

      const li = createElement('li', null, ['application'], null, previewList);
      const article = createElement('article', null, [], null, li);
      createElement('h4', currentInfo.name, [], null, article);
      createElement('p', `University: ${currentInfo.university}`, [], null, article);
      createElement('p', `Score: ${currentInfo.score}`, [], null, article);
      const editBtn = createElement('button', 'edit', ['action-btn', 'edit'], null, li);
      const applyBtn = createElement('button', 'apply', ['action-btn', 'apply'], null, li);

      clearForm(inputSelectors, nextBtn);

      editBtn.addEventListener('click', editInfo);
      applyBtn.addEventListener('click', applyInfo);

      function editInfo(e) {
        inputSelectors.student.value = currentInfo.name;
        inputSelectors.university.value = currentInfo.university;
        inputSelectors.score.value = currentInfo.score
        li.remove();
        nextBtn.disabled = false;
      };

      function applyInfo(e) {
        candidatesList.appendChild(li);
        removeAndDisable(editBtn, applyBtn, nextBtn);
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

  function clearForm(form, btn) {
    Object.values(form).forEach(field => field.value = '');
    btn.disabled = true;
  }

  function removeAndDisable(remove1, remove2, disable) {
    remove1.remove();
    remove2.remove();
    disable.disabled = false;
  }

  }