


const myCountry = {
    country: 'Syria',
    capital: 'Damascus',
    language: 'Arabic',
    population: 21.32,
    neighbors: ['Lebanon', 'Jordan', 'Israel', 'Turkey', 'Iraq'],
    describe : function() {
        return `${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbors.length} neighbors and a capital called ${this.capital}`
    },
    checkIsland : isIsland = function() {
        return (neighbors.length == 0)? true: false;
    }
}

console.log(myCountry.describe());





