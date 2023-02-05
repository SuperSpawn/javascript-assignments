

const messages = {};
const goal = getRandomLetter();
const attempts = [];

messages['instruction'] = document.querySelector('.instruction-div');
messages['expired'] = document.querySelector('.expired-input-div');
messages['wrong'] = document.querySelector('.wrong-answer-div');
messages['invalid'] = document.querySelector('.invalid-input-div');
messages['correct'] = document.querySelector('.correct-answer-div');

const attemptBar = document.querySelector('.game-info .previous-attempts');
const resetButton = document.querySelector('.correct-answer-div .retry-button');

function showOnly(message) {
    const arr = Object.values(messages);
    for(let i of arr) {
        i.classList.add('hidden');
    }
    messages[message].classList.remove('hidden');
}

showOnly('instruction');


document.body.addEventListener('keypress', function(e) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let letter = e.key;
    letter = letter.toLowerCase();
    


    if(attempts.includes(letter)) {
        showOnly('expired');
        return;
    }
    if(letter == goal) {
        showOnly('correct');
        attemptBar.innerHTML += `${letter}`;
        return;
    }
    else if(alphabet.includes(letter)) {
        showOnly('wrong');
        attemptBar.innerHTML += `${letter}, `;
    }
    else {
        showOnly('invalid');
        return;
    }

    attempts.push(letter);
});

resetButton.addEventListener('click', function(e) {
    window.location.reload();
});






function getRandomLetter() {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let randIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randIndex];
}






