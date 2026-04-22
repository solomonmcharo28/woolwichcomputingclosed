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