'use strict';

$(function() {

  $('.section-card').each(function() {
    $(this).find('.section-card__img').each(function() {
      let img = $(this).find('img').attr('src');

      $(this).css({
        'background' : 'url(' + img + ') center no-repeat',
        'background-size' : 'cover'
      })
    });
  });

  $('.section-card__img-slider').each(function() {
    $(this).slick({
      infinite: true,
      fade: false,
      autoplay: false,
      speed: 300,
      slidesToShow: 1,
      swipeToSlide: true,
      swipe: true,
      dots: false,
      adaptiveHeight: false,
      arrows: true,
      appendArrows: $(this).parent().find('.section-card__navigation'),
      prevArrow: '<span class=\'section-card__prev\'></span>',
      nextArrow: '<span class=\'section-card__next\'></span>',
    });

    let slideQuantity = $(this).slick('getSlick').slideCount;

    if(slideQuantity > 1){
      $(this)
        .parent()
        .find('.section-card__quantity-images')
        .css({'display' : 'inline-block'})
        .html(slideQuantity);
    }
  });

});
