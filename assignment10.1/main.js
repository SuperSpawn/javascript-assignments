

function printString(string) {
    console.log(string);
}

function isString(string, callback) {
    if(typeof string == "string")  
        callback(string);
    else console.log("not a string");
}

function createDash(string) {
    for(let i = 0; i < string.length; ++i) {
        if(string[i] == ' ') string[i] = '-';
    }
    return string;
}

function myFunction(string, callback) {
    let result;
    result = callback(string);
    if(result == undefined) console.log("This is a lame function");
    else console.log("This is an awesome function");
}


function firstWordUpperCase(string, callback) {
    string = string.charAt(0).toUpperCase() + string.slice(1);
    callback(string);
}


isString("Hello world!", printString);
firstWordUpperCase("hello world!", printString);



