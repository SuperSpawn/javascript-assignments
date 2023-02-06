const wonderWoman = {
    name: "Diana Prince"
}
const batman = {
    name: "Bruce Wayne"
}
const superHeroes = [wonderWoman, batman];

function printName() {
    console.log(`my name is ${this.name}`);
}


function printHeroes(heroes, printFunc) {
    for(let i of heroes) {
        let boundHero = printFunc.bind(i);
        boundHero();
    }
}

printHeroes(superHeroes, printName);
