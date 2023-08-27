// TOOLTIP

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// SWIPER

const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },

      simulateTouch: false,

      slidesPerView: "auto",
      spaceBetween: 20,

      loop: true,
      loopedSlides: 2,

      speed: 800,

      breakpoints: {
        1400: {
            slidesPerView: 3,
        },
      },
  });