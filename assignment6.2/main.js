



const people = ["Greg", "Mary", "Devon", "James"];

function printArray(people) {
    let i;
    for(i in people) {
        console.log(people[i]);
    }
}

function removeName(people, name) {
    let index = people.indexOf(name);
    if(index !== -1){
        people.splice(index, 1);
    }
}

function addNameToEnd(people, name) {
    people.push(name);
}
function addNameToStart(people, name) {
    people.unshift(name);
}

function iterateUntil(people, name) {
    let i;
    for(i in people) {
        console.log(people[i]);
        if(people[i] === name) {
            return i;
        }
    }
    return i;
}

function copyArrayAfterName(people, name) {
    let index = people.indexOf(name) + 1;
    let newArray = new Object(people);
    newArray.splice(0, index);
    return newArray;
}

function clearArray(people) {
    people.splice(0,people.length);
}

removeName(people, "Greg");
removeName(people, "James");

addNameToStart(people, "Matt");
addNameToEnd(people, "Taltal");

iterateUntil(people, "Mary");   //  functions are nice

//printArray(copyArrayAfterName(people, "Mary"));

console.log('.');
console.log('.');
console.log('.');
console.log('.');

people.indexOf(people, "Mary");
people.indexOf(people, "Foo");

printArray(people);

console.log('.');
console.log('.');
console.log('.');
console.log('.');

//people = ["Greg", "Mary", "Devon", "James"];
clearArray(people);
people.push("Greg", "Mary", "Devon", "James");


let index = people.indexOf(people, "Devon");
people.splice(index - 1, 1);
people.splice(index, 0, "Elizabeth");
people.splice(index, 0, "Artie");

printArray(people);

let withBob = copyArrayAfterName(people, "Bob");    //this should give a copy of the entire array since Bob isn't in the array the copying will start
                                                    // from the beginning to the end
withBob.push("Bob");
console.log('.');
console.log('.');
console.log('.');
console.log('.');

printArray(withBob);

