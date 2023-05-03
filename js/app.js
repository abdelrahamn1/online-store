let topNavbar = document.querySelector(".top-nav");
let bottomNavbar = document.querySelector(".bottom-nav");
let bottomSearch = document.querySelector(".bottom-search");
// console.log(imgSlider);
// console.log(bottomNavbar);

window.onscroll = function () {
  if (window.scrollY > 500) {
    topNavbar.style.display = "none";
    bottomSearch.style.display = "block";
  } else {
    topNavbar.style.display = "flex";
    bottomSearch.style.display = "none";
  }
};

let imgSlider = document.querySelector(".slider img");
let images = [
  "images/slider/slider1.jpg",
  "images/slider/slider2.jpg",
  "images/slider/slider3.jpg",
];
var num = 0;
let buttonNext = document.querySelector(".right");
let buttonback = document.querySelector(".left");
console.log(buttonNext);

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
