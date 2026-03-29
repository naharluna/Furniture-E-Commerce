document.addEventListener("DOMContentLoaded", function(){

const toggle = document.querySelector(".navbar__mobile-menu-toggle");
const menu = document.querySelector(".navbar__Mobile-menu-list");

toggle.addEventListener("click", function(){

menu.classList.toggle("active");

});

});


// Inspirations Slider
const track = document.querySelector(".inspirations__track");
const slides = document.querySelectorAll(".inspirations__slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".inspirations__next");

let current = 0;

function goToSlide(index) {
    slides[current].classList.remove("inspirations__slide--active");
    dots[current].classList.remove("dot--active");

    current = (index + slides.length) % slides.length;

    slides[current].classList.add("inspirations__slide--active");
    dots[current].classList.add("dot--active");

    track.style.transform = `translateX(-${current * 386}px)`;
}

nextBtn.addEventListener("click", () => goToSlide(current + 1));

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => goToSlide(i));
});