
const input = document.querySelector('input');;
const button = document.querySelector('button'); 
let value;

input.addEventListener('input', function(event) {
    value = event.target.value;
    if(value > 18)
        button.textContent = 'You can enter';
    else 
        button.textContent = 'Too young';
});





