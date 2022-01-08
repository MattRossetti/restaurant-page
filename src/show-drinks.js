import beerSrc from './drink-photos/beer.jpg';
import wineSrc from './drink-photos/wine.jpg';
import whiskeySrc from './drink-photos/whiskey.jpg';
import tequilaSrc from './drink-photos/tequila.jpg';
import ginSrc from './drink-photos/gin.jpg';
import campariSrc from './drink-photos/campari.jpg';

const showDrinks = () => {
    const content = document.getElementById('content');

    const beerAndWineContainer = document.createElement('div');
    beerAndWineContainer.id = 'beer-and-wine-container';
    beerAndWineContainer.classList.add('food-container');
    beerAndWineContainer.textContent = 'Beer and Wine';

    const beer = document.createElement('div');
    beer.id = 'beer';
    beer.classList.add('food-item');
    beer.textContent = 'Beer'

    const beerBundle = document.createElement('div');
    beerBundle.id ='beer-bundle';
    beerBundle.classList.add('food-bundle');

    const beerDescription = document.createElement('div');
    beerDescription.id = 'beer-description';
    beerDescription.classList.add('food-description');
    beerDescription.textContent = 'Breweries on tap include Lagunitas, Maplewood, Noon whistle, and pipeworks.'

    const beerPhoto  = new Image();
    beerPhoto.classList.add('food-image');
    beerPhoto.src = beerSrc;

    beerBundle.appendChild(beerDescription);
    beerBundle.appendChild(beerPhoto);
    beer.appendChild(beerBundle);
    beerAndWineContainer.appendChild(beer);

    const wine = document.createElement('div');
    wine.id = 'wine';
    wine.classList.add('food-item');
    wine.textContent = 'Wine'

    const wineBundle = document.createElement('div');
    wineBundle.id ='wine-bundle';
    wineBundle.classList.add('food-bundle');

    const wineDescription = document.createElement('div');
    wineDescription.id = 'wine-description';
    wineDescription.classList.add('food-description');
    wineDescription.textContent = 'House wines include a white, two reds, and rose. Ask your hostess for tasting notes for the wines.'

    const winePhoto  = new Image();
    winePhoto.classList.add('food-image');
    winePhoto.src = wineSrc;

    wineBundle.appendChild(wineDescription);
    wineBundle.appendChild(winePhoto);
    wine.appendChild(wineBundle);
    beerAndWineContainer.appendChild(wine);

    const cocktailContainer = document.createElement('div');
    cocktailContainer.id = 'cocktail-container';
    cocktailContainer.classList.add('food-container');
    cocktailContainer.textContent = 'Cocktails'

    const whiskey = document.createElement('div');
    whiskey.id = 'whiskey';
    whiskey.classList.add('food-item');
    whiskey.textContent = 'Whiskey'

    const whiskeyBundle = document.createElement('div');
    whiskeyBundle.id ='whiskey-bundle';
    whiskeyBundle.classList.add('food-bundle');

    const whiskeyDescription = document.createElement('div');
    whiskeyDescription.id = 'whiskey-description';
    whiskeyDescription.classList.add('food-description');
    whiskeyDescription.textContent = 'Whiskey Old Fashioned, just like your grandpa liked.'

    const whiskeyPhoto  = new Image();
    whiskeyPhoto.classList.add('food-image');
    whiskeyPhoto.src = whiskeySrc;

    whiskeyBundle.appendChild(whiskeyDescription);
    whiskeyBundle.appendChild(whiskeyPhoto);
    whiskey.appendChild(whiskeyBundle);
    cocktailContainer.appendChild(whiskey);

    const tequila = document.createElement('div');
    tequila.id = 'tequila';
    tequila.classList.add('food-item');
    tequila.textContent = 'Tequila'

    const tequilaBundle = document.createElement('div');
    tequilaBundle.id ='tequila-bundle';
    tequilaBundle.classList.add('food-bundle');

    const tequilaDescription = document.createElement('div');
    tequilaDescription.id = 'tequila-description';
    tequilaDescription.classList.add('food-description');
    tequilaDescription.textContent = 'Smoked Lime Margarita, great start to a long night.'

    const tequilaPhoto  = new Image();
    tequilaPhoto.classList.add('food-image');
    tequilaPhoto.src = tequilaSrc;

    const gin = document.createElement('div');
    gin.id = 'gin';
    gin.classList.add('food-item');
    gin.textContent = 'Gin'

    const ginBundle = document.createElement('div');
    ginBundle.id ='gin-bundle';
    ginBundle.classList.add('food-bundle');

    const ginDescription = document.createElement('div');
    ginDescription.id = 'gin-description';
    ginDescription.classList.add('food-description');
    ginDescription.textContent = 'Gin and Tonic, for the gentleman.'

    const ginPhoto  = new Image();
    ginPhoto.classList.add('food-image');
    ginPhoto.src = ginSrc;

    ginBundle.appendChild(ginDescription);
    ginBundle.appendChild(ginPhoto);
    gin.appendChild(ginBundle);
    cocktailContainer.appendChild(gin);

    tequilaBundle.appendChild(tequilaDescription);
    tequilaBundle.appendChild(tequilaPhoto);
    tequila.appendChild(tequilaBundle);
    cocktailContainer.appendChild(tequila);

    const campari = document.createElement('div');
    campari.id = 'campari';
    campari.classList.add('food-item');
    campari.textContent = 'Campari'

    const campariBundle = document.createElement('div');
    campariBundle.id ='campari-bundle';
    campariBundle.classList.add('food-bundle');

    const campariDescription = document.createElement('div');
    campariDescription.id = 'campari-description';
    campariDescription.classList.add('food-description');
    campariDescription.textContent = 'Negroni, for the true cocktail officianados.'

    const campariPhoto  = new Image();
    campariPhoto.classList.add('food-image');
    campariPhoto.src = campariSrc;

    campariBundle.appendChild(campariDescription);
    campariBundle.appendChild(campariPhoto);
    campari.appendChild(campariBundle);
    cocktailContainer.appendChild(campari);

    content.appendChild(beerAndWineContainer);
    content.appendChild(cocktailContainer);
}

export { showDrinks }