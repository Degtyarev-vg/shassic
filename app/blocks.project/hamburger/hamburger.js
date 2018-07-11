'use strict';

$(function() {

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

  function regulationsForMq(mq) {
    if (mq.matches) {
      $('.hamburger').click(function() {
        $(this)
          .find('.hamburger__btn')
          .toggleClass('hamburger__btn_on');

        $('.top-menu ul').slideToggle();

        return false;
      });

      document.addEventListener('touchstart', eventCheck, false);
      document.addEventListener('click', eventCheck, false);
    }
  }

  let mq = window.matchMedia('screen and (max-width: 992px)');

  mq.addListener(regulationsForMq);

  regulationsForMq(mq);

});
