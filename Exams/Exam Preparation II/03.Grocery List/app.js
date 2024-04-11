const baseURL = "http://localhost:3030/jsonstore/grocery";
let globalID;

const nameElement = document.querySelector('#product');
const countElement = document.querySelector('#count');
const priceElement = document.querySelector('#price');
const tableBody = document.querySelector('#tbody');

const loadProductsBtn = document.querySelector('#load-product');
const addProductsBtn = document.querySelector('#add-product');
const updateProductsBtn = document.querySelector('#update-product');

loadProductsBtn.addEventListener('click', loadProducts);
addProductsBtn.addEventListener('click', addProduct);
updateProductsBtn.addEventListener('click', updateProduct);

async function loadProducts(e) {
    tableBody.innerHTML = '';
    e.preventDefault();
    const products = await (await fetch(baseURL)).json();
    Object.values(products).forEach(p => {
        
        const wrapper = createElement('tr', null, [], null, tableBody);
        createElement('td', p.product, ['name'], null, wrapper);
        createElement('td', p.count, ['count-product'], null, wrapper);
        createElement('td', p.price, ['product-price'], null, wrapper);
        const btnWrapper = createElement('td', null, ['btn'], null, wrapper);
        const updateBtn = createElement('button', 'Update', ['update'], null, btnWrapper);
        const deleteBtn = createElement('button', 'Delete', ['delete'], null, btnWrapper);

        deleteBtn.addEventListener('click', async () => {
            await fetch(`${baseURL}/${p._id}`, {
                method: 'DELETE'
            });
            await loadProducts(e);
        });

        updateBtn.addEventListener('click', () => {
            updateProductsBtn.disabled = false;
            nameElement.value = p.product;
            countElement.value = p.count;
            priceElement.value = p.price;
            globalID = p._id;
            addProductsBtn.disabled = true;
        })
    })
}

async function addProduct(e) {
    e.preventDefault();
    const product = {
        product: nameElement.value,
        count: countElement.value,
        price: priceElement.value
    };

    await fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(product)
    });

    await loadProducts(e);
}

async function updateProduct(e) {
    e.preventDefault();
    addProductsBtn.disabled = false;
    await fetch(`${baseURL}/${globalID}`, {
        method: 'PATCH',
        body: JSON.stringify({product: nameElement.value})
    });
    await fetch(`${baseURL}/${globalID}`, {
        method: 'PATCH',
        body: JSON.stringify({count: countElement.value})
    });
    await fetch(`${baseURL}/${globalID}`, {
        method: 'PATCH',
        body: JSON.stringify({price: priceElement.value})
    });

    await loadProducts(e);
    updateProductsBtn.disabled = true;
}

function createElement(type, textContent, classes, id, parent) {
    const element = document.createElement(type)
    if (textContent) {element.textContent = textContent;}
    if (classes && classes.length > 0) {element.classList.add(...classes);}
    if (id) {element.setAttribute("id", id);}
    if (parent) {parent.appendChild(element);}
    return element;   
  }