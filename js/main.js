$(function(){
    var navbarToggle = $('.navbar-toggle');

    $(".navbar-nav li a").click(function(){
        if(navbarToggle.is(":visible")){
            navbarToggle.trigger('click');
        }
    });
})