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

let slideInterval = setInterval(autoSlide, 3000);

let isPaused = false;

slides.addEventListener("click", () => {
  if (!isPaused) {
    clearInterval(slideInterval);
    isPaused = true;
  } else {
    slideInterval = setInterval(autoSlide, 3000);
    isPaused = false;
  }
});


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

let slideInterval2 = setInterval(autoSlide2, 3000);

let isPaused2 = false;

slides2.addEventListener("click", () => {
  if (!isPaused2) {
    clearInterval(slideInterval2);
    isPaused2 = true;
  } else {
    slideInterval2 = setInterval(autoSlide2, 3000);
    isPaused2 = false;
  }
});


const slides3 = document.getElementById("slides3");
const totalSlides3 = slides3.children.length;
let index3 = 0;

function autoSlide3() {
  index3++;
  if (index3 >= totalSlides3) {
    index3 = 0;
  }
  slides3.style.transform = `translateX(-${index3 * 100}%)`;
}
let slideInterval3 = setInterval(autoSlide3, 3000);

let isPaused3 = false;

slides3.addEventListener("click", () => {
  if (!isPaused3) {
    clearInterval(slideInterval3);
    isPaused3 = true;
  } else {
    slideInterval3 = setInterval(autoSlide3, 3000);
    isPaused3 = false;
  }
});

window.addEventListener("load", () => {
  const banner = document.getElementById("banner");

  // show banner
  banner.classList.add("show");

  // hide after 3 seconds
  setTimeout(() => {
    banner.classList.remove("show");
    banner.classList.add("hide");
  }, 3000);
});

const slides4 = document.getElementById("slides4");
const totalSlides4 = slides4.children.length;
let index4 = 0;

function autoSlide4() {
  index4++;
  if (index4 >= totalSlides4) {
    index4 = 0;
  }
  slides4.style.transform = `translateX(-${index4 * 100}%)`;
}

let slideInterval4 = setInterval(autoSlide4, 3000);

let isPaused4 = false;

slides4.addEventListener("click", () => {
  if (!isPaused4) {
    clearInterval(slideInterval4);
    isPaused4 = true;
  } else {
    slideInterval4 = setInterval(autoSlide4, 3000);
    isPaused4 = false;
  }
});


const slides5 = document.getElementById("slides5");
const totalSlides5 = slides5.children.length;
let index5 = 0;

function autoSlide5() {
  index5++;
  if (index5 >= totalSlides5) {
    index5 = 0;
  }
  slides5.style.transform = `translateX(-${index5 * 100}%)`;
}
let slideInterval5 = setInterval(autoSlide5, 3000);

let isPaused5 = false;

slides5.addEventListener("click", () => {
  if (!isPaused5) {
    clearInterval(slideInterval5);
    isPaused5 = true;
  } else {
    slideInterval5 = setInterval(autoSlide5, 3000);
    isPaused5 = false;
  }
});