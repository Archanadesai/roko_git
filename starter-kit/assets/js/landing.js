(function ($) {
  "use strict";
  // localstorage all setting

  $(".page-wrapper").attr("class", localStorage.getItem("page-wrapper"));

  // dubai layout
  $(".default-view").on("click", function (){
    localStorage.setItem("page-wrapper", "compact-wrapper modern-type");
  });

  $(".los-view").on("click", function (){
    localStorage.setItem("page-wrapper", "horizontal-wrapper material-type");
  });

  $(".paris-view").on("click", function (){
    localStorage.setItem("page-wrapper", "compact-wrapper dark-sidebar");
  });

  $(".tokyo-view").on("click", function (){
    localStorage.setItem("page-wrapper", "compact-sidebar");
  });

  $(".moscow-view").on("click", function (){
    localStorage.setItem("page-wrapper", "compact-sidebar compact-small");
  });

  $(".singapore-view").on("click", function (){
    localStorage.setItem("page-wrapper", "horizontal-wrapper enterprice-type");
  });

  $(".newyork-view").on("click", function (){
    localStorage.setItem("page-wrapper", "compact-wrapper box-layout");
  });

  $(".barcelona-view").on("click", function (){
    localStorage.setItem(
      "page-wrapper",
      "horizontal-wrapper enterprice-type advance-layout"
    );
  });

  $(".madrid-view").on("click", function (){
    localStorage.setItem("page-wrapper", "compact-wrapper color-sidebar");
  });

  $(".rome-view").on("click", function (){
    localStorage.setItem(
      "page-wrapper",
      "compact-sidebar compact-small material-icon"
    );
  });

  $(".seoul-view").on("click", function (){
    localStorage.setItem("compact-wrapper modern-type");
  });

  $(".landon-view").on("click", function (){
    localStorage.setItem("page-wrapper", " only-body");
  });

  $(".prooduct-details-box .close").on("click", function (e) {
    var tets = $(this).parent().parent().parent().parent().addClass("d-none");
    console.log(tets);
  });
})(jQuery);
