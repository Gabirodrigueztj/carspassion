// Espera a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    // Inicializa Swiper con las opciones deseadas
    var mySwiper = new Swiper('.swiper-container', {
      // Configuración de la navegación
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // Configuración de la paginación
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // Configuración del autoplay (deslizamiento automático)
      autoplay: {
        delay: 5000, // Tiempo en milisegundos entre cada slide
        disableOnInteraction: false, // Permite la interacción del usuario para detener el autoplay
      },
    });
  });
  