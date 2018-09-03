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


window.onscroll = function(){
  if (window.scrollY >= (1525 - window.innerHeight)) {
    console.log(123)
    document.querySelector('.sidebar--top').style.position = 'relative';
    document.querySelector('.sidebar--top').style.top = (1525 - window.innerHeight)+'px';
    document.querySelector('.sidebar__catalog').style.marginTop = '32px';
  }
  if(window.scrollY < (1525 - window.innerHeight)) {
    document.querySelector('.sidebar--top').style.position='fixed';
    document.querySelector('.sidebar--top').style.top=0;
    document.querySelector('.sidebar__catalog').style.marginTop = '1525px';
  }
}

//topSlidesList.map(slide => {
  //slide.addEventListener('click', event => {
    //console.log(event.target.closest('.right-slider__slide'))
    //event.target.closest('.right-slider__slide').querySelector('.right-slider__slide-desc-wrap').classList.toggle('hide');
  //})
//})

Array.from(document.querySelectorAll('.solutions__gallery-item-title')).map(item => {
  item.addEventListener('click', function(event) {
    Array.from(document.querySelectorAll('.solutions__gallery-item-title')).map(_item => {
      _item.classList.remove('active');
    })

    event.target.classList.add('active')
  })
})


leftSlider.controller.control = rightSlider;
rightSlider.controller.control = leftSlider;

Vue.prototype.$myApp = 'orbis';

new Vue({
  beforeCreate: function() {
    console.log(this.$myApp)
  }
})
