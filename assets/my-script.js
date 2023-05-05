document.addEventListener('mousemove', function(e){
    var cursor = document.querySelector('.circle-cursor');
    cursor.style.top = (e.pageY - 10) + 'px';
    cursor.style.left = (e.pageX - 10) + 'px';
  });
  

  var images = [
    "url(/images/bg_1.png)",
    "url(/images/bg_2.png)",
    "url(/images/bg_3.png)",
  ];

  var currentImageIndex = 1;

setInterval(function() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.body.style.backgroundImage = images[currentImageIndex];
}, 2000);