// Play hide and seek with css class HEADER
$(document).ready(function() {
  $('.text_container').find('.hidden-text').hide(); // nasconde il testo all'avvio della pagina

  $('.extra').click(function() {
    var $text_container = $(this).closest('.text_container'); // trova il genitore .text_container del bottone
    $text_container.find('.hidden-text').toggle(); // alterna la visibilità del testo all'interno del genitore .text_container
  });
});

// Play hide and seek with css class SECTIONS 
$(document).ready(function() {
  $('.text_container-section').find('.hidden-text-section').css('visibility', 'hidden'); // nasconde il testo all'avvio della pagina

  $('.extra-section').click(function() {
    var $text_container = $(this).closest('.text_container-section'); // trova il genitore .text_container del bottone
    var $hidden_text = $text_container.find('.hidden-text-section');
    
    if ($hidden_text.css('visibility') === 'hidden') {
      $hidden_text.css('visibility', 'visible'); // mostra il testo se è invisibile
    } else {
      $hidden_text.css('visibility', 'hidden'); // altrimenti nascondilo
    }
  });
});


// Play hide and seek with css class section
$(document).ready(function() {
  $('.text_container-section').find('.hidden-text-section').hide(); // nasconde il testo all'avvio della pagina

  $('.extra-section').click(function() {
    var $text_container = $(this).closest('.text_container-section'); // trova il genitore .text_container del bottone
    $text_container.find('.hidden-text-section').toggle(); // alterna la visibilità del testo all'interno del genitore .text_container
  });
});

// When the user scrolls down 30px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

