
const playerOneRace = document.querySelector('#player1-race');
const playerTwoRace = document.querySelector('#player2-race');

let playerOnePosition = document.querySelector('.racer-table #player1-race .active');
let playerTwoPosition = document.querySelector('.racer-table #player2-race .active');

const playerOneFinish = document.querySelector('#player1-race .finish');
const playerTwoFinish = document.querySelector('#player2-race .finish');

function InitRaceOne() {
    let children = playerOneRace.children;
    let i;
    for(i = 0; i < children.length; i++) {

    }
}
function InitRaceTwo() {

}


function movePlayerOne() {
    if(playerOnePosition == playerOneFinish) {
        return;
    }
    playerOnePosition.classList.remove('active');
    playerOnePosition = playerOnePosition.nextSibling;
    playerOnePosition.classList.add('active');
}   
function movePlayerTwo() {
    if(playerTwoPosition == playerTwoFinish) {
        return;
    }
    playerTwoPosition.classList.remove('active');
    playerTwoPosition = playerTwoPosition.nextSibling;
    playerTwoPosition.classList.add('active');
}

document.body.addEventListener('keypress', function (e) {
    if(e.key == 'w') {
        movePlayerOne();
    }
    if(e.key == 's') {
        movePlayerTwo();
    }
});