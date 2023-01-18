function findSmallest(a, b, c){
    if ( Math.min(a, b) > c){
        return c;
    } else if (Math.min(a,c) > b) {
        return b;
    } else {
        return a;
    }
}
console.log(findSmallest(52,66, 2));





/*
    1.
        -line 10
        -line 2
        -line 4
    2. 
        console.log() and trying to run
    3.
        -line 10: typo upon calling function
        -line 2: 'a > b' return logic boolean value so that value is compared with 
            c which isn't what we want so we get a false value
        -line 4: same like line 2 a boolean logic value is compared with a number value
            which would in most cases return a false value
            Also in the case where the chain works correctly the statement return
                max value.

*/
