



function doubleValues(array) {
    return array.map(function(v) { return 2 * v; });
}

function onlyEvenValues(array) {
    let result = [];
    array.forEach(function(v) { 
        if(v %2 === 0) result.push(v);
    });
    
    return result;
}

function showFirstAndLast(array) {
    let result = [];
    let first;
    let last;
    array.forEach(function(v) {
        if(typeof v === 'string') {
            last = v;
            if(first === undefined) first = v;
        }
    });
    result.push(first);
    result.push(last);
    return result;
}
function vowelCount(string) {
    let result = new Object();
    result['a'] = 0;
    result['e'] = 0;
    result['i'] = 0;
    result['o'] = 0;
    result['u'] = 0;
    string.toLowerCase().forEach(function(v) {
        switch(v) {
            case 'a': result['a']++;    break;
            case 'e': result['e']++;    break;
            case 'i': result['i']++;    break;
            case 'o': result['o']++;    break;
            case 'u': result['u']++;    break;
        }
    });
    return result;
}

function capitalize(string) {
    string.forEach(function(v) {
        v = v.toUpperCase();
    });
    return string;
}

function shiftLetters(string) {
    let result = string.split('');
    result = result.map(function (v) {
        switch (v) {
            case 'a': return 'b';
            case 'b': return 'c';
            case 'c': return 'd';
            case 'd': return 'e';
            case 'e': return 'f';
            case 'f': return 'g';
            case 'g': return 'h';
            case 'h': return 'i';
            case 'i': return 'j';
            case 'j': return 'k';
            case 'k': return 'l';
            case 'l': return 'm';
            case 'm': return 'n';
            case 'n': return 'o';
            case 'o': return 'p';
            case 'p': return 'q';
            case 'q': return 'r';
            case 'r': return 's';
            case 's': return 't';
            case 't': return 'u';
            case 'u': return 'v';
            case 'v': return 'w';
            case 'w': return 'x';
            case 'x': return 'y';
            case 'y': return 'z';
            case 'z': return 'a';
        }
    });
    return result.join('');
}

function swapCase(str) {
    let result = str.split(' ');
    result = result.forEach(function (v, idx) {
        if(idx %2 === 0) return capitalize(v);
        else return v;
    });
    result = result.join(' ');
}

//console.log(onlyEvenValues([1,2,3,4,5,6]));
console.log(shiftLetters("Hello"));