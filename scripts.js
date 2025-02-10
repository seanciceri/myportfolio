// Funzione per mostrare/nascondere il menu hamburger
function toggleMenu() {
    document.querySelector('.navbar-nav').classList.toggle('show');
}

//INIZIALIZZAZIONE SLICK Carousel
$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 1300,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,  // Disabilita i puntini
        arrows: true, // Attiva le frecce
        slidesToShow: 3,
        slidesToScroll: 1,
        
    });
  });

  $('.carousel').on('afterChange', function(event, slick, currentSlide){
    $('.carousel .slick-slide').removeClass('active-slide'); // Rimuove la classe da tutte le immagini
    
    let centerIndex = Math.floor(slick.options.slidesToShow / 2); // Trova la slide centrale
    $('.carousel .slick-slide[data-slick-index="' + (currentSlide + centerIndex) + '"]').addClass('active-slide');
});
      

// INIZIALIZZAZIONE CONTROLLO RIPRODUZIONE VIDEO (SE UN VIDEO è IN PLAY, UN'ALTRO NON PUò ESSERE RIPRODOTTO)

document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll("video");

    videos.forEach((video) => {
        video.addEventListener("play", function () {
            // Ferma tutti gli altri video
            videos.forEach((v) => {
                if (v !== video) {
                    v.pause();
                }
            });
        });
    });
});




