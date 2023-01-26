


const h3 = document.querySelector('h3');
h3.style.display = 'none';
h3.style.color = '#ff0000';

const textArea = document.querySelector('textarea');
const button = document.querySelector('button');

let length = 0;


textArea.addEventListener('input', function(e) {
    length = textArea.value.length;
});

button.addEventListener('click', function(e) {
    if(length < 100) {
        h3.style.display = 'contents';
    }
    else {
        h3.style.display = 'none';
    }
});







