

Array.prototype.myFilter = function(filter) {
    let result = [];
    let j;
    for(j in this) {
        if(filter(this[j])) result.push(this[j]);
    }
    return result;
}
Array.prototype.myFind = function(criteria) {
    let i;
    for(i of this) {
        if(criteria(i)) return i;
    }
    return undefined;
}
Array.prototype.myReduce = function(callback, initialValue) {
    let result = initialValue;
    let i;
    for(i in this) {
        result = callback(result, this[i], i, this);
    }
    return result;
}


let test = [1,2,3,4,5,6,7,8];

console.log(test.myFilter(function(element) {
    return element % 2;
}));





