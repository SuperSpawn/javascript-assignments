



function arrayOfLengths(array) {
    let lengths = new Object();
    let i;
    for(i in array) {
        lengths[i] = array[i].length;
    }
    return lengths;
}

console.log(arrayOfLengths(["boo", "doooo", "hoo", "ro"]));

