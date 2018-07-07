'use strict';

$(function() {

  $('.hamburger').click(function() {
    $(this)
      .find('.hamburger__btn')
      .toggleClass('hamburger__btn_on');

    $('.top-menu ul').slideToggle();

    return false;
  });

  function eventCheck(e) {
    let container = $('.top-menu ul');

    if ( !container.is(e.target) &&
      container.has(e.target).length === 0 &&
      !$(e.target).hasClass('hamburger') &&
      !$(e.target).hasClass('hamburger__btn') ) {
      container.fadeOut();

      $('.hamburger')
        .find('.hamburger__btn')
        .removeClass('hamburger__btn_on');
    }
  }

  document.addEventListener('touchstart', eventCheck, false);
  document.addEventListener('click', eventCheck, false);

});
