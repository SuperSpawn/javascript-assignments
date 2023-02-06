const storm = {
    // add code here
    superPower: 'photographic memory',
    printSuper() {
        printSuperPower();
    }
}
function printSuperPower() {
    console.log("my superpower is " + this.superPower);
}

storm.printSuper();

