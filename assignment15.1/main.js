



function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
        sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
        sum += arr2[i];
    }
}

/*
    1. error at line: 8
    2. running the code
    3. console.log
        -trying to change a const variable
        -not seperating the 2 arrays with , upon callling function
    4. here

*/