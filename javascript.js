let currentImage = 0; // Startar med index 0, vilket mappar till Wilma4_TomacBarin02_sm.jpg
const images = document.querySelectorAll('.image-container img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const timelineItems = document.querySelectorAll('.timeline-item');

// Definiera den anpassade ordningen: 1 (Wilma4_TomacBarin02), 2 (Wilma4_TomacBarin01), 0 (Wilma4_TomacBarin03)
const customOrder = [1, 2, 0];

function updateImage() {
    images.forEach(img => img.classList.remove('active'));
    const displayIndex = customOrder[currentImage];
    images[displayIndex].classList.add('active');
}

prevButton.addEventListener('click', () => {
    currentImage = (currentImage - 1 + customOrder.length) % customOrder.length;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentImage = (currentImage + 1) % customOrder.length;
    updateImage();
});

updateImage();

// Animation för timeline-items med Intersection Observer
timelineItems.forEach(item => {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            item.classList.add('active');
        }
    }, { threshold: 0.5 });
    observer.observe(item);
});