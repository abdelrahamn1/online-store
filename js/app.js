// Variables
let topNavbar = document.querySelector(".top-nav");
let bottomNavbar = document.querySelector(".bottom-nav");
let bottomSearch = document.querySelector(".bottom-search");
let UpButton = document.querySelector(".up-button");
let barIcon = document.querySelector("#bar");
let closeIcon = document.querySelector("#close");
let links = document.querySelector(".nav .links");
let buttonNext = document.querySelector(".right");
let buttonback = document.querySelector(".left");
let imgSlider = document.querySelector(".slider img");
var num = 0;
let images = [
  "images/slider/slider1.jpg",
  "images/slider/slider2.jpg",
  "images/slider/slider3.jpg",
];
// End variables
// scroll function
window.onscroll = function () {
  if (window.scrollY > 500) {
    topNavbar.style.display = "none";
    bottomSearch.style.display = "block";
    UpButton.style.right = "15px";
  } else {
    topNavbar.style.display = "flex";
    bottomSearch.style.display = "none";
    UpButton.style.right = "-80px";
  }
};
// End scroll function
// slider buttons functon
buttonNext.onclick = function () {
  num++;
  if (num >= images.length) {
    num = 0;
    imgSlider.src = images[num];
  } else {
    imgSlider.src = images[num];
  }
};
buttonback.onclick = function () {
  num--;
  if (num < 0) {
    num = images.length - 1;
    imgSlider.src = images[num];
  } else {
    imgSlider.src = images[num];
  }
};
// End slider buttons function
// Icon bar function
barIcon.onclick = function () {
  links.style.display = "block";
  barIcon.style.display = "none";
  closeIcon.style.display = "block";
  closeIcon.style.transition = "display 0.4s ease-in-out";
  links.style.transition = "display 0.4s ease-in-out";
};
closeIcon.onclick = function () {
  links.style.display = "none";
  barIcon.style.display = "block";
  closeIcon.style.display = "none";
};
// End Icon bar Function
// Up Button Function
UpButton.onclick = function () {
  document.documentElement.scrollTop = 0;
};
// End Up Button Function
