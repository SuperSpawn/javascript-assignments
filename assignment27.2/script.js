


function makeAllCaps(array) {
    return new Promise(function(resolve, reject) {
        if(array.every( (v) => typeof v === 'string')) resolve();
        else reject();
    });
}
function sortWords(array) {
    return new Promise(function(resolve, reject) {
        if(array.every( (v) => typeof v === 'string')) resolve();
        else reject();
    });
}


let array1 = ['hello', 'world', 'of', 'warcraft'];
let array2 = ['hello', 'world',  42];

makeAllCaps(array1)
.then(function() {
    for(let i in array1) {
        array1[i] = array1[i].toUpperCase();
    }
    sortWords(array1).then(function() {
        array1.sort();
        console.log(array1);
    })
    
})
.catch(function() {
    console.log('Error: not all elements are string');
})

makeAllCaps(array2)
.then(function() {
    for(let i in array2) {
        array2[i] = array2[i].toUpperCase();
    }
    sortWords(array2).then(function() {
        array2.sort();
        console.log(array2);
    })
    
})
.catch(function() {
    console.log('Error: not all elements are string');
})






