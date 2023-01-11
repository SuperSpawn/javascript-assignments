

function arrayWithoutDuplicates(array) {
    let result = new Array();
    let i;
    for(i in array) {
        if(result.indexOf(array[i]) === -1) {
            result.push(array[i]);
        }
    }
    return result;
}


let array = [10, 10, 3,3,3, 2, 2];

console.log(arrayWithoutDuplicates(array));



