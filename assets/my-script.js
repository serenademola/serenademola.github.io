document.addEventListener("DOMContentLoaded", function() {
  // Showreel
  var images = [
    {src: "/images/Pagine queer/pagine-queer_1.jpg", alt: "", caption: "Pagine queer. Le riviste indipendenti come luogo d'intersezione* Editorial & Research* MA Thesis* 2023"},
    {src: "/images/Pagine queer/pagine-queer_2.jpg", alt: "", caption: "Pagine queer. Le riviste indipendenti come luogo d'intersezione* Editorial & Research* MA Thesis* 2023"},
    {src: "/images/Pagine queer/pagine-queer_3.jpg", alt: "", caption: "Pagine queer. Le riviste indipendenti come luogo d'intersezione* Editorial & Research* MA Thesis* 2023"},
    {src: "/images/Pagine queer/pagine-queer_4.jpg", alt: "", caption: "Pagine queer. Le riviste indipendenti come luogo d'intersezione* Editorial & Research* MA Thesis* 2023"},
    {src: "/images/Pagine queer/pagine-queer_5.jpg", alt: "", caption: "Pagine queer. Le riviste indipendenti come luogo d'intersezione* Editorial & Research* MA Thesis* 2023"},

    {src: "/images/APC/APC_2-1.jpg", alt: "", caption: "Al Perpetuo Crepuscolo* Seminar, Workshop & Identity* 2022"},
    {src: "/images/APC/APC_3.jpg", alt: "", caption: "Al Perpetuo Crepuscolo* Seminar, Workshop & Identity* 2022"},
    {src: "/images/APC/APC_5.jpg", alt: "", caption: "Al Perpetuo Crepuscolo* Seminar, Workshop & Identity* 2022"},
    {src: "/images/APC/APC_1.jpg", alt: "", caption: "Al Perpetuo Crepuscolo* Seminar, Workshop & Identity* 2022"},
    {src: "/images/Annuario/ANNUARIO_1.jpg", alt: "", caption: "Annuario della Ricerca Iuav 2019-2020* Editorial & Data* 2022"},
    {src: "/images/Annuario/ANNUARIO_5.jpg", alt: "", caption: "Annuario della Ricerca Iuav 2019-2020* Editorial & Data* 2022"},


  ];

  var currentImage = Math.floor(Math.random() * images.length);
  var showreelImage = document.getElementById("showreel-image");
  var captionElement = document.querySelector(".caption");

  function changeImage(back) {
    if (back) {
      currentImage = (currentImage - 1 + images.length) % images.length;
    } else {
      currentImage = (currentImage + 1) % images.length;
    }
    showreelImage.src = images[currentImage].src;
    showreelImage.alt = images[currentImage].alt;
    captionElement.textContent = images[currentImage].caption;
  }

  showreelImage.src = images[currentImage].src;
  showreelImage.alt = images[currentImage].alt;
  captionElement.textContent = images[currentImage].caption;

  setInterval(changeImage, 3000);

  // Show/Hide Hidden Text on Click
  var headerLink = document.querySelector('.header-link');
  var hiddenText = document.querySelector('.hidden-text');

  headerLink.addEventListener('click', function(e) {
    e.preventDefault();
    if (hiddenText.style.display === 'none') {
      hiddenText.style.display = 'block';
    } else {
      hiddenText.style.display = 'none';
    }
  });
});
