//Smooth scrolling. Taken from http://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});


// Responsive menu close on menu item click
$(function(){
    var navbarToggle = $('.navbar-toggle');

    $(".navbar-nav li a").click(function(){
        if(navbarToggle.is(":visible")){
            navbarToggle.trigger('click');
        }
    });
})


$(function(){
    var navbarToggle = $('.navbar-toggle');
    var mobileNav = $(".ub-mobile-nav");
    var expandedClass = 'ub-expanded';
    var space = 15;


    navbarToggle.click(function(){
        mobileNav.toggleClass(expandedClass)
        mobileNav.toggleClass('ub-hidden-mobile');
        if(mobileNav.hasClass(expandedClass)){
          mobileNav.css({
            paddingLeft: $('.ub-sidebar').width() + space * 2,
          })
        }

        else{
          mobileNav.css({
            paddingLeft: 0,
          })
        }

    })
})

// Maps
$(function(){
  function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(-34.397, 150.644),
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);
})
