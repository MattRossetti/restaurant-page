import crustiniSrc from './food-images/crustini.jpeg';
import aranciniSrc from './food-images/arancini.JPEG';
import latkeSrc from './food-images/latke.jpeg';
import pizzaSrc from './food-images/pizza.JPEG';
import tacoSrc from './food-images/tacos.JPEG';
import pastaSrc from './food-images/pasta.jpeg';
import lavaCakeSrc from './food-images/lavaCake.jpeg'
import tartSrc from './food-images/tart.JPEG';
import iceCreamSrc from './food-images/iceCream.JPEG';

const showFood = () => {
    const content = document.getElementById('content')

    const appetizerContainer = document.createElement('div');
    appetizerContainer.id = 'appetizer-container';
    appetizerContainer.classList.add('food-container');
    appetizerContainer.textContent = 'Appetizers'

    const crustini = document.createElement('div');
    crustini.id = 'crustini';
    crustini.classList.add('food-item');
    crustini.textContent = 'Crustini'

    const crustiniBundle = document.createElement('div');
    crustiniBundle.id ='crustini-bundle';
    crustiniBundle.classList.add('food-bundle');

    const crustiniDescription = document.createElement('div');
    crustiniDescription.id = 'crustini-description';
    crustiniDescription.classList.add('food-description');
    crustiniDescription.textContent = 'Crustini served with a Whipped Feta spread and jammy coinfit tomatoes.'

    const crustiniPhoto  = new Image();
    crustiniPhoto.classList.add('food-image');
    crustiniPhoto.src = crustiniSrc;

    crustiniBundle.appendChild(crustiniDescription);
    crustiniBundle.appendChild(crustiniPhoto);
    crustini.appendChild(crustiniBundle);
    appetizerContainer.appendChild(crustini);

    const arancini = document.createElement('div');
    arancini.id = 'arancini';
    arancini.classList.add('food-item');
    arancini.textContent = 'Arancini';

    const aranciniBundle = document.createElement('div');
    aranciniBundle.id = 'arancini-bundle';
    aranciniBundle.classList.add('food-bundle');

    const aranciniDescription = document.createElement('div');
    aranciniDescription.id = 'arancini-description';
    aranciniDescription.classList.add('food-description');
    aranciniDescription.textContent = 'Risotto balls stuffed with mozzerella then battered and Fried. Served with a calabrian chile aioli.'

    const aranciniPhoto = new Image();
    aranciniPhoto.classList.add('food-image');
    aranciniPhoto.src = aranciniSrc;

    aranciniBundle.appendChild(aranciniDescription);
    aranciniBundle.appendChild(aranciniPhoto);
    arancini.appendChild(aranciniBundle);
    appetizerContainer.appendChild(arancini);

    const latke = document.createElement('div');
    latke.id = 'latke';
    latke.classList.add('food-item');
    latke.textContent = 'Latke';

    const latkeBundle = document.createElement('div');
    latkeBundle.id = 'latke-bundle';
    latkeBundle.classList.add('food-bundle');

    const latkeDescription = document.createElement('div');
    latkeDescription.id = 'latke-description';
    latkeDescription.classList.add('food-description');
    latkeDescription.textContent = 'Potato Latke topped with sour cream, smoked salmon, and chives.'

    const latkePhoto = new Image();
    latkePhoto.classList.add('food-image');
    latkePhoto.src = latkeSrc;

    latkeBundle.appendChild(latkeDescription);
    latkeBundle.appendChild(latkePhoto);
    latke.appendChild(latkeBundle);
    appetizerContainer.appendChild(latke);

    const entreeContainer = document.createElement('div');
    entreeContainer.id = 'entree-container';
    entreeContainer.classList.add('food-container');
    entreeContainer.textContent = 'Entrees'

    const pizza = document.createElement('div');
    pizza.id = 'pizza';
    pizza.classList.add('food-item');
    pizza.textContent = 'Pizza';

    const pizzaBundle = document.createElement('div');
    pizzaBundle.id = 'pizza-bundle';
    pizzaBundle.classList.add('food-bundle');

    const pizzaDescription = document.createElement('div');
    pizzaDescription.id = 'pizza-description';
    pizzaDescription.classList.add('food-description');
    pizzaDescription.textContent = 'Grilled pizza topped with fresh mozzerella, peaches and proscuitto. Finished with fresh basil and a balsamic vinegar reduction.';

    const pizzaPhoto = new Image();
    pizzaPhoto.classList.add('food-image');
    pizzaPhoto.src = pizzaSrc;

    pizzaBundle.appendChild(pizzaDescription);
    pizzaBundle.appendChild(pizzaPhoto);
    pizza.appendChild(pizzaBundle);
    entreeContainer.appendChild(pizza);

    const taco = document.createElement('div');
    taco.id = 'taco';
    taco.classList.add('food-item');
    taco.textContent = 'Taco';

    const tacoBundle = document.createElement('div');
    tacoBundle.id = 'taco-bundle';
    tacoBundle.classList.add('food-bundle');

    const tacoDescription = document.createElement('div');
    tacoDescription.id = 'taco-description';
    tacoDescription.classList.add('food-description');
    tacoDescription.textContent = 'Chicken tinga stuffed into a crispy corn tortilla shell. Served with guacamole, pickled red onions, and lime.'

    const tacoPhoto = new Image();
    tacoPhoto.classList.add('food-image');
    tacoPhoto.src = tacoSrc;

    tacoBundle.appendChild(tacoDescription);
    tacoBundle.appendChild(tacoPhoto);
    taco.appendChild(tacoBundle);
    entreeContainer.appendChild(taco);
    
    const pasta = document.createElement('div');
    pasta.id = 'pasta';
    pasta.classList.add('food-item');
    pasta.textContent = 'Pasta';
    
    const pastaBundle = document.createElement('div');
    pastaBundle.id = 'pasta-bundle';
    pastaBundle.classList.add('food-bundle');
    
    const pastaDescription = document.createElement('div');
    pastaDescription.id = 'pasta-description';
    pastaDescription.classList.add('food-description');
    pastaDescription.textContent = 'Creamy mushroom pasta topped with crispy baby bella and maitake mushrooms.'
    
    const pastaPhoto = new Image();
    pastaPhoto.classList.add('food-image');
    pastaPhoto.src = pastaSrc;
    
    pastaBundle.appendChild(pastaDescription);
    pastaBundle.appendChild(pastaPhoto);
    pasta.appendChild(pastaBundle);
    entreeContainer.appendChild(pasta);
    
    const dessertContainer = document.createElement('div');
    dessertContainer.id = 'dessert-container';
    dessertContainer.classList.add('food-container');
    dessertContainer.textContent = 'Dessert'

    const lavaCake = document.createElement('div');
    lavaCake.id = 'lavaCake';
    lavaCake.classList.add('food-item');
    lavaCake.textContent = 'Chocolate Lava Cake';
    
    const lavaCakeBundle = document.createElement('div');
    lavaCakeBundle.id = 'lavaCake-bundle';
    lavaCakeBundle.classList.add('food-bundle');
    
    const lavaCakeDescription = document.createElement('div');
    lavaCakeDescription.id = 'lavaCake-description';
    lavaCakeDescription.classList.add('food-description');
    lavaCakeDescription.textContent = 'Chocolate cake with a molten core, topped with fresh seasonal fruit.'
    
    const lavaCakePhoto = new Image();
    lavaCakePhoto.classList.add('food-image');
    lavaCakePhoto.src = lavaCakeSrc;
    
    lavaCakeBundle.appendChild(lavaCakeDescription);
    lavaCakeBundle.appendChild(lavaCakePhoto);
    lavaCake.appendChild(lavaCakeBundle);
    dessertContainer.appendChild(lavaCake);

    const tart = document.createElement('div');
    tart.id = 'tart';
    tart.classList.add('food-item');
    tart.textContent = 'Lemon Blueberry Tart';
    
    const tartBundle = document.createElement('div');
    tartBundle.id = 'tart-bundle';
    tartBundle.classList.add('food-bundle');
    
    const tartDescription = document.createElement('div');
    tartDescription.id = 'tart-description';
    tartDescription.classList.add('food-description');
    tartDescription.textContent = 'Summery Lemon tart topped with ripe blueberries on a graham cracker crust.'
    
    const tartPhoto = new Image();
    tartPhoto.classList.add('food-image');
    tartPhoto.src = tartSrc;
    
    tartBundle.appendChild(tartDescription);
    tartBundle.appendChild(tartPhoto);
    tart.appendChild(tartBundle);
    dessertContainer.appendChild(tart);

    const iceCream = document.createElement('div');
    iceCream.id = 'iceCream';
    iceCream.classList.add('food-item');
    iceCream.textContent = 'Ice Cream Sandwich';
    
    const iceCreamBundle = document.createElement('div');
    iceCreamBundle.id = 'iceCream-bundle';
    iceCreamBundle.classList.add('food-bundle');
    
    const iceCreamDescription = document.createElement('div');
    iceCreamDescription.id = 'iceCream-description';
    iceCreamDescription.classList.add('food-description');
    iceCreamDescription.textContent = 'Vanilla ice cream made with fresh vanilla beans sandwiched between two chocolate cookies.'
    
    const iceCreamPhoto = new Image();
    iceCreamPhoto.classList.add('food-image');
    iceCreamPhoto.src = iceCreamSrc;
    
    iceCreamBundle.appendChild(iceCreamDescription);
    iceCreamBundle.appendChild(iceCreamPhoto);
    iceCream.appendChild(iceCreamBundle);
    dessertContainer.appendChild(iceCream);
    
    content.appendChild(appetizerContainer);
    content.appendChild(entreeContainer);
    content.appendChild(dessertContainer);
}

export { showFood } 