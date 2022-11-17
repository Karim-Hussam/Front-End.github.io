$(document).ready(function(){
    // Hero slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:false,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed:1000,
        navText: ['PREV', 'NEXT'],
        responsive:{
            0:{
                nav: false
            },
            768:{
                nav: true
            }
        }
    });

    // Project slider
    $('#project-slider').owlCarousel({
        loop:true,
        margin:6,
        nav:false,
        dots:true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed:1000,
        center:true,
        responsive:{
            0:{
                items: 1,
            },
            768:{
                items: 2,
            },
            1140:{
                items: 2,
            }
        }
    });

    $('#reviews-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        items:1,
        autoplay: true,
        autoplayTimeout: 10000,
        smartSpeed:2000
    })
});


