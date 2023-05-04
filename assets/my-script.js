document.addEventListener('mousemove', function(e){
    var cursor = document.querySelector('.circle-cursor');
    cursor.style.top = (e.pageY - 10) + 'px';
    cursor.style.left = (e.pageX - 10) + 'px';
  });
  