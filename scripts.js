// Funzione per mostrare/nascondere il menu hamburger
function toggleMenu() {
    document.querySelector('.navbar-nav').classList.toggle('show');
}

//INIZIALIZZAZIONE SLICK Carousel
$(document).ready(function(){
    $('.carousel').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,  // Disabilita i puntini
        arrows: false, // Attiva le frecce
        prevArrow: '<button class="slick-prev">&#10094;</button>',
        nextArrow: '<button class="slick-next">&#10095;</button>'
    });
  });
      

