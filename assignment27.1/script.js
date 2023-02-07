

function promiseGreaterThan10(number) {
    return new Promise(function(resolve, reject) {
        if(number > 10) resolve();
        else reject();
    });
}

promiseGreaterThan10(7).then(function() {
    console.log('Greater than 10');
}).catch(function() {
    console.log('Less than 10');
});




