// import {ModalEffects} from 'modalEffects.js';
// import {seyHi} from './modalEffects.js';

$(document).ready(function () {
	
	AOS.init();

  svg4everybody({});
  
  $('.hamburger').on('click', function(){
    $(this).toggleClass('is-active')
    $('.menu-content').toggleClass('is-active')
  })

  $( "#inputCountry" ).selectmenu();
  $( "#inputLength" ).selectmenu();
  $( "#inputWidth" ).selectmenu();
  $( "#inputDeep" ).selectmenu();
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 200,
    to: 500,
  });

  // $(function() {
  //   var lastElement = false;
  //   $(".catalog-item__link-items > .catalog-item__link-item").each(function() {
  //       if (lastElement && lastElement.offset().top != $(this).offset().top) {
  //           lastElement.addClass("nobullet");
  //       }
  //       lastElement = $(this);
  //   }).last().addClass("nobullet");
  // });​


})


