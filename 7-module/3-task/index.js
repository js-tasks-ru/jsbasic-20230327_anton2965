export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = this.createSlider();
    this.createEventSlider();
  }
  createSlider() {
    this.slider = document.createElement('div');
    this.slider.classList.add('slider');
    this.slider.insertAdjacentHTML('beforeend', `<div class="slider__thumb">
    <span class="slider__value">${this.value}</span>
    </div>`);
    this.slider.insertAdjacentHTML('beforeend', `<div class="slider__progress"></div>`);
    this.sliderSteps = document.createElement('div');
    this.sliderSteps.classList.add('slider__steps');
    this.slider.append(this.sliderSteps);
    for (let i = 0; i < this.steps; i++) {
      if (i === this.value) {
        let activeSpan = document.createElement('span');
        activeSpan.classList.add('slider__step-active');
        this.sliderSteps.append(activeSpan);
      } else {
        this.sliderSteps.append(document.createElement('span'));
      }
    }
    return this.slider;
  }
  createEventSlider() {
    this.slider.addEventListener('click', (event) => {
      let left = event.clientX - this.slider.getBoundingClientRect().left;
      let leftRelative = left / this.slider.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = value / segments * 100;
      this.value = value;
      this.slider.querySelector('.slider__value').innerHTML = this.value;
      for (let i = 0; i < this.slider.querySelector('.slider__steps').children.length; i++) {
        this.slider.querySelector('.slider__steps').children[i].classList.remove('.slider__step-active');
      }
      this.slider.querySelector('.slider__steps').children[this.value].classList.add('.slider__step-active');
      this.slider.querySelector('.slider__thumb').style.left = `${valuePercents}%`;
      this.slider.querySelector('.slider__progress').style.width = `${valuePercents}%`;
      let custom = new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      });
      this.slider.dispatchEvent(custom);
    });
  }
}

