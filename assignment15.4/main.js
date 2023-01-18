function calcAverage (arr){
    var sum = 0;
    for (var i = 0 ; i < arr.length; i++ ){
        sum += arr [ i ];
    } 
    return sum / arr.length;
}
console.log(calcAverage ([ 85 , 90 , 92 ]));


/*
    1. 
        -line 2
    2. console.log
    3. firstly, we do not initialize the variable sum with a value of 0 thus we won't 
            get the sum of the elements
        secondly, we do not calculate the average of the elements instead we calculate
            the sum of the elements 
        side note: the code is unclean and messy thus harder to understand
*/

