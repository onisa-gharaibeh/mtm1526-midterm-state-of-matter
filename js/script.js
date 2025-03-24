// Load your images on page-load
function preloader() {
    const imagesList = [
        "./img/solid.jpg",
        "./img/liquid.jpg",
        "./img/gas.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);


/* 
    Get all buttons in a NODE LIST of buttons (array like structure)
*/
let btns = document.querySelectorAll('.controls>li>button');

/* 
    Get the reference to your HTML-container
    that will be dynamically loaded from the resource-object.
*/
let content = document.querySelector('.content');

/* 
    Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt.
*/
let data = {
    'solid': {
        'headingContent': "Solid",
        'imgUrl': "img/solid.jpg",
        'imgAlt': "an image of colorful rubic cube, with other brick cubes around it, on a sky blue background",
        'bodyText': "Solids are the foundation of structure and stability. With a fixed shape and volume, solids maintain their form regardless of the container they’re in. Their particles are tightly packed, vibrating in place but not moving freely. From the ice in your drink to the rocks beneath your feet, solids are the building blocks of the physical world."
    },
    'liquid': {
        'headingContent': "Liquid",
        'imgUrl': "img/liquid.jpg",
        'imgAlt': "an image of a water drop on a water surface creating a small circlar waves around it",
        'bodyText': "Liquids flow and adapt, taking the shape of their container while maintaining a consistent volume. Their particles are less tightly packed than solids, allowing them to move and slide past one another. Water, the most essential liquid, nourishes life, while other liquids like oil and mercury play vital roles in industry and science."
    },
    'gas': {
        'headingContent': "Gas",
        'imgUrl': "img/gas.jpg",
        'imgAlt': "an image of colorful smoke",
        'bodyText': "Gases are the free spirits of matter, with no fixed shape or volume. They expand to fill any space, their particles moving rapidly and freely. From the air we breathe to the steam rising from a hot cup of tea, gases are invisible yet omnipresent, shaping our atmosphere and enabling life on Earth."
    }
}

/*
The first content from the
    resource-object will be loaded on the page load:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>`
*/
content.innerHTML =
    `<h2>${data.solid.headingContent}</h2>
                <div>
                    <img src="${data.solid.imgUrl}" alt="${data.solid.imgAlt}">
                    <p>${data.solid.bodyText}</p>
                </div>`;



// Start your handleSelection function here.

function handleSelection(element) {
    /* 
        Remove the id active-button from the element that
        contains it prior to the click-event.

         This will require the loop throught the NODE LIST of buttons. 
        Inside the loop, use conditional and the element object method
        hasAttribute() to check if the current button in the loop containes the id.
        If it does, use element-object property removeAttribute()
        to remove the id.
    */
    for (let btn of btns) {
        if (btn.hasAttribute('id')) {
            btn.removeAttribute('id');
        }
    }

    /*
         Use the element-object method setAttribute() to set the id active-button 
         to the currently clicked button.
     */
    let current = element.target;
    current.id = 'active';

    /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection)
    */
    let key = current.dataset.id;

    content.innerHTML =
        `<h2>${data[key].headingContent}</h2>
                <div>
                    <img src="${data[key].imgUrl}" alt="${data[key].imgAlt}">
                    <p>${data[key].bodyText}</p>
                </div>`;
    // lose your handleSelection function here.
}

for (let btn of btns) {
    btn.addEventListener('click', handleSelection);
}