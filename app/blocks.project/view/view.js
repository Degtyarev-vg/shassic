'use strict';

$(function() {

  if(localStorage.getItem('catalogView') == 'false' || localStorage.getItem('catalogView') == null) {
    $('.view__icon_tile').addClass('view__icon_active');

    $('.section-catalog__list').removeClass('section-catalog__list_horizontal');
  } else if (localStorage.getItem('catalogView') == 'true') {
    $('.view__icon_list').addClass('view__icon_active');

    $('.section-catalog__list').addClass('section-catalog__list_horizontal');
  }

  $('.view__icon_tile').click(function() {
    $('.section-catalog__list').removeClass('section-catalog__list_horizontal');

    $('.view__icon_list').removeClass('view__icon_active');

    $(this).addClass('view__icon_active');

    localStorage.setItem('catalogView', false);

    $('.product__img-slider').slick('refresh');

    return false;
  });

  $('.view__icon_list').click(function() {
    $('.section-catalog__list').addClass('section-catalog__list_horizontal');

    $('.view__icon_tile').removeClass('view__icon_active');

    $(this).addClass('view__icon_active');

    localStorage.setItem('catalogView', true);

    $('.product__img-slider').slick('refresh');

    return false;
  });

});
