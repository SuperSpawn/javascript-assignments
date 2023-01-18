


var b = 1;
function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;
    return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);



/*
    first block:
        we call someFunction and give it value of 9
        that function assigns b value of 5 and return the method (not the value)
        now firstResult hold the method otherFunction

    second block:
        we call firstResult (which is actually otherFunction) and return the value of b
        (which is 5) and assign it to result 
*/



var a = 1;
function b2() {
    a = 10;
    return;
    function a() { }
}
b2();
console.log(a);


/*
    output: 1
    because b2 tries to assign 10 to the local function a with no success and
    doesn't effect the value of the global a
    the console.log prints the unaltered value of a which is 1
*/












let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}

/*
    the for loop  call setTimeout 3 times
    which will execute the function log 3 times after 100ms
    the foor lop would already be ove (because looping 3 times takes lees than 1ms on 
        my gaming rig) thus the value of i would be 3 so log would print 3, 3 times
*/


