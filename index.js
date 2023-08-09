const imgSlides = document.querySelectorAll(".img--slide");
const txtSlides = document.querySelectorAll(".txt--slide");
const sliderLeft = document.querySelector(".slider--left");
const sliderRight = document.querySelector(".slider--right");
let counter = 0;

imgSlides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});
txtSlides.forEach(function (slide, index) {
    slide.style.left = `${index * 120}%`;
});

function slide(direction) {
    if (counter === 0 && direction === 1) return;
    else if (counter === imgSlides.length - 1 && direction === -1) return;

    if (direction === -1) counter += 1;
    else counter -= 1;
    imgSlides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
    txtSlides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 120}%)`;
    });
}
sliderLeft.addEventListener("click", function () {
    slide(1);
});
sliderRight.addEventListener("click", function () {
    slide(-1);
});
