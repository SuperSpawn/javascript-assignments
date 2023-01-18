function countOccurrences (str, char){
    let counter = 0;
    for (let i = 0; i < str.length; i++){
        if (str.charAt(i) === char)
            counter++;
    } 
    return counter;
}
console.log(countOccurrences ( "ini mini miny moe" , "n" ));


/*
    1. line 5
    2. console.log
    3. firstly, we do not increment the counter thus the value stays the same
        secondly, the code is messy and not understandable


*/


