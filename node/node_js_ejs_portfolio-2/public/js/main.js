/*******************************************IMAGE GALLERY*******************************************/

/*******Filtering*******/

// init Isotope
  var $grid = $('.img-grid').isotope({
    itemSelector: '.img-container',
    //layoutMode: 'fitRows',
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {

    },
  };

  // bind filter button click
  $('#filter-btn').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

/*******Popup Image Gallary in Porfolio*******/

$('.popup-gallery').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});

/*******************************************CAROUSEL IN MY CLIENTS*******************************************/

$(document).ready(function(){
  $('.loop').owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:10,
    responsive:{
      600:{
        items:1
      }
    }
  });
});

/*******************************************SCROLL MAGIC*******************************************/

/*******Scroll for the links*******/
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({triggerElement: "#hero", duration: $("#hero").height()}).setClassToggle("#hero-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#about", duration: $("#about").height() + 100}).setClassToggle("#about-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#services", duration: $("#services").height()}).setClassToggle("#services-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#portfolio", duration: $("#portfolio").height()}).setClassToggle("#portfolio-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#client", duration: $("#client").height() + 250}).setClassToggle("#client-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#contact", duration: $("#contact").height()}).setClassToggle("#contact-link", "active").addTo(controller);

/*******Other Scroll Magic Elements*******/

$(document).ready(function(){

  var controller2 = new ScrollMagic.Controller();

  //The about paragraph
  var about_scene = new ScrollMagic.Scene({
    triggerElement: '.about-text',
    triggerHook: .7
  })
  .setClassToggle('.about-text', 'about-text-animate')
  .reverse(false)
  .addTo(controller2);
    

  //Progress bars
  var progress_bar_scene = new ScrollMagic.Scene({

    triggerElement: '.about-resume',
    triggerHook: .7,

  })
  .setClassToggle('.inner-percent', 'inner-percent-animate')
  .reverse(false)
  .addTo(controller);
    
  //Icons in Services
  var about_scene = new ScrollMagic.Scene({
    triggerElement: '.trigger',
    triggerHook: .7
  })
  .setClassToggle('.icon', 'service-icon-animate')
  .reverse(false)
  .addTo(controller2);
    
});

/*******************************************MOBILE NAV*******************************************/
$('.mobile-toggle').click(function(){
  if($('#main-header').hasClass('open-nav')){
     $('#main-header').removeClass('open-nav');
  }else{
    $('#main-header').addClass('open-nav');
  }
});

/*******************************************NAV SCROLL*******************************************/
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

/*******************************************PRELOAD*******************************************/
var overlay = document.getElementById("preload-overlay");

window.addEventListener('load', function(){
  overlay.style.display = "none";
})