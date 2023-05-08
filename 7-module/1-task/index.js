import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.ribbon = document.createElement('div');
    this.elem = this.createNavMenu();
  }

  createNavMenu(){
    this.ribbon.classList.add('ribbon');
    this.arrowLeft = this.leftSwitch();
    this.ribbon.append(this.arrowLeft);
    this.arrowRight = this.rightSwitch();
    this.ribbon.append(this.arrowRight);
    this.inner = document.createElement('nav');
    this.inner.classList.add('ribbon__inner');
    this.ribbon.append(this.inner);
    this.addCategory();
    this.carouselInner();
    this.choiceProduct();
    return this.ribbon;
  }
  leftSwitch() {
    return createElement(`
       <button class="ribbon__arrow ribbon__arrow_left">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
       </button>
    `);
  }
  rightSwitch() {
    return createElement(`
       <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
       </button>
    `);
  }

  addCategory() {
    for (let category of this.categories) {
      let categoryElem = createElement(`
      <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>
      `);
      this.inner.append(categoryElem);
    }
  }

  carouselInner() {
    this.ribbon.addEventListener('click', (event) => {
      let scrollLeft = this.inner.scrollLeft;
      let scrollRight = this.inner.scrollWidth - this.inner.scrollLeft - this.inner.clientWidth;
      if (event.target === this.arrowLeft) {
        this.inner.scrollBy(-350, 0);
        if (!this.arrowRight.classList.contains('ribbon__arrow_visible')) {
          this.arrowRight.classList.toggle('ribbon__arrow_visible');
        } else if (scrollLeft < 1) {
          this.arrowLeft.classList.toggle('ribbon__arrow_visible');
        }
      } else if (event.target === this.arrowRight) { // правая кнопка
        this.inner.scrollBy(350, 0);
        if (!this.arrowLeft.classList.contains('ribbon__arrow_visible')) {
          this.arrowLeft.classList.toggle('ribbon__arrow_visible');
        } else if (scrollRight < 1) {
          this.arrowRight.classList.toggle('ribbon__arrow_visible');
        }
      }
    });
  }

  choiceProduct() {
    this.inner.addEventListener('click', (event) => {
      if (event.target.tagName !== 'A') {return;}
      event.preventDefault();
      for (let item of this.inner.querySelectorAll('.ribbon__item')) {
        if (item.classList.contains('ribbon__item_active')) {
          item.classList.remove('ribbon__item_active');
        }
      }
      event.target.classList.add('ribbon__item_active');

      let customE = new CustomEvent('ribbon-select', {
        detail: event.target.dataset.id,
        bubbles: true
      });
      event.target.dispatchEvent(customE);
    });
  }
}

