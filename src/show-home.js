const aboutContentText = "Born out a love for food and a tiny apartment, Basement Kitchen highlights Chef Matt and Grace's favorite cuisines. Come and dine with us and you will be served with the meal of a lifetime. Whether you enjoy Pizza, Pasta, or just a great cocktail, Basement Kitchen has something for you!"
import chefsPictureJpeg from './about-images/chefs-picture.jpeg';

const showHome = () => {
    const content = document.getElementById('content')

    const chefsContainer = document.createElement('div');
    chefsContainer.id = 'chefs-container';
    chefsContainer.classList.add('info-container');

    const chefsHeader = document.createElement('div');
    chefsHeader.id = 'chefs-header';
    chefsHeader.classList.add('info-header');
    chefsHeader.textContent = 'Meet The Chefs';

    const chefsPicture = new Image();
    chefsPicture.classList.add('picture');
    chefsPicture.src = chefsPictureJpeg

    const chefsContent = document.createElement('div');
    chefsContent.id = 'chefs-content';
    chefsContent.classList.add('info-content');
    chefsContent.textContent = 'Grace and Matt circa 2021';

    chefsContainer.appendChild(chefsHeader);
    chefsContainer.appendChild(chefsPicture);
    chefsContainer.appendChild(chefsContent);
    content.appendChild(chefsContainer)

    const aboutContainer = document.createElement('div');
    aboutContainer.id = 'about-container';
    aboutContainer.classList.add('info-container');

    const aboutHeader = document.createElement('div');
    aboutHeader.id = 'about-header';
    aboutHeader.classList.add('info-header');
    aboutHeader.textContent = 'About';
    
    const aboutContent = document.createElement('div');
    aboutContent.id = 'about-content';
    aboutContent.classList.add('info-content');
    aboutContent.textContent = aboutContentText

    aboutContainer.appendChild(aboutHeader);
    aboutContainer.appendChild(aboutContent);
    content.appendChild(aboutContainer);

    const contactContainer = document.createElement('div');
    contactContainer.id = 'contact_container';
    contactContainer.classList.add('info-container');

    const contactHeader = document.createElement('div');
    contactHeader.id = 'contact_header';
    contactHeader.classList.add('info-header');
    contactHeader.textContent = 'Contact';

    const contactContent = document.createElement('div');
    contactContent.id = 'contact-content'
    contactContent.classList.add('info-content');
    contactContent.textContent = 'Slide into our DMs on insta' + '\u00A0';

    const instaHandle = document.createElement('a');
    instaHandle.classList.add('insta-handle')
    instaHandle.textContent = '@basement_kitchen'
    instaHandle.href = 'https://www.instagram.com/basement_kitchen/'

    contactContent.appendChild(instaHandle);
    contactContainer.appendChild(contactHeader);
    contactContainer.appendChild(contactContent);
    content.appendChild(contactContainer);
}

export { showHome }