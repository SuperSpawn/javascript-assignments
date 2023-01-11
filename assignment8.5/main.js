

function swapObjects(obj) {
    let newObj = new Object();
    for(const property in obj) {
        newObj[obj[property]] = property;
    }
    
    return newObj;
}

let object = {
    a: 10,
    b: 11
}

swapObjects(object);


