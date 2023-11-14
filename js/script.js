import {accessKey} from "./access-key.js";

const categoryBtns = document.querySelectorAll('.category-btn');
const imagesContainer = document.querySelector('.images-container');

let inputData = "";
let page = 1;
let results = [];

async function searchImages() {
    inputData = categoryBtns.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        results = data.results;
        console.log(results);
        results.forEach((result) => {
            const {alt_description, urls:{regular: imageLink}} = result;
            console.log(alt_description, imageLink);
        })
        
    } catch (error) {
        console.log(error);
        alert('Sorry, there was an error!');
    }
    
}

categoryBtns.forEach((btn) => btn.addEventListener('click', searchImages));
