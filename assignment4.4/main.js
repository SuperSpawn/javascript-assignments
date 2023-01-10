

function printNumbers(n) {
    let i;
    for (i = 1; i <= n; ++i) {
        if(i % 7 != 0)
            console.log(i);
        else if(i.toString().includes(7) == false)
            console.log('BOOM');
        else
            console.log('BOOM-BOOM');
    }
}

printNumbers(18);
