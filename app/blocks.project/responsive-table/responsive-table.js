'use strict';

$(function() {

  $('input[name=quantity]').bind('change keyup input click', function() {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
  });

  $('input[name=quantity]').bind('focusout', function() {
    let length = this.value.length;

    if (length < 1 || this.value == 0) {
      this.value = 1;
    }
  });

});
