
const title = document.getElementById('main-title');
title.textContent = 'JavaScript DOM Manipulation in Action!';

const description = document.getElementById('description');
description.style.color = 'blue';
description.style.fontSize = '1.2rem';

const button = document.getElementById('action-button');
const dynamicContent = document.getElementById('dynamic-content');

button.addEventListener('click', () => {
    if (dynamicContent.innerHTML === '') {
        const newElement = document.createElement('p');
        newElement.textContent = 'You just added this element dynamically!';
        newElement.style.color = 'green';
        dynamicContent.appendChild(newElement);
    } else {
        dynamicContent.innerHTML = '';
    }
});