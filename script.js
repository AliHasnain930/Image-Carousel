const slideContainer = document.querySelector(".automatic");
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");
const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

let slideIndex = 0;

slides[slideIndex].classList.remove("fade");
showSlide(slideIndex);

if (slideContainer != null) {
  setInterval(() => {
    slideIndex += 1;
    if (slideIndex > slides.length) {
      slideIndex = 0;
      slides[slideIndex].classList.add("fade");
    }
    showSlide(slideIndex);
  }, 5000);
}

prevBtn.addEventListener("click", () => {
  slideIndex -= 1;
  if (slideIndex < 0) {
    slideIndex = slides.length;
  }
  showSlide(slideIndex);
});
nextBtn.addEventListener("click", () => {
  slideIndex += 1;
  if (slideIndex > slides.length) {
    slideIndex = 0;
    slides[slideIndex].classList.add("fade");
  }
  showSlide(slideIndex);
});

indicators.forEach((i, index) => {
  i.addEventListener("click", () => {
    if (index == 0) {
      slides[slideIndex].classList.add("fade");
    }
    showSlide(index);
  });
});

function showSlide(index) {
  if (index >= 0 && index < slides.length) {
    reset();
    slides[index].classList.add("visible");
    indicators[index].classList.add("active");
  }
}

function reset() {
  slides.forEach((s) => {
    s.classList.remove("visible");
  });
  indicators.forEach((i) => {
    i.classList.remove("active");
  });
}
