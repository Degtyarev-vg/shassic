'use strict';

$(function() {

  $('.models__btn-more').click(function() {
    $('.models__inner').addClass('models__inner_open');

    $(this).css('display', 'none');
    return false;
  })

});
