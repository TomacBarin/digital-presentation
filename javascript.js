let currentImage = 1; 
const images = document.querySelectorAll('.image-container img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const timelineItems = document.querySelectorAll('.timeline-item');

function updateImage() {
    images.forEach(img => img.classList.remove('active'));
    images[currentImage].classList.add('active');
}

prevButton.addEventListener('click', () => {
    currentImage = (currentImage - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentImage = (currentImage + 1) % images.length;
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