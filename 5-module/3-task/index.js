function initCarousel() {
  let carouselInner = document.querySelector('.carousel__inner');
  let right = document.querySelector(".carousel__arrow_right");
  let left = document.querySelector(".carousel__arrow_left");

  let numberSlide = 1;
  let slidePosition = 0;
  left.style.display = 'none';

  right.addEventListener('click', (element) => {
    slidePosition += carouselInner.offsetWidth;
    carouselInner.style.transform = `translateX(-${slidePosition}px)`;
    numberSlide += 1;
    if (numberSlide === 4) {
      right.style.display = 'none';
    }
    else {
      right.style.display = '';
      left.style.display = '';
    }
  });
  left.addEventListener('click', (element) => {
    slidePosition -= carouselInner.offsetWidth;
    carouselInner.style.transform = `translateX(-${slidePosition}px)`;
    numberSlide -= 1;
    if (numberSlide === 1) {
      left.style.display = 'none';
    }
    else {
      right.style.display = '';
      left.style.display = '';
    }
  });

}
