

const object = {
    age: 20,
    number: 100,
    favoriteNumber: 42 
}

let array = new Array(100);
array.fill(0,0, 100);

let array2 = Array.from(Array(100).keys(), (e, i) => i+1);

console.log(array2);

let objectToArray = Object.keys(object);
console.log(objectToArray);

Object.assign(object, objectToArray);
console.log(object);


console.log(Array.isArray(object));
console.log(Array.isArray(objectToArray));


let deepCopy = [...array];  // doesnt change the original array

let copy = array;


