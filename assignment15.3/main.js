function getSumOfEven(arr){
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));



/*
    1. line 2
    2. console.log
    3.  firstly, array indexes begin at index 0 so the first element in the array has 
            index 0, so the values in even cells have odd index numbers 
        secondly, we btry to access array[10] which is undefined since we have 10 elements 
            and indexes begin at 0 this final index would be 9 (accessing index 10 is illegal) 

*/

