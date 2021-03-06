$(document).ready(function(){
  $('.equip-carousel').bxSlider({
    slideWidth: 490,
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 1,
    pager: false,
    nextSelector: '.equip-next',
	  prevSelector: '.equip-prev',
	  nextText: '',
	  prevText: '',
    slideMargin: 30
  });
  $('#works-slider').bxSlider({
    nextSelector: '.works-next',
    prevSelector: '.works-prev',
    nextText: '',
    prevText: '',
  });

  $('.tel-input').inputmask("+7 (999) 999-99-99");

  var $panel = $(".top-panel");

  $(window).scroll(function(){
    if ( $(this).scrollTop() > 250 ){
      $panel.addClass("fixed");
    } 
    else {
      $panel.removeClass("fixed");
    }
  });

  $(".nav-menu a, .footer-menu ul a").click(function () {
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top - 119;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
  $('.sidebar-btn').each(function() {
    var dropdown = $(this).next();
    if(dropdown.length){
      $(this).click(function(e) {
        e.preventDefault()
        if(dropdown.is(':hidden')){
          dropdown.slideDown(250)
          $(this).addClass('active')
        }
        else{
          dropdown.slideUp(250)
          $(this).removeClass('active')
        }
      });
    }
  });
});

