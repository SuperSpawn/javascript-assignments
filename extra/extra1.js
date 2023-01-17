

let object1 = {
    name: "ELad"
};
let object2 = {
    name: "Ron"
};
let object3 = {
    name: "Benny"
};

let myMap = new Map();

myMap.set(object1, 1);
myMap.set(object2, 2);
myMap.set(object3, 3);

for(const i of myMap) {
    console.log(`name: ${i[0].name}, id: ${i[1]}`);
}












