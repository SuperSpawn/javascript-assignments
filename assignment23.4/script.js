


let seconds = 0;
let minutes = 0;
let hours = 0;

let secondID;
let minuteID;
let hourID;


const hourBar = document.querySelector('#hours');
const minutesBar = document.querySelector('#minutes');
const secondsBar = document.querySelector('#seconds');

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

startButton.addEventListener('click', function (e) {
    secondID = setInterval(incrementSeconds, 1000);
    minuteID = setInterval(incrementMinutes, 60000);
    hourID = setInterval(incrementHours, 3600000);
});
stopButton.addEventListener('click', function (e) {
    clearInterval(secondID);
    clearInterval(minuteID);
    clearInterval(hourID);
});
resetButton.addEventListener('click', function (e) {
    seconds = 0;
    minutes = 0;
    hours = 0; 

    secondsBar.innerHTML = seconds;
    minutesBar.innerHTML = minutes;
    hourBar.innerHTML = hours;
});



function incrementSeconds() {
    ++seconds;
    seconds  = seconds % 60;
    secondsBar.innerHTML = seconds;
}
function incrementMinutes() {
    ++minutes;
    minutes = minutes % 60;
    minutesBar.innerHTML = minutes;
}
function incrementHours() {
    ++hours;
    hours = hours % 24;
    hourBar.innerHTML = hours;
}


