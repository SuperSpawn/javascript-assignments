

const numbers = [1, -5, 666, 2, 400, 11];


console.log(`Ascending: ${numbers.sort(function (a, b) { 
    return a - b;   
})}`);

console.log(`Descending: ${numbers.sort(function (a, b) { 
    return b - a;   
})}`);


