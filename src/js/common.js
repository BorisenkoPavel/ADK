// import {ModalEffects} from 'modalEffects.js';
// import {seyHi} from './modalEffects.js';

$(document).ready(function () {
	
	AOS.init();

  svg4everybody({});
  
  $( ".icon-link-block--login" ).mouseenter(function() {
    anime({
      targets: '.svg-arrow',
      keyframes: [
        {translateY: -4},
        {translateY: 0},
        {translateY: -4},
        {translateY: 0}
      ],
      duration: 2000,
      easing: 'linear',
      loop: false
    });
  });
  $( ".catalog-item--4" ).mouseenter(function() {
    anime({
      targets: '.right-gulp-block',
      keyframes: [
        {translateX: 0, duration: 0},
        {translateX: 5},
        {translateX: 0, delay: 500},
      ],
      duration: 1000,
      easing: 'linear',
    });
    anime({
      targets: '.left-gulp-block',
      keyframes: [
        {translateY: 0, duration: 0},
        {translateY: -5},
        {translateY: 0, delay: 500},
      ],
      duration: 1000,
      easing: 'linear',
    });
  });

  $( ".catalog-item--4" ).mouseleave(function() {
    anime.remove('.right-gulp-block');
    anime.remove('.left-gulp-block');
    anime({
      targets: '.left-gulp-block',
      keyframes: [
        {translateY: 0},
      ],
      duration: 0,
    });
    anime({
      targets: '.right-gulp-block',
      keyframes: [
        {translateX: 0, duration: 0},
      ],
    });
  });

  $( ".catalog-item--2" ).mouseenter(function() {
    anime({
      targets: '.valve-svg',
      keyframes: [
        {rotate: 0, duration: 0, translateY: 0, translateX: 0},
        {rotate: -10, translateY: 2, translateX: 3},
        {rotate: 0, delay: 250, translateY: 0, translateX: 0, delay: 250},
      ],
      duration: 1000,
      easing: 'linear',
      loop: false
    });
    anime({
      targets: '.drop-svg',
      keyframes: [
        {scale: 0, duration: 0, delay: 250},
        {scale: 1,},
        {opacity: 0},
      ],
      duration: 1000,
      easing: 'linear',
      loop: false
    });
  });

  $( ".catalog-item--2" ).mouseleave(function() {
    anime.remove('.valve-svg');
    anime.remove('.drop-svg');
    anime({
      targets: '.valve-svg',
      keyframes: [
        {rotate: 0, translateY: 0, translateX: 0},
      ],
      duration: 500,
      easing: 'linear',

    });
    anime({
      targets: '.drop-svg',
      keyframes: [
        {scale: 1, opacity: 1},
      ],
      duration: 500,
      easing: 'linear',
    });
  });
  $( ".catalog-item--3" ).mouseenter(function() {
    anime({
      targets: '.big-disk',
      keyframes: [
        {rotate: 0, duration: 0},
        {rotate: -360, duration: 2500}
      ],
      easing: 'linear',
      loop: true
    });
    anime({
      targets: '.small-disk',
      keyframes: [
        {rotate: 0, duration: 0},
        {rotate: 360, duration: 2000}
      ],
      easing: 'linear',
      loop: true
    });
  });

  $( ".catalog-item--3" ).mouseleave(function() {
    anime.remove('.big-disk');
    anime.remove('.small-disk');
  });

  $( ".catalog-item--4" ).mouseenter(function() {
    anime({
      targets: '.valve-icon',
      keyframes: [
        {rotateY: 0, duration: 0},
        {rotateY: 360, duration: 2000}
      ],
      easing: 'linear',
      loop: true
    });
  });

  $( ".catalog-item--4" ).mouseleave(function() {
    anime.remove('.valve-icon');
  });

  $( ".catalog-item--5" ).mouseenter(function() {
    anime({
      targets: '.svg-arrow-item',
      keyframes: [
        {rotate: 0, duration: 0},
        {rotate: 90, duration: 1000},
        {rotate: -110, duration: 1000},
        {rotate: 0, duration: 1000}
      ],
      easing: 'linear',
      loop: true
    });
    anime({
      targets: '.svg-drops path',
      keyframes: [
        {scale: 0, opacity: 1, duration: 0},
        {scale: 1, opacity: 1},
        {scale: 1, opacity: 0, duration: 300},
      ],
      duration: 3000,
      delay: function(el, i, l) {
        return i * 50;
      },
      endDelay: function(el, i, l) {
        return (l - i) * 50;
      },
      easing: 'linear',
      loop: true
    });
  });

  $( ".catalog-item--5" ).mouseleave(function() {
    anime.remove('.svg-arrow-item');
    anime.remove('.svg-drops path');
    anime({
      targets: '.svg-drops path',
      keyframes: [
        {scale: 1, opacity: 1, duration: 500},
      ],
      easing: 'linear',
    });
  });

  $( ".catalog-item--6" ).mouseenter(function() {
    anime({
      targets: '.steam-icon path',
      keyframes: [
        {strokeDashoffset: [anime.setDashoffset, 0], stroke: "#C5CBD1"},
      //   {stroke: "#fff"},
      ],
      easing: 'easeInOutSine',
      duration: 2000,
      delay: function(el, i) { return i * 250 },
      direction: 'normal',
      loop: true
    });
  });

  $( ".catalog-item--6" ).mouseleave(function() {
    anime.remove('.steam-icon path');
  });

  $( ".catalog-item--7" ).mouseenter(function() {
    anime({
      targets: '.svg-cap',
      keyframes: [
        {rotate: 0, translateX: 0, translateY: 0, duration: 0},
        {rotate: -90, translateX: 8, translateY: -4},
        {rotate: 0, translateX: 0, translateY: 0, delay: 500}
      ],
      easing: 'easeInOutSine',
      duration: 3000,
    });
  });

  $( ".catalog-item--7" ).mouseleave(function() {
    anime.remove('.svg-cap');
  });

  $( ".catalog-item--8" ).mouseenter(function() {
    anime.remove('.svg-item-8');
    anime({
      targets: '.svg-item-8',
      keyframes: [
        {rotate: 0, duration: 0},
        {rotate: 175, duration: 1500, easing: 'easeOutSine'},
        {rotate: 280, duration: 2500, easing: 'linear'},
        {rotate: 0, duration: 1000, easing: 'linear'}
      ],
      loop: true
    });
  });

  $( ".catalog-item--8" ).mouseleave(function() {
    anime.remove('.svg-item-8');
    anime({
      targets: '.svg-item-8',
      keyframes: [
        {rotate: 0,}
      ],
      duration: 1000,
      easing: 'linear',
      loop: false
    });
  });

  $( ".catalog-item--9" ).mouseenter(function() {
    anime.remove('.water-drop-svg--41');
    anime({
      targets: '.water-drop-svg--41',
      keyframes: [
        {rotate: -50, translateX: -50, translateY: 2,duration: 0, opacity: 1},
        {rotate: 0, translateX: 0, translateY: 0, opacity: 1},
        {rotate: 10, translateX: 13, translateY: 3, opacity: 0},
      ],
      duration: 3000,
      easing: 'linear',
      loop: true
    });
  });

  $( ".catalog-item--9" ).mouseleave(function() {
    anime.remove('.water-drop-svg--41');
  })
  $( ".catalog-item--10" ).mouseenter(function() {
    anime.remove('.unclean-drops');
    anime({
      targets: '.unclean-drops',
      keyframes: [
        {translateY: -1, opacity: 0, duration: 0, delay: 500,},
        {translateY: 0, opacity: 1, duration: 500},
        {translateY: 20, opacity: 1, duration: 1000},
      ],
      duration: 2000,
      easing: 'linear',
      loop: true
    });
    anime({
      targets: '.clean-drops',
      keyframes: [
        {translateY: 0, opacity: 1, duration: 0},
        {translateY: 0, opacity: 0, duration: 500},
        {translateY: -20, opacity: 1, duration: 0, delay: 500},
        {translateY: 0, opacity: 1, duration: 1000},
      ],
      duration: 2000,
      easing: 'linear',
      loop: true
    });
  });

  $( ".catalog-item--10" ).mouseleave(function() {
    anime.remove('.clean-drops');
    anime.remove('.unclean-drops');
    anime({
      targets: '.clean-drops',
      keyframes: [
        {translateY: 0, opacity: 1, duration: 500},
      ],
      easing: 'linear',
    });
    anime({
      targets: '.unclean-drops',
      keyframes: [
        {translateY: 0, opacity: 1, duration: 500},
      ],
      easing: 'linear',
    });
  });

  $( ".catalog-item--11" ).mouseenter(function() {
    anime.remove('.catalog-item--11 .catalog-icon');
    anime({
      targets: '.catalog-item--11 .catalog-icon',
      keyframes: [
        {translateX: 0},
        {translateX: -10},
        // {translateX: 0, delay: 1000},
      ],
      duration: 2000,
      easing: 'linear',
      loop: true
    });
  });

  $( ".catalog-item--11" ).mouseleave(function() {
    anime.remove('.catalog-item--11 .catalog-icon');
    anime({
      targets: '.catalog-item--11 .catalog-icon',
      translateX: 0,
      duration: 1000,
      easing: 'linear',
      loop: false
    });
  });
  
  $( ".catalog-item--12" ).mouseenter(function() {
    anime.remove('.tubik');
    anime.remove('.gel-svg');
    anime({
      targets: '.tubik',
      keyframes: [
        {translateX: 0, duration: 0},
        {translateX: 15, duration: 1000},
        {translateX: 0, duration: 1000},
      ],
      duration: 2000,
      easing: 'linear',
      loop: true
    });
    anime({
      targets: '.gel-svg',
      keyframes: [
        {scale: 1, opacity: 1, duration: 0},
        {scale: 1, opacity: 0, duration: 1000},
        {scale: 0, opacity: 1, duration: 0},
        {scale: 1, opacity: 1, duration: 1000},
      ],
      duration: 2000,
      easing: 'linear',
      loop: true
    });
  });

  $( ".catalog-item--12" ).mouseleave(function() {
    anime.remove('.gel-svg');
    anime.remove('.tubik');
    anime({
      targets: '.tubik',
      delay: 0,
      keyframes: [
        {translateX: 0, duration: 500},
      ],
      duration: 500,
      easing: 'linear',
      loop: false
    });
    anime({
      targets: '.gel-svg',     
      keyframes: [
        {scale: 1, opacity: 1, duration: 500},
      ],
      easing: 'linear',
      loop: false
    });
  });

  $( ".icon-link-block--lk" ).mouseenter(function() {
    anime({
      targets: '.svg-boss',
      keyframes: [
        {scale: .8},
        {scale: 1},
      ],
      duration: 1000,
      easing: 'linear',
      loop: false
    });
  });

  $( ".icon-link-block--basket" ).mouseenter(function() {
    anime({
      targets: '.basket-left',
      rotate: -41,
      translateX: 1,
      translateY: 3,
      duration: 300,
      easing: 'linear',
      loop: false
    });
    anime({
      targets: '.basket-right',
      rotate: 36,
      translateX: -1,
      translateY: 3,
      duration: 300,
      easing: 'linear',
      loop: false
    });
  });

  $( ".icon-link-block--basket" ).mouseleave(function() {
    anime({
      targets: '.basket-left',
      rotate: 0,
      translateX: 0,
      translateY: 0,
      duration: 300,
      easing: 'linear',
      loop: false
    });
    anime({
      targets: '.basket-right',
      rotate: 0,
      translateX: 0,
      translateY: 0,
      duration: 300,
      easing: 'linear',
      loop: false
    });
  });
  

  $('.filtr-block-title').on('click', function(){
    $('.filtr-block').slideToggle()
  })

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

  $( "#tabs" ).tabs();
  
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

  if(window.location.toString().indexOf('cart/')>0)
  {
    $( window ).resize(function() {
      if($(window).width() <= 992) {
        $('.card-item__list').removeClass('card-item__list--row')
      } else {
        $('.card-item__list').addClass('card-item__list--row')
      }
    });
    if($(window).width() <= 992) {
      $('.card-item__list').removeClass('card-item__list--row')
    } else {
      $('.card-item__list').addClass('card-item__list--row')
    }
  }

  $('.go-to-top').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body, html').animate({scrollTop: top}, 350);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 600) {
      $('.header-bottom').addClass('is-active')
      $('.go-to-top').addClass('is-active')
      } else {
        $('.go-to-top').removeClass('is-active')
        $('.header-bottom').removeClass('is-active')

      }
    })

  })


