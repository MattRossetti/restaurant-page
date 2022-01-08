import { showHome } from './show-home.js'
import { showFood } from './show-food.js'
import { showDrinks } from './show-drinks'

const returnAllButtons = () => {
    const homeButton = document.getElementById('home-button');
    const foodButton = document.getElementById('food-button');
    const drinkButton = document.getElementById('drink-button');
    const allButtons = [homeButton, foodButton, drinkButton];
    return allButtons;
}

const removeContent = () => {
    const content = document.getElementById('content')
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

const removeClickedFromAll = (allButtons) => {
    allButtons.forEach((button) => button.classList.remove('clicked-button'));
}

const handleButtonClicks = (e) => {
    if (e.target.classList.contains('clicked')) return;
    removeClickedFromAll(returnAllButtons());
    e.target.classList.add('clicked-button');
}

const addButtonEventListeners = (allButtons) => {
    allButtons.forEach((button) => {
        button.addEventListener('click', handleButtonClicks)
    })
}

const handleHomeButtonClick = () => {
    removeContent();
    showHome();
}

const handleFoodButtonClick = () => {
    removeContent();
    showFood();
}

const handleDrinkButtonClick = () => {
    removeContent();
    showDrinks();
}

const createPageButtonEventListeners = (allButtons) => {
    allButtons[0].addEventListener('click', handleHomeButtonClick);
    allButtons[1].addEventListener('click', handleFoodButtonClick);
    allButtons[2].addEventListener('click', handleDrinkButtonClick);
}



export { returnAllButtons, addButtonEventListeners, createPageButtonEventListeners }