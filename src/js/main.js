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
  var height = 1190 - window.innerHeight
  if (window.scrollY >= height) {
    document.querySelector('.sidebar--top').style.position = 'relative';
    document.querySelector('.sidebar--top').style.top = height+'px';
    document.querySelector('.sidebar__catalog').style.marginTop = '32px';
    document.querySelector('.page-content__top').style.backgroundAttachment = 'unset';
    document.querySelector('.page-content__top').style.backgroundPositionY = height + 'px';
  }
  if(window.scrollY < height) {
    document.querySelector('.sidebar--top').style.position='fixed';
    document.querySelector('.sidebar--top').style.top=0;
    document.querySelector('.sidebar__catalog').style.marginTop = '1200px';
    document.querySelector('.page-content__top').style.backgroundAttachment = 'fixed';
    document.querySelector('.page-content__top').style.backgroundPositionY = '0px';
  }
}



const sidebarNav = document.querySelector('.sidebar__nav');

function isNodeExist(node) {
  var element = document.querySelector(node);
  return document.body.contains(element);
}


const navExpanded = Array.from(sidebarNav.querySelectorAll('li.expanded'));

function foldElement(element) {
  element.setAttribute('style', `
    height: 0px;
    overflow: hidden;
    transition: 0.3s;
    opacity: 0;
  `)

  element.parentNode.classList.remove('unfold')
}

navExpanded.map(function(item) {
  if (item.querySelector('ul')) {
    console.log(item.querySelector('ul').clientHeight)
    const innerList = item.querySelector('ul');
    innerList.setAttribute('data-height', innerList.clientHeight);

    foldElement(innerList);
  };

  var innerListAll = Array.from(item.parentNode.querySelectorAll('li.expanded ul'));

  const button = item.querySelector('span');
  button.addEventListener('click', function(event) {
    innerListAll.map(function(list) {
      foldElement(list)

    });


    var innerList = event.target.parentNode.querySelector('ul');
    if (innerList.clientHeight == 0) {
      innerList.setAttribute('style', `
        transition: 0.3s;
        height: ${innerList.getAttribute('data-height')}px;
        opacity: 1;
      `);
      
      event.target.parentNode.classList.toggle('unfold');


      
    }

    else {
      foldElement(innerList); 
    }
    
  })

})



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
