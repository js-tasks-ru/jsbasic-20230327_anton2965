import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.createCarousel();
    this.numberSlide = 1;
    this.slidePosition = 0;
  }
  createCarousel() {
    this.carousel = createElement(`
     <div class="carousel">
       <div class="carousel__arrow carousel__arrow_right">
         <img src="/assets/images/icons/angle-icon.svg" alt="icon" />
       </div>
       <div class="carousel__arrow carousel__arrow_left">
         <img src="/assets/images/icons/angle-left-icon.svg" alt="icon" />
       </div>
       <div class="carousel__inner"></div>
     </div>
     `);
    return this.createSlide();
  }
  createSlide() {
    let slidesCarousel = this.slides.map(item => createElement(`
     <div class="carousel__slide" data-id="${item.id}">
         <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
         <div class="carousel__caption">
           <span class="carousel__price">€${item.price}</span>
           <div class="carousel__title">${item.name}</div>
           <button type="button" class="carousel__button">
             <img src="/assets/images/icons/plus-icon.svg" alt="icon">
           </button>
         </div>`));
    this.carousel.querySelector('.carousel__inner').append(...slidesCarousel);
    this.initCarousel();
    return this.carousel;
  }
  initCarousel() {
    let carouselInner = this.carousel.querySelector('.carousel__inner');
    let right = this.carousel.querySelector(".carousel__arrow_right");
    let left = this.carousel.querySelector(".carousel__arrow_left");

    left.style.display = 'none';

    right.addEventListener('click', (element) => {
      this.slidePosition += carouselInner.offsetWidth;
      carouselInner.style.transform = `translateX(-${this.slidePosition}px)`;
      this.numberSlide += 1;
      if (this.numberSlide === 4) {
        right.style.display = 'none';
      }
      else {
        right.style.display = 'none';
        left.style.display = '';
      }
    });
    left.addEventListener('click', (element) => {
      this.slidePosition -= carouselInner.offsetWidth;
      carouselInner.style.transform = `translateX(-${this.slidePosition}px)`;
      this.numberSlide -= 1;
      if (this.numberSlide === 1) {
        left.style.display = 'none';
      }
      else {
        right.style.display = '';
        left.style.display = '';
      }
    });
    this.carousel.addEventListener('click', function(e) {
      if (e.target.tagName !== 'BUTTON') {return;}
      let event = new CustomEvent('product-add', {
        detail: e.target.closest('.carousel__slide').dataset.id,
        bubbles: true,
      });
      e.target.dispatchEvent(event);
    });

  }
}
