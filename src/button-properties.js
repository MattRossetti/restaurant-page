
const returnAllButtons = () => {
    const foodButton = document.getElementById('food-button');
    const homeButton = document.getElementById('home-button');
    const drinkButton = document.getElementById('drink-button');
    const allButtons = [foodButton, homeButton, drinkButton];
    return allButtons;
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

export { returnAllButtons, addButtonEventListeners }