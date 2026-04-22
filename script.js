function toggleText(box) {
  box.classList.toggle("active");
}

const slides = document.getElementById("slides");
const totalSlides = slides.children.length;
let index = 0;

function autoSlide() {
  index++;
  if (index >= totalSlides) {
    index = 0;
  }
  slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(autoSlide, 3000);


const slides2 = document.getElementById("slides2");
const totalSlides2 = slides2.children.length;
let index2 = 0;

function autoSlide2() {
  index2++;
  if (index2 >= totalSlides2) {
    index2 = 0;
  }
  slides2.style.transform = `translateX(-${index2 * 100}%)`;
}
setInterval(autoSlide2, 3000);



const slides3 = document.getElementById("slides3");
const totalSlides3 = slides3.children.length;
let index3 = 0;

function autoSlide3() {
  index3++;
  if (index3 >= totalSlides2) {
    index3 = 0;
  }
  slides3.style.transform = `translateX(-${index3 * 100}%)`;
}
setInterval(autoSlide3, 3000);