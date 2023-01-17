


const arr = [
    {
        lol: 1
    },
    {
        lol: 7
    },
    {
        lol: 11
    },
    {
        lol: 89
    },

]


function extractOnlyValue(arrayOfObjects, key) {
    return arrayOfObjects.reduce(function(total, current) {
        total.push(current[key]);
        return total;
    }, []);
}

console.log(extractOnlyValue(arr, 'lol'));

function countOnlyVowels(string) {
    const vowels = { a:true, e:true, i:true, o:true, u:true };
    let array = string.split('');   //array of chars
    return array.reduce(function(total, current) {
        if(vowels[current]) {
            if(!total[current]){
                total[current] = 1;
            }
            else {
                total[current]++;
            }
        }
        return total;
    }, []);
}
//
//const dict = {
//    a: true,
//    b: true,
//    c: true
//};
//console.log(dict);
//console.log(dict['r']);
//
//if(dict['r']) {
//    console.log('def');
//}
//else {
//    console.log('undef');
//}
console.log(countOnlyVowels("aeeell"));



function addKeyAndValue(array, key, value) {
    array = array.reduce(function(total, current){
        current[key] = value;
        total.push(current);
        return total;
    }, []);
    return array;
}

console.log(addKeyAndValue(arr, 'hi', 5));



