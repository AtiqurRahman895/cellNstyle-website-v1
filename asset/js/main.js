

(function ($) {
    "use strict"
    $(window).on('load', function () {
      $('#preloader-active').delay(500).fadeOut('');
      $('body').delay().css({
        'overflow': 'visible'
      });
    });
  
  })(jQuery);



$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('header').addClass("sticky");
        }
        else {
            $('header').removeClass("sticky");
        }
    });
    // copyrights Year Auto-update
    function newDate() {
        return new Date().getFullYear();
    }
    document.onload = document.getElementById("autodate").innerHTML = + newDate();

});

$(document).ready(function () {

});



