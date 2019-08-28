// import {ModalEffects} from 'modalEffects.js';
// import {seyHi} from './modalEffects.js';

$(document).ready(function () {
	
	AOS.init();

  svg4everybody({});
  
 $('.hamburger').on('click', function(){
   $(this).toggleClass('is-active')
   $('.menu-content').toggleClass('is-active')
 })

 $( "#country" ).selectmenu();

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


