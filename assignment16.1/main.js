

function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
        return 2;
    }
}
funcA();

/*
    first output is: undefined
    because the var a is declared before the output (because of hoisting), 
        but the var exists before that (to fix this: move var to before the console.log)
    the second output is: 2
    because functions are hoisted and can be used before declared in the code
*/


var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

/*
    first output is: 'Aurelio De Rosa' because we are simply accessing an object method
    second output is: 'Aurelio De Rosa' because we are assigning a function to a var 
        and calling the var as a function
*/






function funcB() {
    let a = b = 0;
    a++;
    return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);

/*There wouldn't be out there would be error
    because the vatiables refrenced don't exist out of scope of function
    how to fix: if we change the vatiables type to var then we can refrence them outside
*/







function funcC() {
    console.log("1");
}
funcC();
function funcC() {
    console.log("2");
}
funcC();


/* 
    first output: "1"
    second output: "2"
    reason: on the first call the function is defined to print 1 after that the function is 
        overridden by the second definition thus the function is defined to print 2
*/











function funcD1() {
    d = 1;
}
funcD1();
console.log(d);
function funcD2() {
    var e = 1;
}
funcD2();
console.log(e);



/*
    funcD1 doesn't define 'd' and doesn't return anything
    because 'd' isn't defined then trying to print d would result in error
    to fix this: declare 'd' as a var so we can access it after the function

    second output: 1
    e is a var thus can be accessed outside the function it is declared in
    e wwas defined as 1 so when we print e we get 1
*/
















function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();


/*
    first output is 'undefined' because f is a var thus defined at begining of program 
    but does not have a value 
    the second input (called by funcE) is 1 because f is assigned a vlaue by then 
*/



















