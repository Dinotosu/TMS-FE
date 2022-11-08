import "../scss/index.scss";
import "../scss/animation.scss";

/* Your JS Code goes here */

/* Demo JS */
import "./demo.js";


new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
