

let array = [10, 4, 5, 7, 2, 0, 99];

function max(array) {
    return array.reduce(function(total, currentValue) {
        return Math.max(total, currentValue);
    });
}
function sumOfEvenNumbers(array) {
    return array.reduce(function(total, currentValue) {
        if(currentValue % 2 === 0) return total + currentValue;
        else return total;
    });
}
function average(array) {
    return (array.reduce(function(total, currentValue) {
        return total + currentValue;
    }) / array.length);
}

