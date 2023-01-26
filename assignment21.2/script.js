
const body = document.body;
const incButton = body.querySelector('.inc');
const decButton = body.querySelector('.dec');
const paragraph = body.querySelector('p');

let fontSize = 16;

incButton.addEventListener('click', function(e) {
    if(fontSize < 100) ++fontSize;
    paragraph.style.fontSize = `${fontSize}px`;
});
decButton.addEventListener('click', function(e) {
    if(fontSize > 6) --fontSize;
    paragraph.style.fontSize = `${fontSize}px`;
});



