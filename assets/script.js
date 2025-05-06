var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:false,
    margin:20,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },            
        1000:{
            items:3
        }
    }
});

// Gestisci rotellina del mouse sugli elementi .owl-item
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

// Gestisci il click del mouse sugli elementi .owl-item
owl.on('click', '.owl-item .image', function (e) {
    var viewportWidth = $(window).width();
    var clickX = e.clientX;

    if (clickX < viewportWidth / 2) {
        owl.trigger('prev.owl.carousel');
    } else {
        owl.trigger('next.owl.carousel');
    }
    });
});