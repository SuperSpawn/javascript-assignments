
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('.smiles');

let numberOfSmiles = 0;

button.addEventListener('click', function(event) {
    clearSmiles();
    numberOfSmiles = input.value;
    if(isNaN(numberOfSmiles)) {
        numberOfSmiles = 0;
        alert('Please enter a number');
    }
    generateSmiles();
});

function clearSmiles() {
    list.innerHTML = '';
}

function generateSmiles() {
    for(let i = 0; i < numberOfSmiles; ++i) {
        let smiley = document.createElement('img');
        smiley.classList.add('smile');
        smiley.src = './smile.png';
        list.appendChild(smiley);
    }
}

