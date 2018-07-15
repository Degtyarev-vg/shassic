'use strict';

$(function() {

  $('.catalog-menu__open-menu').click(function() {
    $(this).toggleClass('catalog-menu__open-menu_active');

    $('.catalog-menu__content').slideToggle();

    return false;
  });

  function regulationsForMq(mq) {
    if (mq.matches) {

      $('.dropdown > a').click(function() {
        $(this)
          .parent('.dropdown')
          .toggleClass('open')
          .find('ul')
          .slideToggle();

        return false;
      });

    } else {
      $('.dropdown a')
        .unbind('click');

      $('.dropdown')
        .removeClass('open');

      $('.dropdown ul')
        .css('display', 'none');
    }
  }

  let mq = window.matchMedia('screen and (max-width: 1310px)');

  mq.addListener(regulationsForMq);

  regulationsForMq(mq);

});
