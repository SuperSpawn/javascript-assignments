


let mode = 0;

const button = document.querySelector('.lightbulb');
button.addEventListener('click', function(e) {
    if(mode == 0) {
        button.classList.remove('off');
        button.classList.add('on');
        mode = 1;
    }
    else {
        button.classList.remove('on');
        button.classList.add('off');
        mode = 0;
    }
});



