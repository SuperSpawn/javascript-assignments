
function Pokemon(pokemonName, pokemonType, pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function() {
    console.log(`I choose you ${this.name}`);
}
Pokemon.prototype.attack = function(number) {
    console.log(`${this.name} used ${this.attackList[number]}`);
}


let talal = new Pokemon("Talal", "Human", ["eat", "sleep", "program"]);
let prince = new Pokemon("prince", "cat", ["meow", "scratch", "run"]);
let fish = new Pokemon("fish", "fish", ["observe", "swim", "drink water"]);

talal.callPokemon();
talal.attack(1);

prince.callPokemon();
prince.attack(0);

fish.callPokemon();
fish.attack(2);




