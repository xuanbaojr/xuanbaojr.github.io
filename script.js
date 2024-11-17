let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    const slidesContainer = document.querySelector('.slides');
    const slideWidth = slides[0].offsetWidth;
    slidesContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
