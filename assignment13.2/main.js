

const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];


console.log(`Ascending order: ${foods.sort()}`);

//decending
foods.sort();
console.log(`Descending order: ${foods.reverse()}`);

const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];

foodsWithUpperCase.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});

console.log(`Ascending order: ${foodsWithUpperCase}`);



foodsWithUpperCase.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});
console.log(`Descending order: ${foodsWithUpperCase.reverse()}`);





const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

words.sort(function (a, b) {
    return a.length - b.length;
});

console.log(`by length: ${words}`);

