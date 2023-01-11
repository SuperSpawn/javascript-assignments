

// <3
function findYou(string) {
    let split = string.split('');
    split.reverse();
    let result = split.join('').indexOf("uoy");
    result = string.length - result - 3;                
    return result;
}


const string = "The more you know, the more you know that you don't know";

console.log(findYou(string));
