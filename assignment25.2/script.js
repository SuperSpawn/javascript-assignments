
let obj = {
    name: "Talal",
    printName() {
        console.log(this.name);
    },
    printNameDelayed() {
        let delay = this.printName.bind(this);
        setTimeout(delay, 1000);
    }
};

obj.printName();
obj.printNameDelayed();



