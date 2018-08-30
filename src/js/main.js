import ScrollReveal from 'scrollreveal';
import Vue from 'vue';

const leftSlider = new Swiper('.left-slider__container', {
  direction: 'vertical',
  //simulateTouch: false
});

const rightSlider = new Swiper('.right-slider__container', {
  direction: 'vertical',
  slidesPerView: 4,
  //simulateTouch: false,
  slideToClickedSlide: true,
});

const clientSlider = new Swiper('.about__clients-list', {
  slidesPerView: 5,
  loop: true,
  spaceBetween: 16,
});

leftSlider.controller.control = rightSlider;
rightSlider.controller.control = leftSlider;

Vue.prototype.$myApp = 'orbis';

new Vue({
  beforeCreate: function() {
    console.log(this.$myApp)
  }
})
