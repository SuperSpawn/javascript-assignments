

function getCurrentDate() {
    let date = new Date();
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `Today is ${weekDays[date.getDay()]} the ${date.getDate()} of ${months[date.getMonth()]} ${date.getFullYear()}`;
}

console.log(getCurrentDate());