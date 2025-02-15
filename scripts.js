
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

//INIZIALIZZAZIONE 3D MODEL


// Effetto cambio colore body

document.addEventListener("scroll", function () {
    let sections = document.querySelectorAll(".video-container");
    let scrollPosition = window.scrollY + window.innerHeight / 2;
    
    let homepageColor = "#A0A4F2"; // Cambia questo con il colore della tua homepage

    let colorSet = false; // Flag per controllare se un colore è stato impostato


    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            let newColor = section.getAttribute("data-color");
            document.body.style.backgroundColor = newColor;
            colorSet = true; // Imposta la flag su true perché un colore è stato applicato
        }
    });

    // Se nessuna sezione è stata rilevata come attiva, riporta il colore della homepage
    if (!colorSet) {
        document.body.style.backgroundColor = homepageColor;
    }
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

// NASCONDE LA BARRA SE IL VIDEO è IN RIPRODUZIONE, E MOSTRA LA BARRA SE PASSO SOPRA CON IL MOUSE

document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll("video");

    videos.forEach((video) => {
        const progressContainer = video.nextElementSibling; // Prendiamo la barra di avanzamento
        
        video.addEventListener("play", function () {
            progressContainer.style.opacity = "0"; // Nasconde la barra
        });

        video.addEventListener("pause", function () {
            progressContainer.style.opacity = "1"; // Mostra la barra
        });

        // Mostra la barra quando il mouse passa sopra il video
        video.addEventListener("mouseenter", function () {
            progressContainer.style.opacity = "1";
        });

        // Se il video è in play, nasconde la barra quando il mouse esce
        video.addEventListener("mouseleave", function () {
            if (!video.paused) {
                progressContainer.style.opacity = "0";
            }
        });
    });
});

//PULSANTE HAMBURGHER ATTIVAZIONE

// JavaScript per gestire l'apertura e la chiusura del menu
// Funzione per aprire e chiudere il menu
function toggleMenu() {
    const menu = document.getElementById("navbarNav"); // Seleziona il menu
    menu.classList.toggle("show"); // Aggiunge/rimuove la classe 'show'
}




