



const nameInput = document.querySelector('.form .name input');
const ageInput = document.querySelector('.form .age input');
const emailInput = document.querySelector('.form .email input');

const nameOutput = document.querySelector('.confirm .name p');
const ageOutput = document.querySelector('.confirm .age p');
const emailOutput = document.querySelector('.confirm .email p');

const submitButton = document.querySelector('.form .submit');
const confirmButton = document.querySelector('.confirm .submit');
const changeButton = document.querySelector('.confirm .redo');

const formDiv = document.querySelector('.form');
const confirmDiv = document.querySelector('.confirm');
const doneDiv = document.querySelector('.done');

confirmDiv.classList.add('hidden');
doneDiv.classList.add('hidden');

submitButton.addEventListener('click', function(event) {
    nameOutput.innerText = nameInput.value;
    ageOutput.innerText = ageInput.value;
    emailOutput.innerText = emailInput.value;

    formDiv.classList.add('hidden');
    confirmDiv.classList.remove('hidden');
});
changeButton.addEventListener('click', function(e) {
    formDiv.classList.remove('hidden');
    confirmDiv.classList.add('hidden');    
});
confirmButton.addEventListener('click', function(e) {
    formDiv.classList.add('hidden');
    confirmDiv.classList.add('hidden');
    doneDiv.classList.remove('hidden');
});



