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
});