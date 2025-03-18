$(document).ready(function () {
    var owl = $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoWidth: true,
        mouseDrag: false,
        nav: false,
        smartSpeed: 1000,   // Velocità di transizione più lenta (1000ms)
        autoplaySpeed: 1000,  // Autoplay rallentato
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });

    // Variabile per debouncing (previene movimenti rapidi continui)
    var scrolling = false;
    
    // Abilita la funzionalità mousewheel utilizzando il plugin jquery.mousewheel.js
    $('.owl-carousel').on('mousewheel', '.owl-stage', function (e) {
        if (scrolling) return;  // Se stiamo già scorrendo, non fare nulla
        scrolling = true;

        if (e.originalEvent.deltaY > 0) {
            owl.trigger('next.owl.carousel');  // Scorri avanti
        } else {
            owl.trigger('prev.owl.carousel');  // Scorri indietro
        }

        // Debouncing: evita che il carosello si muova troppo velocemente
        setTimeout(function() {
            scrolling = false;  // Consenti un nuovo scroll dopo 300ms
        }, 300);  // Timeout di 300ms per debouncing

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
