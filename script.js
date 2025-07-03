
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideContainer = document.getElementById('slideContainer');
const totalSlides = slides.length;

function showSlide(index) {
currentSlide = index;
const translateX = -index * 100;
slideContainer.style.transform = `translateX(${translateX}%)`;
}

function nextSlide() {
const nextIndex = (currentSlide + 1) % totalSlides;
showSlide(nextIndex);
}

function previousSlide() {
const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
showSlide(prevIndex);
}

// Auto-play functionality (optional)
setInterval(nextSlide, 10000); // Change slide every 10 seconds

// Initialize
showSlide(0);
