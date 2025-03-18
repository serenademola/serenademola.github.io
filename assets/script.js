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
    //$('.owl-carousel').on('mousewheel', '.owl-stage', function (e) {
    //    if (scrolling) return;  // Se stiamo già scorrendo, non fare nulla
    //    scrolling = true;
    //
   //     if (e.originalEvent.deltaY > 0) {
    //        owl.trigger('next.owl.carousel');  // Scorri avanti
    //    } else {
    //        owl.trigger('prev.owl.carousel');  // Scorri indietro
    //    }

    // Disabilita il drag quando l'utente sta selezionando il testo
    $(document).on('selectstart', function () {
        isTextSelecting = true;
        owl.trigger('destroy.owl.carousel');  // Disabilita temporaneamente il carosello
    });

    // Riabilita il drag una volta che la selezione del testo è terminata
    $(document).on('mouseup', function () {
        if (isTextSelecting) {
            owl.owlCarousel();  // Riabilita il carosello dopo il rilascio della selezione
            isTextSelecting = false;
        }
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
