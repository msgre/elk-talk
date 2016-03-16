(function () {
  'use strict';

  //
  // Sticky Toggle Button
  var lastScrollTop = 0, delta = 100;

  $(window).scroll(function(event){
    var st = $(this).scrollTop();

    if(Math.abs(lastScrollTop - st) <= delta)
      return;

    if (st > lastScrollTop){
      // downscroll code
      $(".sp-navbar-toggle").removeClass('sp-show-btn')
    } else {
      // upscroll code
      $(".sp-navbar-toggle").addClass('sp-show-btn');
    }
    lastScrollTop = st;
  });

  // Off Canvas
  $(".sp-off-canvas").niceScroll(".sp-off-canvas-inner",{
    cursorcolor:"#929292",
    cursoropacitymax:.7,
    cursorwidth: "6px",
    cursorborder: "none",
    boxzoom:false,
    gesturezoom: false,
    grabcursorenabled: false
  });

  $(".sp-top").on('click', function( e ) {
    e.preventDefault();

    $(".sp-off-canvas").getNiceScroll(0).doScrollTop( 0 );
  });

  //
  // Share this
  $(document).ready(function () {

    var triggerBtn  = $('.sp-navbar-toggle'),
      body     = $('body');

    triggerBtn.on('click', function () {
      body.addClass('sp-canvas-show');
    });

    $('.sp-close-btn').on('click', function () {
      body.removeClass('sp-canvas-show');
    });

    $('.sp-content-wrap').on('click', function () {
      body.removeClass('sp-canvas-show');
    });

  });


})();