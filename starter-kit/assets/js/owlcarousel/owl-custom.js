/**=====================
    Owl-carousel js Start
==========================**/
var owl_carousel_custom = {
  init: function () {
    var owl = $("#owl-carousel-13");
    owl.owlCarousel({
      items: 5,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
      nav: false,
      responsive: {
        320: {
          items: 1,
          mergeFit: true,
        },
        768: {
          items: 2,
          mergeFit: true,
        },
        992: {
          items: 3,
          mergeFit: true,
        },
      },
    }),
      $(".play").on("click", function () {
        owl.trigger("play.owl.autoplay", [1000]);
      }),
      $(".stop").on("click", function () {
        owl.trigger("stop.owl.autoplay");
      }),
      $('#owl-carousel-14').owlCarousel({
        items:1,
        margin:10,
        autoHeight:true,
        dots: false,
        nav: true
    }),
    $('.owl-carousel-16').owlCarousel({
      loop: true,
      items:4,
      margin:20,
      autoHeight:true,
      nav: false,
      dots: false,
      responsive:{               
          320:{
              items:2,
              mergeFit:true,
          },
          480:{
              items:3,
              mergeFit:true,
          },
          1670 : {
              items:4,
              mergeFit:true
          }
      }
    });
    var owl = $("#owl-carousel-15");
    owl.owlCarousel({
      loop: true,
      nav: false,
      margin: 10,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        960: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    }),
      owl.on("mousewheel", ".owl-stage", function (e) {
        if (e.deltaY > 0) {
          owl.trigger("next.owl");
        } else {
          owl.trigger("prev.owl");
        }
        e.preventDefault();
      });
      $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
      $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
  },
};

(function ($) {
  "use strict";
  owl_carousel_custom.init();
})(jQuery);

/**=====================
  Owl-carousel Ends
==========================**/
