const accessKey = 'Kw_BmOOlg4gdPax5vX45B79YPsE4kRScQBi2_ZdtVoY';
const categoryBtns = document.querySelectorAll('.category-btn');
const imagesContainer = document.querySelector('.images-container');

let inputData = "";
let page = 1;

async function searchImages() {
    inputData = categoryBtns.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
        alert('Sorry, there was an error!');
    }
    
}

categoryBtns.forEach((btn) => btn.addEventListener('click', searchImages));
