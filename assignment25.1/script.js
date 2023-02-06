
const hero = {
    health: 5,
    power: 68,
    getStrength: function() {
        if (this.health <= 5) {
            return this.power - 10;
        }    
        else return this.power;
    }
}
function whoIsStronger(getStrength){
    const myStrength = 82;
    if (getStrength() < myStrength){
        return "I am stronger";
    } else return "You are stronger";
}

let strongest = whoIsStronger.bind(hero, hero.getStrength);
console.log(strongest());


/*
 Whats wrong with the code?
    the function whoIsStronger recieves a loosely bound reference to the function which does not have the same this pointer as the hero objecct    




*/