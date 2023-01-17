

let object = {

}


let map = new Map();

const maxCount = 1000000;
console.time('My Operation');

for(let i = 0; i < maxCount; i++) {
    object[i] = 2 + i;
}

console.timeEnd("My Operation");

console.time('My Operation2');

for(let i = 0; i < maxCount; i++) {
    map.set(i, i + 2);
}

console.timeEnd("My Operation2");

console.time('My Operation3');

object[400];

console.timeEnd('My Operation3');


console.time('My Operation4');

map.get(400);

console.timeEnd('My Operation4');

