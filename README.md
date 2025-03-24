# mtm1526-midterm-state-of-matter
Midterm Assignment - Content Manipulation
Content Manipulation

Hide Assignment Information
Instructions
Assignment: Content Manipulation

Task description
You are going to create a mobile first responsive web-page about making green energy affordable for people with average budget. The web-page will have nav-bar, masthead, main-content and footer. Nav-bar has 4 items: home, about, contact and blog. Masthead has to have a background image and a tag-line.

For main-content, you will have 3 buttons and 3 contents (your 3 solutions about making a clean energy affordable for majority of people) stored in an object. On the page load, the first content will be hard-coded HTML. This content will be replaced by another content from JavaScript object once a button is clicked. The first button (because it corresponds to the first content displayed on the page-load) will have a different style than other two (indicating active button). As user clicks any button, id "active-button" will move to the clicked button and corresponding content will be displayed. Size of images and fonts change with the screen-width. Break-point for responsive design will be at: 30rem. Max-width of content is 60rem. This means that content has to be centered in the view-port once 60rem of content-width is exceeded.

Footer needs to have links to at least 3 social media networks (use icon-font).

Order of Operations
Create directories and files

Create wire-frame and mockup

Complete HTML

Complete CSS

Complete JavaScript

Directories - Structure
Directory tree (including names) has to look like this:

/green-energy/
         /css/
         /img/
         /wireframe-mockup/
         /js/
         /index.html
Fonts
You need to use serif/sans-serif Google font pair. Serif font is for headings and sans-serif font is for body text. Fall-back font is going to be default serif/sans-serif font.

References:

http://fontpair.co

https://fonts.google.com

Line height ratio has to be between 1.4 and 1.6. You need to use following font-sizes:

Mobile View: 0.75rem

Tablet/Desktop View: 1rem

Colors
Use the color scheme of your choice. List the hexadecimal values of colors (as CSS comment) inside CSS style-sheet .

HTML elements with background color will expand across the screen while content is centered in the middle of view-port and has limited width.

Reference: color.adobe.com

Images
You could use your own images or choose images from http://www.freeimages.com/ or http://www.morguefile.com/.

All images have to be OPTIMIZED for web.

Set the background image for masthead.

The screen-shots below are not to be replicated in design nor content - they only represent the guidelines for required layout and alignment. The topic is already given in the task description. You will choose your color-scheme, your images and your font-family (font-stack), BUT the content has to be responsive in the way that screen-shots indicate (including order of elements, alignments, horizontal and vertical gutters of white space).

Mobile View < 30rem
The gutter of white space around the content is 2rem. Everything aligned left.




30rem < Tablet/Desktop View < 60rem
Nav-bar items are floated and horizontally aligned. Main-content image-width is 25%. The image is floated - text wraps around.



Coding Guidelines
    // Load your images on page-load
    function preloader() {
        const imagesList = [
           "./img/img-1.jpg",
           "./img/img-2.jpg",
           "./img/img-3.jpg"
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
    Get all buttons in a NODE LIST of buttons (array like structure) */
    
    /* 
    Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */

    /* 
    Get the reference to your HTML-container
    that will be dynamically loaded from the resource-object. */
    
    /* 
    The first button in a NODE LIST of buttons will initially 
    have the id: active-button - this will uniquely style 
    the active button (CSS rule). 
    
    The first content from the
    resource-object will be loaded on the page load:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>` */
    
    /* 
    Start your handleSelection function here. */ 
        
        /* 
        Remove the id active-button from the element that
        contains it prior to the click-event. 

        This will require the loop throught the NODE LIST of buttons. 
        Inside the loop, use conditional and the element object method
        hasAttribute() to check if the current button in the loop containes the id.
        If it does, use element-object property removeAttribute()
        to remove the id. */

        /*
        Use the element-object method setAttribute() to set the id active-button 
        to the currently clicked button. */
    
        /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) */ 
    
    /* 
    Close your handleSelection function here. */  
    
    /* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */ 
Submission
Create a GitHub Repository called "green-energy".

Add the gh-pages branch to the green-energy repo.

index.html has to be in the root of your repo.

Submit the link to your gh-pages rendered site.

Eg: https://abcd0001.github.io/green-energy/index.html

(Change the abcd0001 to your own username)

TEST your link to make sure it works before submitting the link.

Links that return a 404 error are worth zero.

Due on Mar 24, 2025 11:59 PM
Available on Mar 3, 2025 8:00 AM. Access restricted before availability starts.
Available until Mar 28, 2025 11:59 PM. Access restricted after availability ends.

Hide Rubrics
Rubric Name: Projects
Criteria	
Level 2
Level 1
Criterion Score
GitHub Repository
2 points
GitHub link works.

0 points
GitHub link is broken or the requested page does not get rendered in browser.

Score of GitHub Repository,/ 2
Validity of HTML
2 points
HTML files does not contain errors by HTML5 and standards.

0 points
Invalid HTML.

Score of Validity of HTML,/ 2
Criteria	
Level 2
Level 1
New Level
Criterion Score
File structure
2 points
File structure created as requested in the description of project.

1 point
One directory/file is missing or does not have a meaningful name.

0 points
More than one directory/file is missing or does not have a meaningful name.

Score of File structure,/ 2
Responsive design
2 points
Responsive design fully applied.

1 point
Partially done.

0 points
Responsive design is not applied.

Score of Responsive design,/ 2
Font-size, type, line-height and text-contrast
2 points
Font-sizes are set as requested for every view-port. Serif font is used for headings and sans-serif is used for body text. Line-height is between 1.4 and 1.6. Text-contrast passes validation: https://colourcontrast.cc/

1 point
Partially done.

0 points
More than one requirement is not fulfilled.

Score of Font-size, type, line-height and text-contrast,/ 2
Colour scheme and images
2 points
Colour scheme is analogous. Hexadecimal values of colours are listed inside CSS style-sheet as CSS-comment placed at the top of your stylesheet. Images have to be optimized for web.

1 point
Partially done.

0 points
More than one requirement is not fulfilled.

Score of Colour scheme and images,/ 2
Criteria	
Level 2
Level 1
New Level
Criterion Score
JavaScript, CSS and HTML code formatting
3 points
Well formatted code.

1.5 points
Partially done.

0 points
Poorly formatted code.

Score of JavaScript, CSS and HTML code formatting,/ 3
Alignment
3 points
Entire content is properly aligned (vertically and horizontally).

1.5 points
Partially done.

0 points
Many instances of misaligned page elements.

Score of Alignment,/ 3
Horizontal and vertical white space between HTML elements
3 points
No instances of missing or excessive white space.

1.5 points
Partially done.

0 points
Many instances of missing or excessive white space.

Score of Horizontal and vertical white space between HTML elements,/ 3
Overall design and visually appealing
3 points
Excellent.

1.5 points
Average.

0 points
Below average.

Score of Overall design and visual appeal,/ 3
Criteria	
Level 2
Level 1
New Level
Criterion Score
Code functionality
5 points
Fully functional code.

2.5 points
Partially done.

0 points
Many instances of logical or syntax errors.

Score of Code functionality,/ 5
Total
Score of Projects,/ 29
