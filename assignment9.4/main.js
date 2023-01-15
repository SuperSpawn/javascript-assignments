


function createSteps(number) {
    let string = new String();
    for(let i = 1; i <= number; ++i) {
        string = '';
        for(let j = 1; j <= i; ++j) string += '#';
        console.log(string);
    }
}

createSteps(3);

