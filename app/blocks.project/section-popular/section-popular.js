'use strict';

$(function() {

  let popularSlider = $('.section-popular__list').slick({
    infinite: true,
    fade: false,
    autoplay: false,
    speed: 300,
    slidesToShow: 3,
    swipeToSlide: true,
    dots: false,
    adaptiveHeight: false,
    arrows: true,
    appendArrows: $('.section-popular__navigation'),
    prevArrow: '<span class=\'section-popular__prev\'></span>',
    nextArrow: '<span class=\'section-popular__next\'></span>',
    responsive: [
      {
        breakpoint: 1310,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

});
