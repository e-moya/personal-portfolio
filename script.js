const button = document.querySelector("#fact-button");
const fact = document.querySelector("#fun-fact");
const senseButton = document.querySelector("#sense-button");
const senseOutput = document.querySelector("#sense-output");
const pageLoader = document.querySelector("#page-loader");
const galleryImage = document.querySelector(".about-gallery-image");
const galleryImageButton = document.querySelector("#gallery-image-button");
const galleryCounter = document.querySelector("#gallery-counter");
const galleryPrevious = document.querySelector("#gallery-previous");
const galleryNext = document.querySelector("#gallery-next");
const galleryPhotos = [
    { source: "New%20folder/MyImage1.JPG", alt: "Personal photo 1" },
    { source: "New%20folder/SpidermanImage1.jpg", alt: "Spider-Man photo 1" },
    { source: "New%20folder/MyImage2.JPG", alt: "Personal photo 2" },
    { source: "New%20folder/SpidermanImage2.jpg", alt: "Spider-Man photo 2" },
    { source: "New%20folder/MyImage3.JPG", alt: "Personal photo 3" },
    { source: "New%20folder/SpidermanImage3.jpg", alt: "Spider-Man photo 3" }
];
const funFacts = [
    "I initially wanted to study Psychology to become a therapist.",
    "This is my first website.",
    "I am a transfer student.",
    "Spider-Man is my favorite superhero."
];
const senseMessages = [
    "web fluid: 87% / status: ready",
    "threat scan: clear / city grid: stable",
    "proximity alert: 12m / target: moving",
    "web-sling route: clear / heading: north",
    "spider-sense: tingling / check your six",
    "web cartridges: 4 / refill recommended"
];
let senseTimer;
let previousSenseIndex = -1;
let previousFunFactIndex = -1;
let activeGalleryIndex = 0;
let galleryTimer;

pageLoader.addEventListener('animationend', function(event) {
    if (event.animationName === "loader-fade") {
        pageLoader.remove();
    }
});

button.addEventListener('click', function() {
    if (fact.hidden) {
        let factIndex = Math.floor(Math.random() * funFacts.length);

        if (funFacts.length > 1 && factIndex === previousFunFactIndex) {
            factIndex = (factIndex + 1 + Math.floor(Math.random() * (funFacts.length - 1))) % funFacts.length;
        }

        previousFunFactIndex = factIndex;
        fact.textContent = funFacts[factIndex];
        fact.hidden = false;
    } else {
        fact.hidden = true;
    }

    fact.classList.toggle('is-visible', !fact.hidden);
});

function runSenseScan() {
    let messageIndex = Math.floor(Math.random() * senseMessages.length);

    if (senseMessages.length > 1 && messageIndex === previousSenseIndex) {
        messageIndex = (messageIndex + 1 + Math.floor(Math.random() * (senseMessages.length - 1))) % senseMessages.length;
    }

    previousSenseIndex = messageIndex;
    const message = senseMessages[messageIndex];
    let characterIndex = 0;

    clearInterval(senseTimer);
    senseOutput.textContent = "";
    senseTimer = setInterval(function() {
        senseOutput.textContent += message[characterIndex];
        characterIndex += 1;

        if (characterIndex === message.length) {
            clearInterval(senseTimer);
        }
    }, 35);
}

senseButton.addEventListener('click', runSenseScan);
runSenseScan();

function showGalleryPhoto(index) {
    activeGalleryIndex = (index + galleryPhotos.length) % galleryPhotos.length;
    const photo = galleryPhotos[activeGalleryIndex];

    galleryImage.src = photo.source;
    galleryImage.alt = photo.alt;
    galleryImageButton.setAttribute("aria-label", `${photo.alt}. Activate to show the next photo.`);
    galleryCounter.textContent = `${activeGalleryIndex + 1} / ${galleryPhotos.length}`;

    clearInterval(galleryTimer);
    galleryTimer = setInterval(function() {
        showGalleryPhoto(activeGalleryIndex + 1);
    }, 5000);
}

galleryImageButton.addEventListener("click", function() {
    showGalleryPhoto(activeGalleryIndex + 1);
});

galleryPrevious.addEventListener("click", function() {
    showGalleryPhoto(activeGalleryIndex - 1);
});

galleryNext.addEventListener("click", function() {
    showGalleryPhoto(activeGalleryIndex + 1);
});

showGalleryPhoto(0);