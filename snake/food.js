import {onSnake, expandSnake} from './input.js'
import { randomGridPosition } from './grid.js';

let food = {x:10, y:1};
const EXPANSION_RATE = 1;

export function update() {
    if(onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
    }
}

export function draw() {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.x;
    foodElement.style.gridColumnStart = food.y;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}




function getRandomFoodPosition() {
    let newFoodPosition;
    while(newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = getRandomFoodPosition();
    }
    return newFoodPosition;
}