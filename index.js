const imgSlides = document.querySelectorAll(".img--slide");
const txtSlides = document.querySelectorAll(".txt--slide");
const sliderLeft = document.querySelector(".slider--left");
const sliderRight = document.querySelector(".slider--right");
let counter = 0;

const expandNavBtn = document.querySelector(".btn--navexpand");
const nav = document.querySelector("nav");
const closeNavBtn = document.querySelector(".btn--navclose");

imgSlides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});
txtSlides.forEach(function (slide, index) {
    slide.style.left = `${index * 120}%`;
});

expandNavBtn.addEventListener("click", expandNav);
closeNavBtn.addEventListener("click", closeNav);

sliderLeft.addEventListener("click", function () {
    slide(1);
});
sliderRight.addEventListener("click", function () {
    slide(-1);
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

function expandNav() {
    nav.style.transform = "translateY(100%)";
    hide(expandNavBtn);
}

function closeNav() {
    nav.style.transform = "translateY(0)";
    show(expandNavBtn);
}

function show(elt, display = "block") {
    elt.style.display = display;
}
function hide(elt) {
    elt.style.display = "none";
}
