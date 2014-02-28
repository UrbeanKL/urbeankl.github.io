// Make height of each section == window height
$(function(){
  var windowHeight = $(window).height();
  $('.ub-section').each(function(i, e){
    $(e).height(windowHeight);
  });
})

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
        navbarToggle.toggleClass('ub-btn-active');
        mobileNav.toggleClass(expandedClass);
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
    var akLatLong = new google.maps.LatLng(3.159317,101.713077);
    var offcenter = new google.maps.LatLng(3.158706,101.695342);
    var ubInfoWindowContent = "<div class='ub-infowindow'>\
        <h1>Urbean KL</h1>\
        <p>\
          C-14 Avenue K,<br/>\
          50450 Kuala Lumpur\
        </p>\
        <p><a target='_blank' href='https://maps.google.com.my/maps?expflags=enable_star_based_justifications:true&ie=UTF8&f=d&daddr=Mj+Avenue+K,+156+Jalan+Ampang,+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur&geocode=CR6FaGrnlNCDFbg0MAAdFAQQBiGDDfyaLHprBw&gl=MY&hl=en'>\
        Directions</a></p>\
      </div>" ;

        var mapOptions = {
          center: new google.maps.LatLng(3.159317,101.713077),
          zoom: 15
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

        // Add Avenue K marker
        var marker = new google.maps.Marker({
          position: akLatLong,
          map: map,
          title: "Urbean KL"
        });

        var infowindow = new google.maps.InfoWindow({
          content: ubInfoWindowContent
        })

        google.maps.event.addListener(marker, 'click', function(){
          infowindow.open(map, marker);
        })
        infowindow.open(map, marker); 
        map.panTo(offcenter);
      }
      google.maps.event.addDomListener(window, 'load', initialize);
})
