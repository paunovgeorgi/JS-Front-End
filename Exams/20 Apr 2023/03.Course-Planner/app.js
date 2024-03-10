
    const loadCoursesBtn = document.querySelector('#load-course');
    const addCourseBtn = document.querySelector('#add-course');
    const editCourseBtn = document.querySelector('#edit-course');
    const coursesList = document.querySelector('#list');
    loadCoursesBtn.addEventListener('click', loadCourses);
    addCourseBtn.addEventListener('click', addCourse);
    editCourseBtn.addEventListener('click', editCourse);

    let currentCourseId = '';

    async function editCourse(e) {
        e.preventDefault();
        const type = inputSelectors.type.value;
        if (!courseTypes.includes(type)) {
            return;   
        }

        const course = {
            // _id: currentCourseId,
            title: inputSelectors.name.value,
            type: inputSelectors.type.value,
            description: inputSelectors.description.value,
            teacher: inputSelectors.teacher.value   
        };

        await fetch(`http://localhost:3030/jsonstore/tasks/${currentCourseId}`, {
            method: 'PUT',
            body: JSON.stringify(course),   
        });

        clearForm();

        await loadCourses();

        addCourseBtn.disabled = false;
        editCourseBtn.disabled = true;

    }

    const inputSelectors = {
        name: document.querySelector('#course-name'),
        type: document.querySelector('#course-type'),
        description: document.querySelector('#description'),
        teacher: document.querySelector('#teacher-name')    
    };

    const courseTypes = [
        'Long',
        'Medium',
        'Short'
    ];

    async function addCourse(e) {

        e.preventDefault();
        const type = inputSelectors.type.value;
        if (!courseTypes.includes(type)) {
            return;   
        }

        const course = {
            title: inputSelectors.name.value,
            type: inputSelectors.type.value,
            description: inputSelectors.description.value,
            teacher: inputSelectors.teacher.value   
        };

        await fetch("http://localhost:3030/jsonstore/tasks/", {
            method: 'POST',
            body: JSON.stringify(course),
        } );

        clearForm();
        
        await loadCourses();

    }

   async function loadCourses() {

        coursesList.innerHTML = '';
       const response = await fetch("http://localhost:3030/jsonstore/tasks/");
       const courses = await response.json();

       const coursesFragment = document.createDocumentFragment();

       Object.values(courses).forEach((course) => {

        //  const currentCourse = {
        //    id: course._id,
        //    title: course.title,
        //    description: course.description,
        //    teacher: course.teacher,
        //    type: course.type,
        //  };

        const id = course._id;

         const container = createElement('div', null, ['container'], null, coursesFragment);
         createElement('h2', course.title, [], null, container);
         createElement('h3', course.teacher, [], null, container);
         createElement('h3', course.type, [], null, container);
         createElement('h4', course.description, [], null, container);
         const editBtn = createElement('button', 'Edit Course', ['edit-btn'], null, container);
         const finishBtn = createElement('button', 'Finish Course', ['finish-btn'], null, container);

         container.setAttribute('data-course-id', id);

         editBtn.addEventListener('click', removeRecord);
         finishBtn.addEventListener('click', deleteCourse);

         function removeRecord(e) {
            container.remove();
            inputSelectors.name.value = course.title;
            inputSelectors.type.value = course.type;
            inputSelectors.description.value = course.description;
            inputSelectors.teacher.value = course.teacher;
            addCourseBtn.disabled = true;
            editCourseBtn.disabled = false;
            currentCourseId = id;
         }

         async function deleteCourse() {
            // container.remove();
            await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
                method: 'DELETE',
            });

           await loadCourses();
         }

       });

       coursesList.appendChild(coursesFragment);
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

    function clearForm() {
        inputSelectors.name.value = '';
        inputSelectors.type.value = '';
        inputSelectors.description.value = '';
        inputSelectors.teacher.value = '';
    }



    function solve(number1, number2) {
        function calcFactorial(number) {
          let result = 1;
          while (number > 1) {
            result *= number;
            number--;
          }
          return result;
        }
      
        console.log((calcFactorial(number1) / calcFactorial(number2)).toFixed(2));
      }