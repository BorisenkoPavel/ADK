$(document).ready(function () {

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
$( ".catalog-item--1" ).mouseenter(function() {
  anime({
    targets: '.svg-water',
    keyframes: [
      {translateY: -10, duration: 0},
      {translateY: 20},
    ],
    duration: 2000,
    delay: function(el, i) { return i * 200; },
    easing: 'linear',
    loop: true
  });
  anime({
    targets: '.svg-drop',
    keyframes: [
      {scale: 0, duration: 0},
      {scale: 1},
    ],
    duration: 1500,
    delay: function(el, i) { return i * 200; },
    easing: 'linear',
    loop: true
  });
});

$( ".catalog-item--1" ).mouseleave(function() {
  anime.remove('.svg-water');
  anime.remove('.svg-drop');
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

$( ".catalog-item--8" ).mouseenter(function() {
  anime.remove('.red-led');
  anime.remove('.svg-num');
  anime({
    targets: '.red-led',
    keyframes: [
      {fill: "#E1462B"},
      {fill: "#000"},
      {fill: "#E1462B"}
    ],
    duration: 2000,
    easing: 'linear',
    loop: true
  });

  anime({
    targets: '.svg-num',
    keyframes: [
      {translateX: 0, duration: 0},
      {translateX: 5},
      {translateX: -10},
      {translateX: 0},
    ],
    duration: 3000,
    delay: 0,
    easing: 'linear',
    loop: true
  });
});

$( ".catalog-item--8" ).mouseleave(function() {
  anime.remove('.red-led');
  anime.remove('.svg-num');
  anime({
    targets: '.red-led',
    fill: "#E1462B",
    duration: 630,
    easing: 'linear',
    loop: false
  });

  anime({
    targets: '.svg-num',
    translateX: 0,
    duration: 500,
    delay: 0,
    easing: 'linear',
    loop: false
  });
});
$( ".catalog-item--9" ).mouseenter(function() {
  anime.remove('.water-drop-svg--1');
  anime.remove('.water-drop-svg--2');
  anime.remove('.wave-svg--reverse');
  anime.remove('.wave-svg');
  anime({
    targets: '.water-drop-svg--1',
    keyframes: [
      {rotate: -18, translateX: -10, duration: 0},
      {rotate: 45, translateX: 30}
    ],
    duration: 2000,
    easing: 'linear',
    loop: true
  });
  anime({
    targets: '.water-drop-svg--2',
    keyframes: [
      {rotate: -50, translateX: -30, duration: 0},
      {rotate: 45, translateX: 30}
    ],
    duration: 2000,
    easing: 'linear',
    loop: true
  });

  anime({
    targets: '.wave-svg',
    keyframes: [
      {translateY: -1, duration: 0},
      {translateY: 0},
      {translateY: 1},
      {translateY: -1},
    ],
    duration: 2000,
    delay: 0,
    easing: 'linear',
    loop: true
  });
  anime({
    targets: '.wave-svg--reverse',
    keyframes: [
      {translateY: 1, duration: 0},
      {translateY: 0},
      {translateY: -1},
      {translateY: 1}
    ],
    duration: 2000,
    delay: 0,
    easing: 'linear',
    loop: true
  });
});

$( ".catalog-item--9" ).mouseleave(function() {
  anime.remove('.water-drop-svg--1');
  anime.remove('.water-drop-svg--2');
  anime.remove('.wave-svg--reverse');
  anime.remove('.wave-svg');
});

$( ".catalog-item--11" ).mouseenter(function() {
  anime.remove('.catalog-item--11 .catalog-icon');
  anime({
    targets: '.catalog-item--11 .catalog-icon',
    keyframes: [
      {translateX: 0},
      {translateX: -10},
      {translateX: 0, delay: 1000},
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
  anime.remove('.tape-icon');
  anime.remove('.tape-icon-line');
  anime({
    targets: '.tape-icon',
    keyframes: [
      {translateX: 0, rotate: 0},
      {translateX: 10, rotate: 50},
      {translateX: 0, rotate: 0, delay: 300},
    ],
    duration: 2000,
    easing: 'linear',
    loop: true
  });
  anime({
    targets: '.tape-icon-line',
    keyframes: [
      {scaleX: 1},
      {scaleX: .6},
      {scaleX: 1, delay: 300},
    ],
    duration: 2000,
    easing: 'linear',
    loop: true
  });
});

$( ".catalog-item--12" ).mouseleave(function() {
  anime.remove('.tape-icon');
  anime.remove('.tape-icon-line');
  anime({
    targets: '.tape-icon',
    rotate: 0,
    translateX: 0,
    delay: 0,
    duration: 500,
    easing: 'linear',
    loop: false
  });
  anime({
    targets: '.tape-icon-line',
    scaleX: 1,
    duration: 500,
    // delay: 0,
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

})