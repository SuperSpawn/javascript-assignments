
function percentageOfWorld1(population) {
    let percentage = population / 7900;
    percentage *= 100;
    return percentage;
}

const percentageOfWorld12 = function (population) {
    return (population / 7900) * 100;
}

let morroco = percentageOfWorld1(37.08);
let syria = percentageOfWorld1(21.32);
let lebanon = percentageOfWorld1(5.593);

console.log(`Morroco has 37.08 million people, so its about ${morroco}% of the world population}`);
console.log(`Syria has 21.32 million people, so its about ${syria}% of the world population}`);
console.log(`Lebanon has 5.593 million people, so its about ${lebanon}% of the world population}`);

percentageOfWorld2(37.08);
percentageOfWorld2(21.32);
percentageOfWorld2(5.593);





