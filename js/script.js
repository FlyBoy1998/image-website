import {accessKey} from "./access-key.js";

const categoryBtns = document.querySelectorAll('.category-btn');
const imagesContainer = document.querySelector('.images-container');

let inputData = "";
let page = 0;
let results = [];

async function searchImages() {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        results = data.results;
        results.forEach((result) => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card shadow');
            const image = document.createElement('img');
            image.setAttribute('src', `${result.urls.regular}`);
            image.setAttribute('alt', `${result.alt_description}`);
            image.setAttribute('class', 'card-image-top');
            const cardBody = document.createElement('div');
            cardBody.setAttribute('class', 'card-body');
            const imageDescription = document.createElement('p');
            imageDescription.setAttribute('class', 'text-primary text-center');
            imageDescription.textContent = result.alt_description;

            cardBody.appendChild(imageDescription);
            card.append(image, cardBody);
            imagesContainer.appendChild(card);
        })  
    } catch (error) {
        console.log(error);
        alert('Sorry, there was an error!');
    }
    
}

categoryBtns.forEach((btn) => btn.addEventListener('click', () => {
    inputData = btn.value;
    page = Math.floor(Math.random() * 100);
    searchImages();
}));
