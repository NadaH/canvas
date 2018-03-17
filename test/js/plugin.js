$(document).ready(function(){
    $(".slider .owl-carousel").owlCarousel({
        margin:30,
        stagePadding:30,
        smartSpeed:450,
        autoplay:true,
        loop:true,
        responsive:{
            0:{items:1},
            600:{items:3},
            1000:{items:3}
        }
    });
})
