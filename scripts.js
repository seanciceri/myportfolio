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
        arrows: true, // Attiva le frecce
        prevArrow: '<button class="slick-prev">&#10094;</button>',
        nextArrow: '<button class="slick-next">&#10095;</button>'
    });
  });

  $('.carousel').on('afterChange', function(event, slick, currentSlide){
    $('.carousel .slick-slide').removeClass('active-slide'); // Rimuove la classe da tutte le immagini
    
    let centerIndex = Math.floor(slick.options.slidesToShow / 2); // Trova la slide centrale
    $('.carousel .slick-slide[data-slick-index="' + (currentSlide + centerIndex) + '"]').addClass('active-slide');
});
      
//INIZIALIZZAZIONE MODELLO 3D

