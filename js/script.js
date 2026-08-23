const aboutImages = [
    "images/About1.jpg",
    "images/About2.jpg",
    "images/About3.jpg",
    "images/About4.jpeg",
    "images/About5.jpg",
    "images/About6.jpeg"
];

const imageOne = document.getElementById("about-image-1");
const imageTwo = document.getElementById("about-image-2");

let currentIndex = 0;
let showingFirst = true;

// Start with the first image visible
imageOne.classList.add("active");

// Preload all images
aboutImages.forEach((src) => {
    const image = new Image();
    image.src = src;
});

function changeAboutImage() {
    currentIndex = (currentIndex + 1) % aboutImages.length;

    if (showingFirst) {
        imageTwo.src = aboutImages[currentIndex];

        imageTwo.classList.add("active");
        imageOne.classList.remove("active");
    } else {
        imageOne.src = aboutImages[currentIndex];

        imageOne.classList.add("active");
        imageTwo.classList.remove("active");
    }

    showingFirst = !showingFirst;
}

// Change image every 4 seconds
setInterval(changeAboutImage, 4000);