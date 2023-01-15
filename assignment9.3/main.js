const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];


function returnSharedElements(food,food1) {
    let result = new Object();
    for(let i = 0; i < food.length; i++) {
        for(let j = 0; j < food1.length; j++) {
            if(food[i] == food1[j]) result.push(food[i]);
        }
    }
    return result;
}


