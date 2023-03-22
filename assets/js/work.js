$(document).ready(function() {
  var images = [
      {src: "/images/ANNUARIO_1.jpg", alt: "Annuario_1", caption: "Annuario della Ricerca Iuav ✹ Editorial and Data Visualization ✹ 2022"},
      {src: "/images/ANNUARIO_2.jpg", alt: "Annuario_2", caption: "Annuario della Ricerca Iuav ✹ Editorial and Data Visualization ✹ 2022"},
      {src: "/images/ANNUARIO_3.jpg", alt: "Annuario_3", caption: "Annuario della Ricerca Iuav ✹ Editorial and Data Visualization ✹ 2022"},
      {src: "/images/ANNUARIO_4.jpg", alt: "Annuario_4", caption: "Annuario della Ricerca Iuav ✹ Editorial and Data Visualization ✹ 2022"},

      {src: "/images/APC_1.jpg", alt: "APC_1", caption: "Al Perpetuo Crepuscolo ✹ Seminar, Workshop and Identity ✹ 2022-2023"},
      {src: "/images/APC_2.jpg", alt: "APC_2", caption: "Al Perpetuo Crepuscolo ✹ Seminar, Workshop and Identity ✹ 2022-2023"},
      {src: "/images/APC_3.jpg", alt: "APC_3", caption: "Al Perpetuo Crepuscolo ✹ Seminar, Workshop and Identity ✹ 2022-2023"},
      {src: "/images/APC_4.jpg", alt: "APC_4", caption: "Al Perpetuo Crepuscolo ✹ Seminar, Workshop and Identity ✹ 2022-2023"},


      {src: "/images/Cronografie_1.jpg", alt: "Cronografie_1", caption: "Cronografie. Riflessioni sulla percezione e raffigurazione del tempo ✹ BA Thesis ✹ 2020"},
      {src: "/images/Cronografie_2.jpg", alt: "Cronografie_2", caption: "Cronografie. Riflessioni sulla percezione e raffigurazione del tempo ✹ BA Thesis ✹ 2020"},
      {src: "/images/Cronografie_3.jpg", alt: "Cronografie_3", caption: "Cronografie. Riflessioni sulla percezione e raffigurazione del tempo ✹ BA Thesis ✹ 2020"},
      {src: "/images/Cronografie_4.jpg", alt: "Cronografie_4", caption: "Cronografie. Riflessioni sulla percezione e raffigurazione del tempo ✹ BA Thesis ✹ 2020"},

      

      {src: "/images/Atlante_1.jpg", alt: "Atlante_1", caption: "Atlante della trasformazione digitale della PA ✹ Editorial and Data Visualization ✹ 2022"},
      {src: "/images/Atlante_2.jpg", alt: "Atlante_2", caption: "Atlante della trasformazione digitale della PA ✹ Editorial and Data Visualization ✹ 2022"},
      {src: "/images/Atlante_3.jpg", alt: "Atlante_3", caption: "Atlante della trasformazione digitale della PA ✹ Editorial and Data Visualization ✹ 2022"},

    ];
    var currentImage = Math.floor(Math.random() * images.length);

    $("img").attr("src", images[currentImage].src);
    $("img").attr("alt", images[currentImage].alt);
    $(".column.caption").text(images[currentImage].caption);

    function changeImage(back) {
      if (back) {
        currentImage = (currentImage - 1 + images.length) % images.length;
      } else {
        currentImage = (currentImage + 1) % images.length;
      }
      $("img").fadeOut(0, function() {
        $("img").attr("src", images[currentImage].src);
        $("img").attr("alt", images[currentImage].alt);
        $(".column.caption").text(images[currentImage].caption);
        $("img").fadeIn(0);
      });
    }

    setInterval(changeImage, 4000);

    $("img").on("click", function(event) {
    if (event.clientX < $(this).width() / 2) {
      changeImage(true);
    } else {
      changeImage();
    }
    });

  
  
  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove',(e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  }) 


  });

  