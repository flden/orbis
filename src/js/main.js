import ScrollReveal from 'scrollreveal';
import Vue from 'vue';

const leftSlider = new Swiper('.left-slider__container', {
  direction: 'vertical',
  simulateTouch: false,
  autoplay: true,
  effect: 'fade'
});

const rightSlider = new Swiper('.right-slider__container', {
  direction: 'vertical',
  slidesPerView: 4,
  simulateTouch: false,
  slideToClickedSlide: true,
});

const clientSlider = new Swiper('.about__clients-list', {
  slidesPerView: 5,
  loop: true,
  spaceBetween: 16,
});

const topSlidesList = Array.from(document.querySelectorAll('.right-slider__slide'));

//topSlidesList.map(slide => {
  //slide.addEventListener('click', event => {
    //console.log(event.target.closest('.right-slider__slide'))
    //event.target.closest('.right-slider__slide').querySelector('.right-slider__slide-desc-wrap').classList.toggle('hide');
  //})
//})


leftSlider.controller.control = rightSlider;
rightSlider.controller.control = leftSlider;

Vue.prototype.$myApp = 'orbis';

new Vue({
  beforeCreate: function() {
    console.log(this.$myApp)
  }
})
