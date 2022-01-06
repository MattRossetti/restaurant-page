import githubIcon from './icons/github-logo.png';

const loadPageSkeleton = () => {
    const container = document.getElementById('container');

    const header = document.createElement('div');
    header.classList.add('header');

    const headerTop = document.createElement('div');
    headerTop.id = 'header-top';
    headerTop.textContent = 'Basement Kitchen'

    const headerBottom = document.createElement('div');
    headerBottom.id = 'header-bottom'

    const homeButton = document.createElement('div');
    homeButton.textContent = 'Home';
    homeButton.id = 'home-button';
    homeButton.classList.add('menu-button');
    homeButton.classList.add('clicked-button');

    const foodButton = document.createElement('div');
    foodButton.textContent = 'Food Menu';
    foodButton.id = 'food-button';
    foodButton.classList.add('menu-button');

    const drinkButton = document.createElement('div');
    drinkButton.textContent ='Drink Menu';
    drinkButton.id = 'drink-button'
    drinkButton.classList.add('menu-button');

    headerBottom.appendChild(homeButton);
    headerBottom.appendChild(foodButton);
    headerBottom.appendChild(drinkButton);
    header.appendChild(headerTop);
    header.appendChild(headerBottom);

    const content = document.createElement('div');
    content.id = 'content'

    const footer = document.createElement('div');
    footer.classList.add('footer');

    const footerText = document.createElement('span');
    footerText.classList.add('footer-text');
    footerText.textContent = 'Made with 🍓 by'

    const footerLink = document.createElement('a');
    footerLink.classList.add('footer-link');
    footerLink.textContent = 'Matt Rossetti'
    footerLink.href = "https://github.com/MattRossetti";

    const footerLogo = new Image();
    footerLogo.classList.add('github-icon');
    footerLogo.src = githubIcon;
    
    footerLink.appendChild(footerLogo);
    footerText.appendChild(footerLink);
    footer.appendChild(footerText);

    container.appendChild(header);
    container.appendChild(content);
    container.appendChild(footer);
}

export {loadPageSkeleton}