const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

function getCandy(candyStore, id){
    for(let i in candyStore.candies){
        if(candyStore.candies[i].id == id) return candyStore.candies[i];
    }
    return undefined;
}

function getPrice(candyStore, id) {
    for(let i in candyStore.candies) {
        if(candyStore.candies[i].id == id) return candyStore.candies[i].price;
    }
    return undefined;
}

function addCandy(candyStore, id, name, price) {
    let newCandy = {
        name: name,
        id: id,
        price: price,
        amount: 1
    }
    candyStore.candies.push(newCandy);
}

function buy(candyStore, id) {
    for (let i in candyStore.candies) {
        if(candyStore.candies[i].id === id) {
            if(candyStore.candies[i].amount === 0) return;
            candyStore.cashRegister += candyStore.candies[i].price;
            candyStore.candies[i].amount--;
            return;
        }
    }
}







