const imgSlides = document.querySelectorAll(".img--slide");
const txtSlides = document.querySelectorAll(".txt--slide");
const sliderLeft = document.querySelectorAll(".slider--left");
const sliderRight = document.querySelectorAll(".slider--right");
let counter = 0;

const expandNavBtn = document.querySelector(".btn--navexpand");
const nav = document.querySelector("nav");
const closeNavBtn = document.querySelector(".btn--navclose");
const navModal = document.querySelector(".nav__modal");

const shopNowLink = document.querySelector(".card--txt>a.link");

shopNowLink.addEventListener("mouseenter", function () {
    shopNowLink
        .querySelector(".img--link")
        .firstElementChild.setAttribute("fill", "var(--clr-primary-darkGray)");
});
shopNowLink.addEventListener("mouseleave", function () {
    shopNowLink
        .querySelector(".img--link")
        .firstElementChild.setAttribute("fill", "#000");
});

imgSlides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});
txtSlides.forEach(function (slide, index) {
    slide.style.left = `${index * 150}%`;
});

expandNavBtn.addEventListener("click", expandNav);
closeNavBtn.addEventListener("click", closeNav);
navModal.addEventListener("click", closeNav);

sliderLeft.forEach((slider) =>
    slider.addEventListener("click", function () {
        slide(1);
    })
);
sliderRight.forEach((slider) =>
    slider.addEventListener("click", function () {
        slide(-1);
    })
);

function slide(direction) {
    if (counter === 0 && direction === 1) return;
    else if (counter === imgSlides.length - 1 && direction === -1) return;

    if (direction === -1) counter += 1;
    else counter -= 1;
    imgSlides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
    txtSlides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 150}%)`;
    });
}

function expandNav() {
    nav.style.transform = "translateY(100%)";
    navModal.style.transform = "translateY(-100%)";
    hide(expandNavBtn);
}

function closeNav() {
    nav.style.transform = "translateY(0)";
    navModal.style.transform = "translateY(100%)";
    hide(expandNavBtn);
    show(expandNavBtn);
}

function show(elt, display = "block") {
    elt.style.display = display;
}
function hide(elt) {
    elt.style.display = "none";
}
