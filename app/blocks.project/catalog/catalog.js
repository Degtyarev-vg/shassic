'use strict';

$(function() {

  $('.catalog__btn-more').click(function() {
    $('.catalog ul').addClass('catalog-open');

    $(this).css('display', 'none');
    return false;
  })

});
