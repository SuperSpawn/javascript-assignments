var x = 10;
console.log(x);
if (true) {
    var x = 20;
    console.log(x);
}
console.log(x);


/*
    first output: we print the outer var x with  initalised  value of 10
    second output: we print the inner variable x with initalised value of 20
    third output: we print the outer variable x with initalised value 10
 */



/*
    BLOCK2:
        first output: we print the outer variable x with initalised value 10
        second output: we declare and run a function that declares a var x
            with value 20 and prints it
        third output: we print the outer variable x with initalised value 10
        
        
*/


/*
    BLOCK3:
        first output: we print the outer variable x with initalised value 10
        second output: inside the function the inner var x with value 20 is printed
        third output: inside the if statement inside the function we print 
            the inner most var x with value 30
        forth output: inside the function we print the value of the inner var x (20)
        fifth output: after the call to the function we print the outer var x (10)
*/

/*
    BLOCK4:
        we define the outer var x with value 10,
        inside the function we define the inner x but not initialise it 
        this when we check x in the function we get undefined value and print undefined 
*/

/* 
    BLOCK5:
        in the function we do not initialize the 2 variables x and y with values
        so we print undefined twice, then we give y the value of 100 and print it
*/

/*
    BLOCK6:
        because of hoisting in the functions are defined first and can be used even before being defined
        thus output would be 'foo' then 'bar'
*/
