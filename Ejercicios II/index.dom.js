import hamburguerMenu from "./menu_hamburguesa.js";
import { digitalClock,alarm } from "./reloj.js";
// import { moveBall, shortcuts } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./botton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilter from "./filtro_busqueda.js";
import draw from "./sorteo.js";
import slider from "./carousel.js";
import scrollSpy from "./scroll_spy.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validaciones_formularios.js";
import speechReader from "./narrador.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("/Ejercicios II/assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","Apr 12, 2022 03:23:19","Feliz cumpleaños!");
    scrollTopButton(".scroll-top-btn");

    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc" target="_blank">Ver Video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );

    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/bwjhk1Ywa34rzk81A" target="_blank">Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57556.95579740619!2d-74.0578537177139!3d40.69677149739523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sEstatua%20de%20la%20Libertad!5e0!3m2!1ses!2sco!4v1647474570336!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    );

    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    getGeolocation("geolocation");
    searchFilter(".card-filter",".card");
    draw("#winner-btn",".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();
    
});

darkTheme(".dark-theme-btn","dark-mode");
networkStatus();
speechReader();

// d.addEventListener("keydown", (e) => {
//     shortcuts(e);
//     moveBall(e, ".ball", ".stage");
// })

