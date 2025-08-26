let currentImage = 1; 
const images = document.querySelectorAll('.image-container img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

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