


function createSteps(number) {
    let string = new String();
    string = '';

    for(let i = 1; i <= number; ++i) {
        string = '';
        for(let j = 0; j < i; ++j) {
            string += '#';
        }
        for(let k = i; k < number; ++k) {
            string += ' ';
        } 
        console.log(string);
    }
}

createSteps(3);

