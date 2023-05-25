// Define the images
const images = [
    'images/auto1.jpeg',
    'images/auto2.jpeg',
    'images/auto3.jpeg',
]

// App state
let index = 0;
const max = images.length;

// Get the DOM elements
const containerElement = document.querySelector('.container');
const prevSlideButton = containerElement.querySelector('.prevSlide');
const nextSlideButton = containerElement.querySelector('.nextSlide');

// Listen for arrow click events
prevSlideButton.addEventListener('click', () => {
    index--
    setImageIndex();
    changeBackrgoundImage(images[index], containerElement);
});

nextSlideButton.addEventListener('click', () => {
    index++
    setImageIndex();
    changeBackrgoundImage(images[index], containerElement);
});

// Utility function
function setImageIndex() {
    if (index < 0) index = max - 1;
    if (index === max) index = 0;

}

function changeBackrgoundImage(backgroundImage, element) {
    element.style.backgroundImage = `url(${backgroundImage})`;
}