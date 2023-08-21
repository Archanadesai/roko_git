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

  $(".bg-center").parent().addClass("b-center");
  $(".bg-img-cover").parent().addClass("bg-size");
  $(".bg-img-cover").each(function () {
    var el = $(this),
      src = el.attr("src"),
      parent = el.parent();
    parent.css({
      "background-image": "url(" + src + ")",
      "background-size": "cover",
      "background-position": "center",
      'display': "block",
    });
    el.hide();
  });


  

  jQuery(document).ready(function($){
    var dragging = false,
        scrolling = false,
        resizing = false;
    //cache jQuery objects
    var imageComparisonContainers = $('.cd-image-container');
    //check if the .cd-image-container is in the viewport 
    //if yes, animate it
    checkPosition(imageComparisonContainers);
    $(window).on('scroll', function(){
        if( !scrolling) {
            scrolling =  true;
            ( !window.requestAnimationFrame )
                ? setTimeout(function(){checkPosition(imageComparisonContainers);}, 100)
                : requestAnimationFrame(function(){checkPosition(imageComparisonContainers);});
        }
    });
    
    //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
    imageComparisonContainers.each(function(){
        var actual = $(this);
        drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
    });

    //upadate images label visibility
    $(window).on('resize', function(){
        if( !resizing) {
            resizing =  true;
            ( !window.requestAnimationFrame )
                ? setTimeout(function(){checkLabel(imageComparisonContainers);}, 100)
                : requestAnimationFrame(function(){checkLabel(imageComparisonContainers);});
        }
    });

    function checkPosition(container) {
        container.each(function(){
            var actualContainer = $(this);
            if( $(window).scrollTop() + $(window).height()*0.5 > actualContainer.offset().top) {
                actualContainer.addClass('is-visible');
            }
        });

        scrolling = false;
    }

    function checkLabel(container) {
        container.each(function(){
            var actual = $(this);
            updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
            updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
        });

        resizing = false;
    }

    //draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
    function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
        dragElement.on("mousedown vmousedown", function(e) {
            dragElement.addClass('draggable');
            resizeElement.addClass('resizable');

            var dragWidth = dragElement.outerWidth(),
                xPosition = dragElement.offset().left + dragWidth - e.pageX,
                containerOffset = container.offset().left,
                containerWidth = container.outerWidth(),
                minLeft = containerOffset + 10,
                maxLeft = containerOffset + containerWidth - dragWidth - 10;
            
            dragElement.parents().on("mousemove vmousemove", function(e) {
                if( !dragging) {
                    dragging =  true;
                    ( !window.requestAnimationFrame )
                        ? setTimeout(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);}, 100)
                        : requestAnimationFrame(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);});
                }
            }).on("mouseup vmouseup", function(e){
                dragElement.removeClass('draggable');
                resizeElement.removeClass('resizable');
            });
            e.preventDefault();
        }).on("mouseup vmouseup", function(e) {
            dragElement.removeClass('draggable');
            resizeElement.removeClass('resizable');
        });
    }

    function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement) {
        var leftValue = e.pageX + xPosition - dragWidth;   
        //constrain the draggable element to move inside his container
        if(leftValue < minLeft ) {
            leftValue = minLeft;
        } else if ( leftValue > maxLeft) {
            leftValue = maxLeft;
        }

        var widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
        
        $('.draggable').css('left', widthValue).on("mouseup vmouseup", function() {
            $(this).removeClass('draggable');
            resizeElement.removeClass('resizable');
        });

        $('.resizable').css('width', widthValue); 

        updateLabel(labelResizeElement, resizeElement, 'left');
        updateLabel(labelContainer, resizeElement, 'right');
        dragging =  false;
    }

    function updateLabel(label, resizeElement, position) {
        if(position == 'left') {
            ( label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
        } else {
            ( label.offset().left > resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
        }
    }
});

$(".circle_percent").each(function() {
  var $this = $(this),
  $dataV = $this.data("percent"),
  $dataDeg = $dataV * 3.6,
  $round = $this.find(".round_per");
$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");	
$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
$this.prop('Counter', 0).animate({Counter: $dataV},
{
  duration: 2000, 
  easing: 'swing', 
  step: function (now) {
          $this.find(".percent_text").text(Math.ceil(now));
      }
  });
if($dataV >= 51){
  $round.css("transform", "rotate(" + 360 + "deg)");
  setTimeout(function(){
    $this.addClass("percent_more");
  },1000);
  setTimeout(function(){
    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
  },1000);
} 
});


  //landing header //
  $(".toggle-menu").on('click', function (){
      $('.landing-menu').toggleClass('open');
  });   
  $(".menu-back").on('click', function (){
      $('.landing-menu').toggleClass('open');
  });  
  
  $(".md-sidebar-toggle").on('click', function (){
      $('.md-sidebar-aside').toggleClass('open');
  });
  
})(jQuery);
