let currentImage = 0; // Startar med index 0, vilket mappar till Wilma4_TomacBarin02_sm.jpg
const images = document.querySelectorAll('.image-container img'); //Hämtar alla bilder i galleriet
const prevButton = document.querySelector('.prev'); //Håller koll på knapparna
const nextButton = document.querySelector('.next'); //Håller koll på knapparna
const timelineItems = document.querySelectorAll('.timeline-item'); //Hämtar alla timelline-poster

// Definiera den anpassade ordningen: 1 (Wilma4_TomacBarin02), 2 (Wilma4_TomacBarin01), 0 (Wilma4_TomacBarin03)
const customOrder = [1, 2, 0];

//Funktion som tar bort active-klassen från alla bilder och lägger till den på bilden enligt customOrder[currentImage]
function updateImage() {
    images.forEach(img => img.classList.remove('active'));
    const displayIndex = customOrder[currentImage];
    images[displayIndex].classList.add('active');
}

// Byter bilder (currentImage) framåt
prevButton.addEventListener('click', () => {
    currentImage = (currentImage - 1 + customOrder.length) % customOrder.length;
    updateImage();
});

// Byter bilder (currentImage) bakåt
nextButton.addEventListener('click', () => {
    currentImage = (currentImage + 1) % customOrder.length;
    updateImage();
});
//UpdateImage() körs direkt för att visa startbilden
updateImage();

// Lägger till active-klass när items blir synliga
timelineItems.forEach(item => {
    //IntersectionObserver ser när ett element blir synligt (50% i viewport) och lägger till active-klassen
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            item.classList.add('active');
        }
    }, { threshold: 0.5 });
    observer.observe(item);
});