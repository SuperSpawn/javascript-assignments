

const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];
    

for(let i in listOfNeighbours){
    for (let j in listOfNeighbours[i]){
        console.log(`Neighbor: ${listOfNeighbours[i][j]}`);
    }
}

