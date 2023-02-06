
let seconds = 0;
let minutes = 0;
let hours = 0;

const hourBar = document.querySelector('#hours');
const minutesBar = document.querySelector('#minutes');
const secondsBar = document.querySelector('#seconds');

setInterval(incrementSeconds, 1000);
setInterval(incrementMinutes, 60000);
setInterval(incrementHours, 3600000);

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


