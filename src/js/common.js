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

  $('.count-block__minus').click(function () {
    var $input = $(this).parent().find('.count-block__value');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });

  $('.count-block__plus').click(function () {
    var $input = $(this).parent().find('.count-block__value');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  })
  
  $('.sort-icon').on('click', function(){
    $('.sort-icon').removeClass('active')
    $(this).addClass('active')
    if($('.icon-row').hasClass('active')) {
      $('.card-item__list').addClass('card-item__list--row')
    } else {
      $('.card-item__list').removeClass('card-item__list--row')
    }
  })


  var marker = true;
	function count() {
			$('#num1').animate({
					num: 25 - 0 /* - начало */
				}, {
					duration: 1500,
					step: function (num) {
						this.innerHTML = ((num + 0).toFixed()).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')
					}
				});
				$('#num2').animate({
					num2: 73 - 0 /* - начало */
				}, {
					duration: 1500,
					step: function (num2) {
						this.innerHTML = ((num2 + 0).toFixed()).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')
					}
				});
				$('#num3').animate({
					num3: 3 - 0 /* - начало */
				}, {
					duration: 1500,
					step: function (num3) {
						this.innerHTML = ((num3 + 0).toFixed()).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')
					}
				});
				$('#num4').animate({
					num4: 55 - 0 /* - начало */
				}, {
					duration: 1500,
					step: function (num4) {
						this.innerHTML = ((num4 + 0).toFixed()).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')
					}
				});

			marker = false;
	}


  if(window.location.toString().indexOf('company.html')>0)
  {
    $(window).scroll(function () {

        var offset = $('.number-block').offset()
      		if ($(this).scrollTop() >= offset.top-300) {
      				if ( marker ) {
                count();
            }
      		}
    
      })
  }

  })


