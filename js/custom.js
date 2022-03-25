var swiper = new Swiper(".mySwiper", {
  autoplay: {
      delay: 3000,
    },
});

$.scrollify({
  section : ".animated-section",
  scrollSpeed: 400,
  interstitialSection : ".intersitial-section",
  setHeights: false
});