$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
  
  $('nav li').on('click', function(e) {                
    var w = $(window).width(); if(w < 480 ) {
      menu.slideToggle(); 
    }
  });
  $('.open-menu').height($(window).height());
});

// galerija

const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

//dodavanje opacity na prvu sliku

imgs[0].style.opacity = opacity;

imgs.forEach (img => img.addEventListener('click', imgClick));

function imgClick(e) {
  // reset opacity za sve slike
  imgs.forEach(img => (img.style.opacity = 1));

  // menjanje trenutne slike sa slikom na koju smo kliknuli
  current.src = e.target.src;

  // add fade in class

  current.classList.add('fade-in');

  // remove fade in class after 0.5 seconds

  setTimeout(() => current.classList.remove('fade-in'), 500);

  // menjanje opacity-ja u opacity var
  e.target.style.opacity = opacity;

}