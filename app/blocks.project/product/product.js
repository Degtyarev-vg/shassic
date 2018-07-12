'use strict';

$(function() {

  $('.product').each(function() {
    $(this).find('.product__img').each(function() {
      let img = $(this).find('img').attr('src');

      $(this).css({
        'background' : 'url(' + img + ') center no-repeat',
        'background-size' : 'cover'
      })
    });
  });

  $('.product__img-slider').each(function() {
    $(this).slick({
      infinite: true,
      fade: false,
      autoplay: false,
      speed: 300,
      slidesToShow: 1,
      swipeToSlide: true,
      dots: false,
      adaptiveHeight: false,
      arrows: true,
      appendArrows: $(this).parent().find('.product__navigation'),
      prevArrow: '<span class=\'product__prev\'></span>',
      nextArrow: '<span class=\'product__next\'></span>',
    });

    let slideQuantity = $(this).slick('getSlick').slideCount;

    if(slideQuantity > 1){
      $(this)
        .parent()
        .find('.product__quantity-images')
        .css({'display' : 'inline-block'})
        .html(slideQuantity);
    }
  });

});
