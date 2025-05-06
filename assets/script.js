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
    

});
