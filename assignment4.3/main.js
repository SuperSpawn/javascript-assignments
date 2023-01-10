

let teamScored = new Object();
let teamAverages = new Object();

teamScored['Mike'] = [116, 94, 123];
teamScored['John'] = [89, 129, 103];
teamScored['Mary'] = [97, 134, 105];

function calculateAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

teamAverages['Mike'] = calculateAverage(teamScored['Mike']);
teamAverages['John'] = calculateAverage(teamScored['John']);
teamAverages['Mary'] = calculateAverage(teamScored['Mary']);

let winner;
let winnerName;



if(teamAverages['Mike'] > teamAverages['John']) {
    winner = teamAverages['Mike'];
    winnerName = 'Mike';
}
else {
    winner = teamAverages['John'];
    winnerName = 'John';
}
if(winner < teamAverages['Mary']) {
    winner = teamAverages['Mary'];
    winnerName = 'Mary';
}
else if(winner == teamAverages['Mary']) {
    console.log("It's a draw!");
}
else {
    console.log(`The winner is ${winnerName} with an average if ${winner}`);
}


