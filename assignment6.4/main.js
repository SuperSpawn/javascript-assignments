

let populations = [37.08,21.32,5.593,43.53];

function percentageOfWorld1(population) {
    let percentage = population / 7900;
    percentage *= 100;
    return percentage;
}


function populationPercentages(population) {
    let percentages = new Object();
    let i;
    for(i in population) {
        percentages[i] = percentageOfWorld1(population[i]);
    }
    return percentages;
} 






