$(document).ready(function () {
    var owl = $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoWidth: true,
        mouseDrag: false,
        nav: false,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });

    // Abilita la funzionalità mousewheel utilizzando il plugin jquery.mousewheel.js
    $('.owl-carousel').on('mousewheel', '.owl-stage', function (e) {
        if (e.originalEvent.deltaY > 0) {
            owl.trigger('prev.owl.carousel');
        } else {
            owl.trigger('next.owl.carousel');
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
