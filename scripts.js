//INIZIALIZZAZIONE TYPING EFFECT
document.addEventListener("DOMContentLoaded", function () {
    const text = "MY PORTFOLIO";
    const title = document.getElementById("title-text");
    let index = 0;

    function type() {
        if (index < text.length) {
            title.textContent = text.substring(0, index + 1);
            index++;
            setTimeout(type, 150);
        } else {
            title.style.borderRight = "none";
        }
    }

    // 🔥 Imposta il testo invisibile inizialmente (ma con spazio già riservato)
    title.textContent = text;
    title.style.color = "transparent";

    setTimeout(() => {
        title.style.color = "#12193b"; // Mostra il testo e inizia l'effetto
        title.textContent = "";
        type();
    }, 200);
});
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
    let sections = document.querySelectorAll(".video-container, .schede-container"); // Seleziona entrambe le sezioni
    let scrollPosition = window.scrollY + window.innerHeight / 2;

    let homepageColor = "#A0A4F2"; // Colore di default

    let colorSet = false; // Flag per controllare se un colore è stato impostato

    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;

        // Verifica se la sezione è visibile
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            let newColor = section.getAttribute("data-color");

            // Cambia il colore solo se la sezione ha un data-color
            if (newColor) {
                document.body.style.backgroundColor = newColor;
                colorSet = true; // Imposta il flag su true
            }
        }
    });

    // Se nessuna sezione è attiva, applica il colore della homepage
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


function toggleMenu() {
    let overlay = document.querySelector('.container-overlay');
    let menu = document.querySelector('.navbar-menu');
    let toggler = document.querySelector('.navbar-toggler');
    let html = document.documentElement; // Seleziona l'elemento html

    if (overlay.classList.contains('show')) {
        overlay.classList.remove('show'); // Nasconde il menu
        menu.classList.remove('show'); // Nasconde il menu
        toggler.classList.remove('menu-open'); // Ripristina l'hamburger
        html.classList.remove('no-scroll'); // Riabilita lo scroll
    } else {
        overlay.classList.add('show'); // Mostra il menu
        menu.classList.add('show'); // Mostra il menu
        toggler.classList.add('menu-open'); // Cambia in X
        html.classList.add('no-scroll'); // Blocca lo scroll
    }
}

//CHIUSURA MENU QUANDO CLICCO SU UNA VOCE
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function() {
      // Chiudi il menu
      let overlay = document.querySelector('.container-overlay');
      let menu = document.querySelector('.navbar-menu');
      let toggler = document.querySelector('.navbar-toggler');
      let html = document.documentElement; // Seleziona l'elemento html
  
      overlay.classList.remove('show');
      menu.classList.remove('show');
      toggler.classList.remove('menu-open');
      html.classList.remove('no-scroll');
    });
  });



//effetto scrolling parallax verticale

document.addEventListener("scroll", function () {
    let elementi = document.querySelectorAll(".video-container, .video-titolo, .video-text, .schede-container");

    elementi.forEach(elemento => {
        let rect = elemento.getBoundingClientRect();
        let windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 50 && rect.bottom > 0) { 
            // 🔥 Quando l'elemento entra nello schermo
            elemento.style.opacity = 1;
            elemento.style.transform = "translateY(0)";
        } else {
            // 🔥 Quando l'elemento esce dallo schermo, resetta l'animazione
            elemento.style.opacity = 0;
            elemento.style.transform = "translateY(50px)";
        }
    });
});



