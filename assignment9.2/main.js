function arrayOfLengths(array) {
    let lengths = new Object();
    let i = 0;
    //for(i in array) {
    //    lengths[i] = array[i].length;
    //}
    while(i < array.length) {
        lengths[i] = array[i++].length;
    }
    

    return lengths;
}

console.log(arrayOfLengths(["boo", "doooo", "hoo", "ro"]));

