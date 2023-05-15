$(document).ready(function() {
  var images = [
    {src: "/images/Pagine queer/pagine-queer_0.jpg", alt: "Pagine queer"},
    {src: "/images/Pagine queer/pagine-queer_1.jpg", alt: "Pagine queer"},
    {src: "/images/Pagine queer/pagine-queer_2.jpg", alt: "Pagine queer"},
    {src: "/images/Pagine queer/pagine-queer_3.jpg", alt: "Pagine queer"},
    {src: "/images/Pagine queer/pagine-queer_4.jpg", alt: "Pagine queer"},
    {src: "/images/Pagine queer/pagine-queer_5.jpg", alt: "Pagine queer"},
    {src: "/images/Pagine queer/pagine-queer_6.jpg", alt: "Pagine queer"},
    {src: "/images/Pagine queer/pagine-queer_7.jpg", alt: "Pagine queer"},
    {src: "/images/APC/APC_3.jpg", alt: "APC"},
    {src: "/images/APC/APC_2.jpg", alt: "APC"},
    {src: "/images/APC/APC_1.jpg", alt: "APC"},
    {src: "/images/APC/APC_4.jpg", alt: "APC"},
    {src: "/images/APC/APC_5.jpg", alt: "APC"},

  ];
  var currentImage = Math.floor(Math.random() * images.length);

  $(".showreel-image").attr("src", images[currentImage].src);
  $(".showreel-image").attr("alt", images[currentImage].alt);

  function changeImage(back) {
    if (back) {
      currentImage = (currentImage - 1 + images.length) % images.length;
    } else {
      currentImage = (currentImage + 1) % images.length;
    }
    $(".showreel-image").fadeOut(0, function() {
      $(".showreel-image").attr("src", images[currentImage].src);
      $(".showreel-image").attr("alt", images[currentImage].alt);
      $(".showreel-image").fadeIn(0);
    });
  }

  setInterval(changeImage, 4000);

  $(".showreel-image").on("click", function(event) {
    if (event.clientX < $(this).width() / 2) {
      changeImage(true);
    } else {
      changeImage();
    }
  });
});